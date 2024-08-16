import { UserSchema } from "src/types/schema";
import db from "../knexConfig";
import { ICustomerInfo, infoGetResponseDto } from "@shared/dto";

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

export function getByPhone(phone: string): Promise<UserSchema[]> {
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
  const userInfo = await db("users")
    .select("phone", "name")
    .where({ id: userId })
    .first();

  if (!userInfo) {
    throw new Error("User not found");
  }

  const customerInfo: ICustomerInfo[] = await db("customers")
    .select()
    .where({ user_id: userId });

  for (const customer of customerInfo) {
    const alarmSchedule = await db("alarm")
      .select()
      .where({ user_id: userId, customer_id: customer.id });

    customer.alarm = alarmSchedule;
  }
  return { userInfo: userInfo, customerInfo: customerInfo };
}
