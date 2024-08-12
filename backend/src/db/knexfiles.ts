import { Knex } from "knex";
import config from "../config";

const knexConfig: Knex.Config = {
  client: "mysql2",
  connection: {
    host: config.MY_SQL.HOST,
    user: config.MY_SQL.USER,
    password: config.MY_SQL.PASSWORD,
    database: config.MY_SQL.DATABASE,
    port: config.MY_SQL.PORT,
  },
  pool: { max: 20 },
};

const db: Knex = require("knex")(knexConfig);

interface ITable {
  test: string;
}

export default db;
