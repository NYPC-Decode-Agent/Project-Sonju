import express, { Request, Response } from "express";
import mainRoute from "./routes/mainRoute";
import db from "../db/knexfiles";
import RedisStore from "connect-redis";
import config from "../config";
import { ICb1 } from "../types/common";
import { createClient } from "redis";
const session = require("express-session");
const cors = require("cors");

const app = express();

let isRedisReady = false;
let isDatabaseReady = false;

function checkIfReady() {
  return isDatabaseReady && isRedisReady;
}

let redisClient: any;

async function initializeRedis() {
  try {
    redisClient = await createClient({
      url: `redis://${config.REDIS.USER}:${config.REDIS.PASSWORD}@${config.REDIS.HOST}:${config.REDIS.PORT}`,
    })
      .on("error", (err) => {
        throw err;
      })
      .connect();
  } catch (error) {
    console.error("Unable to connect to Redis:", error);
    process.exit(1);
  }

  console.log("Redis connection established");
  isRedisReady = true;

  if (checkIfReady()) startServer();
}

async function initializeDatabase() {
  try {
    await db.raw("SELECT 1+1 AS result");
    console.log("MySQL connection established");
    isDatabaseReady = true;

    if (checkIfReady()) startServer();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}

const corsOptions = {
  origin: function (origin: string, callback: ICb1<boolean>) {
    if (config.MAIN_SERVER.CORS_WHITELIST.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

function startServer() {
  app.use(cors(corsOptions));
  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: config.MAIN_SERVER.SESSION.SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: config.MAIN_SERVER.SESSION.SECURE,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      },
    })
  );

  app.get("/liveness", (req: Request, res: Response) => {
    res.status(200).send("ALIVE");
  });

  app.use(mainRoute);

  const server = app.listen(config.MAIN_SERVER.PORT, () => {
    console.log(`Main server running`);
  });

  process.on("SIGTERM", () => {
    if (server) {
      server.close(() => {
        console.log("Process terminated");
      });
    }
  });
}

function main() {
  app.get("/readiness", (req: Request, res: Response) => {
    if (isDatabaseReady && isRedisReady) {
      res.status(200).send("READY");
    } else {
      res.status(503).send("NOT READY");
    }
  });

  initializeRedis();
  initializeDatabase();
}

main();
