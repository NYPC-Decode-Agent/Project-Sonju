import { IAlarm } from "@shared/dto";
import db from "../knexConfig";
import { IAlarmSchema } from "src/types/schema";

export function insertAlarm(data: Omit<IAlarmSchema, "id">): Promise<number[]> {
  return db("alarm").insert(data);
}

export function updateAlarm(data: IAlarmSchema): Promise<void> {
  return db("alarm")
    .where({ user_id: data.user_id, customer_id: data.customer_id })
    .update(data);
}

export function deleteAlarm(
  user_id: number,
  customer_id: number
): Promise<number> {
  return db("alarm")
    .where({ user_id: user_id, customer_id: customer_id })
    .del();
}
