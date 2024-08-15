import config from "../../config";
import db from "../../db/knexConfig";

export function checkCallSchedule() {
  console.log(
    `Task executed at (${config.CRON_SERVER.TIME_ZONE}):`,
    new Date().toLocaleTimeString("en-US", {
      timeZone: config.CRON_SERVER.TIME_ZONE,
    })
  );
}
