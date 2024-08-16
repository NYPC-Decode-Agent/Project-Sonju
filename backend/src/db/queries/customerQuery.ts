import db from "../knexConfig";

export function insertCustomer(
  user_id: number,
  phone: string,
  name: string,
  age: number
): Promise<number[]> {
  return db("customers").insert({
    user_id: user_id,
    phone: phone,
    name: name,
    age: age,
  });
}

export function updateCustomer(
  user_id: number,
  id: number,
  phone: string,
  name: string,
  age: number
): Promise<void> {
  return db("customers").where({ user_id: user_id, id: id }).update({
    name: name,
    phone: phone,
    age: age,
  });
}

export function deleteCustomer(
  user_id: number,
  customer_id: number
): Promise<number> {
  return db("customers").where({ user_id: user_id, id: customer_id }).del();
}
