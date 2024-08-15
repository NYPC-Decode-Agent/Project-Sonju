import { CallScheduleSchema } from "src/types/schema";
import db from "../knexConfig";

export function getSchedulesByTime(
  currentTime: string
): Promise<CallScheduleSchema[]> {
  return db("call_schedule")
    .select("*")
    .whereRaw("TIME(time) = ?", [currentTime]);
}
