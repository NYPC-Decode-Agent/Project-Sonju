import { UserSchema } from "src/types/schema";
import db from "../knexConfig";

export function insert(
  phone: string,
  name: string,
  password: string
): Promise<number[]> {
  return db("customer").insert({
    phone: phone,
    name: name,
    password: password,
  });
}

export function getByPhone(phone: string): Promise<UserSchema[]> {
  return db("customer").where("phone", phone);
}

export function update(
  id: number,
  name: string,
  password: string
): Promise<void> {
  return db("customer").where("id", id).update({
    name: name,
    password: password,
  });
}
