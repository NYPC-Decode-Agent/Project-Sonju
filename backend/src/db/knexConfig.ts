import { Knex } from "knex";
import config from "../config";

const knexConfig: Knex.Config = {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    user: config.MY_SQL.USER,
    password: config.MY_SQL.PASSWORD,
    database: config.MY_SQL.DATABASE,
    port: config.MY_SQL.PORT,
  },
  pool: { max: 20 },
};

const db: Knex = require("knex")(knexConfig);

export default db;
