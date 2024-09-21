import { IAlarmSchema, ICustomerSchema, IUserSchema } from "src/types/schema";
import db from "../knexConfig";
import { IAlarm, ICustomerInfo, InfoGetResponseDto } from "@shared/dto";

export function insert(
  phone: string,
  name: string,
  password: string
): Promise<number[]> {
  return db("users").insert({
    phone: phone,
    name: name,
    password: password,
  });
}

export function getByPhone(phone: string): Promise<IUserSchema[]> {
  return db("users").where("phone", phone);
}

export function update(data: IUserSchema): Promise<void> {
  return db("users").where("id", data.id).update(data);
}

export async function getAllInfo(userId: number): Promise<InfoGetResponseDto> {
  const userInfo: Pick<IUserSchema, "phone" | "name"> = await db("users")
    .select("phone", "name")
    .where({ id: userId })
    .first();

  if (!userInfo) {
    throw new Error("User not found");
  }

  const customers: ICustomerSchema[] = await db("customers")
    .select()
    .where({ user_id: userId });

  const customerInfo: ICustomerInfo[] = [];

  const alarmSchedule: IAlarmSchema[] = await db("alarm")
    .select()
    .where({ user_id: userId });

  const alarmInfo: (IAlarm & { id: number })[] = alarmSchedule;

  return { userInfo, alarmInfo };
}
