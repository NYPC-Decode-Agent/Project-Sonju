import { IConfig } from "./types/common";

require("dotenv").config();

const defaultConfig: IConfig = {
  REDIS: {
    USER: "default",
    PASSWORD: "mypassword",
    HOST: "redis",
    PORT: 6379,
  },

  MY_SQL: {
    PORT: 3306,
    HOST: "mysql",
    USER: "myuser",
    PASSWORD: "mypassword",
    DATABASE: "mydatabase",
    TIMEZONE: "Asia/Seoul",
  },

  CRON_SERVER: {
    TIME_ZONE: "Asia/Seoul",
  },

  MAIN_SERVER: {
    PORT: 3000,
    CORS_WHITELIST: ["http://localhost:3000", "http://localhost:3001"],
    SESSION: {
      SECRET: process.env.SESSION_SECRET || "default-secret-key",
      SECURE: process.env.NODE_ENV === "production",
    },
  },
};

export default defaultConfig;
