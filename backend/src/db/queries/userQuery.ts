import { IAlarmSchema, ICustomerSchema, IUserSchema } from "src/types/schema";
import db from "../knexConfig";
import { IAlarm, ICustomerInfo, infoGetResponseDto } from "@shared/dto";

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

export function update(
  id: number,
  name: string,
  password: string
): Promise<void> {
  return db("users").where("id", id).update({
    name: name,
    password: password,
  });
}

export async function getAllInfo(userId: number): Promise<infoGetResponseDto> {
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

  for (const customer of customers) {
    const alarmSchedule: IAlarmSchema[] = await db("alarm")
      .select()
      .where({ user_id: userId, customer_id: customer.id });

    const alarm: (IAlarm & { id: number })[] = alarmSchedule.map((alarm) => ({
      id: alarm.id,
      isRepetition: alarm.is_repetition,
      dayOfWeek: alarm.day_of_week,
      time: alarm.time,
      isActive: alarm.is_active,
      script: alarm.script,
    }));

    customerInfo.push({
      id: customer.id,
      phone: customer.phone,
      name: customer.name,
      age: customer.age,
      alarm: alarm,
    });
  }
  return { userInfo, customerInfo };
}
