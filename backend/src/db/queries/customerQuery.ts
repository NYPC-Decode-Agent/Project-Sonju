import db from "../knexConfig";

export function insertCustomer(
  user_id: number,
  phone: string,
  name: string,
  birth_date: string
): Promise<number[]> {
  return db("customers").insert({
    user_id: user_id,
    phone: phone,
    name: name,
    birth_date: birth_date,
  });
}

export function updateCustomer(
  user_id: number,
  id: number,
  phone: string,
  name: string,
  birth_date: string
): Promise<void> {
  return db("customers").where({ user_id: user_id, id: id }).update({
    name: name,
    phone: phone,
    birth_date: birth_date,
  });
}

export function deleteCustomer(
  user_id: number,
  customer_id: number
): Promise<number> {
  return db("customers").where({ user_id: user_id, id: customer_id }).del();
}
