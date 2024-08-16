import db from "../knexConfig";

export function insert(
  user_id: number,
  phone: string,
  name: string,
  age: number
) {
  return db("customers").insert({
    user_id: user_id,
    phone: phone,
    name: name,
    age: age,
  });
}
