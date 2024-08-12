import { CronJob } from "cron";
import config from "../config";

const job = new CronJob(
  "0 * * * * *", // cronTime
  function () {
    console.log(
      `Task executed at (${config.CRON_SERVER.TIME_ZONE}):`,
      new Date().toLocaleTimeString("en-US", {
        timeZone: config.CRON_SERVER.TIME_ZONE,
      })
    );
  }, // onTick
  null, // onComplete
  true, // start
  config.CRON_SERVER.TIME_ZONE // timeZone
);

console.log(`Cron server running`);
