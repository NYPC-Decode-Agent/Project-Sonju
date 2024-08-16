import { IAlarmSchema } from "src/types/schema";
import config from "../../config";
import db from "../../db/knexConfig";

export async function checkValidAlarm() {
  console.log(`Task executed at (${config.CRON_SERVER.TIME_ZONE}):`);

  const now = new Date();

  const currentTime = now.toLocaleTimeString("en-US", {
    hour12: false,
    timeZone: config.CRON_SERVER.TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
  });

  // config.CRON_SERVER.TIME_ZONE에 맞춘 요일을 가져오기
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long", // "long", "short", or "narrow" 중 하나를 사용해야 합니다.
    timeZone: config.CRON_SERVER.TIME_ZONE,
  };

  const dayOfWeekString = new Intl.DateTimeFormat("en-US", options).format(now);
  const dayOfWeek = new Date(
    now.toLocaleString("en-US", { timeZone: config.CRON_SERVER.TIME_ZONE })
  ).getDay();

  try {
    const alarms: IAlarmSchema[] = await db("alarm")
      .whereRaw("TIME_FORMAT(time, '%H:%i') = ?", [currentTime])
      .andWhere("is_active", true);

    if (alarms.length > 0) {
      alarms.forEach(async (alarm) => {
        if (
          alarm.day_of_week[dayOfWeek] ||
          alarm.day_of_week.every((day) => day === false)
        ) {
          if (alarm.day_of_week.every((day) => day === false)) {
            await db("alarm")
              .update({ is_active: false })
              .where("id", alarm.id);
          }

          console.log(`Valid alarm found: ${alarm.id}, Time: ${alarm.time}`);
          // 여기서 알람을 처리하는 로직을 추가할 수 있습니다.
        }
      });
    } else {
      console.log("No matching alarms found at this time.");
    }
  } catch (error) {
    console.error("Error checking alarms:", error);
  }

  console.log(
    `Current time: ${currentTime} (Day: ${dayOfWeek} - ${dayOfWeekString})`
  );
}
