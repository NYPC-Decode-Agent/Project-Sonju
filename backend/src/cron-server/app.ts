import { CronJob } from "cron";
import knex from "knex";
import config from "../config";
import db from "../db/knexConfig";
import * as callScheduleJob from "./jobs/callScheduleJob";

// 데이터베이스 연결 테스트 및 크론 작업 시작
db.raw("SELECT 1")
  .then(() => {
    console.log("Connected to MySQL database");

    // 크론 작업 정의 및 시작
    const job = new CronJob(
      "0 * * * * *", // cronTime
      callScheduleJob.checkCallSchedule, // onTick
      null, // onComplete
      true, // start
      config.CRON_SERVER.TIME_ZONE // timeZone
    );

    console.log("Cron server running");
  })
  .catch((err) => {
    console.error("Failed to connect to MySQL database:", err);
  });
