import { IAlarm } from "@shared/dto";
import db from "../knexConfig";

export function insertAlarm(
  user_id: number,
  customer_id: number,
  alarm: IAlarm
): Promise<number[]> {
  return db("alarm").insert({
    user_id: user_id,
    customer_id: customer_id,
    is_repetition: alarm.isRepetition,
    day_of_week: alarm.dayOfWeek,
    time: alarm.time,
    is_active: alarm.isActive,
    script: alarm.script,
  });
}

export function updateAlarm(
  user_id: number,
  customer_id: number,
  alarm: IAlarm
): Promise<void> {
  return db("alarm")
    .where({ user_id: user_id, customer_id: customer_id })
    .update({
      is_repetition: alarm.isRepetition,
      day_of_week: alarm.dayOfWeek,
      time: alarm.time,
      is_active: alarm.isActive,
      script: alarm.script,
    });
}

export function deleteAlarm(
  user_id: number,
  customer_id: number
): Promise<number> {
  return db("alarm")
    .where({ user_id: user_id, customer_id: customer_id })
    .del();
}
