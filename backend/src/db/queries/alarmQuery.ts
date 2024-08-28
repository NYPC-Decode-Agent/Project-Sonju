import db from "../knexConfig";
import { IAlarmSchema } from "src/types/schema";

export function insertAlarm(data: Omit<IAlarmSchema, "id">): Promise<number[]> {
  const jsonData: any = structuredClone(data); // TODO: typing
  jsonData.day_of_week = JSON.stringify(jsonData.day_of_week);

  return db("alarm").insert(jsonData);
}

export function updateAlarm(data: IAlarmSchema): Promise<void> {
  const jsonData: any = structuredClone(data); // TODO: typing
  jsonData.day_of_week = JSON.stringify(jsonData.day_of_week);

  return db("alarm")
    .where({
      user_id: data.user_id,
      customer_id: data.customer_id,
      id: data.id,
    })
    .update(jsonData);
}

export function deleteAlarm(
  user_id: number,
  customer_id: number,
  alarm_id: number
): Promise<number> {
  return db("alarm")
    .where({ user_id: user_id, customer_id: customer_id, id: alarm_id })
    .del();
}
