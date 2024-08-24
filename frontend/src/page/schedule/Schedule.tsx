import { useState } from "react";
import { Main, SmallPage } from "../../common/Container";

export interface IScheduleProps {
  schedule: number[]; // 길이 7, dayOfWeek[0]: 일요일, dayOfWeek[1]: 월요일
}

interface IScheduleDayButtonProps {
  activated: boolean;
  text: string;
  onClick?: () => void;
}

interface IScheduleDayTimeProps {
  activated: boolean;
  time: number;
  onChange: (time: number) => void;
}

const dayString = ["일", "월", "화", "수", "목", "금", "토"];
const half = 12 * 60;

const capHour = (x: number) => Math.floor(x > 12 ? x % 10 : x === 12 ? 0 : x);
const capMinutes = (x: number) => Math.floor(x >= 60 ? x % 10 : x);
const nabs = (x: number) => (x < 0 ? ~x : x) % 1440;
const hour = (h: number) => (h % 12 === 0 ? 12 : h % 12);
const chgTime = (time: number, newTime: number) =>
  (time < half ? 0 : half) + newTime;
const revAmpm = (time: number) => (time < half ? time + half : time - half);

const ScheduleDayButton = ({
  activated,
  text,
  onClick,
}: IScheduleDayButtonProps) => (
  <button
    className={`inline-flex w-10 h-10 items-center justify-center rounded-full border transition ${
      !activated
        ? "text-gray-light border-gray-lighter hover:text-gray-medium hover:bg-secondary-900 hover:border-secondary-900"
        : "text-gray-dark border-secondary-850 bg-secondary-850"
    } active:border-secondary-800 active:bg-secondary-800`}
    onClick={onClick}
  >
    {text}
  </button>
);

const ScheduleDayTime = ({
  activated,
  time,
  onChange,
}: IScheduleDayTimeProps) => (
  <div
    className={`inline-flex items-end gap-1 ${!activated ? "text-gray-lighter" : "text-gray-dark"}`}
  >
    <button
      className="mr-1 hover:underline"
      onClick={() => onChange(revAmpm(time))}
    >
      {time < half ? "오전" : "오후"}
    </button>
    <input
      className="w-8 text-2xl font-semibold text-right outline-none"
      type="text"
      inputMode="numeric"
      pattern="\d+"
      value={hour(Math.floor(time / 60))
        .toString()
        .padStart(2, "0")}
      onChange={(e) =>
        onChange(
          chgTime(time, capHour(Number(e.target.value)) * 60 + (time % 60)),
        )
      }
      onClick={(e) => (e.target as any).select()}
      onKeyDown={(e) =>
        e.key === "ArrowUp"
          ? onChange(chgTime(time, (time + 60) % half))
          : e.key === "ArrowDown"
            ? onChange(chgTime(time, (time - 60 + half) % half))
            : undefined
      }
    />
    <span className="text-2xl font-semibold">:</span>
    <input
      className="w-8 text-2xl font-semibold outline-none"
      type="text"
      inputMode="numeric"
      pattern="\d+"
      value={(time % 60).toString().padStart(2, "0")}
      onChange={(e) =>
        onChange(
          chgTime(
            time,
            Math.floor(time / 60) * 60 + capMinutes(Number(e.target.value)),
          ),
        )
      }
      onClick={(e) => (e.target as any).select()}
      onKeyDown={(e) =>
        e.key === "ArrowUp"
          ? onChange(chgTime(time, (time + 1) % half))
          : e.key === "ArrowDown"
            ? onChange(chgTime(time, (time - 1 + half) % half))
            : undefined
      }
    />
  </div>
);

export const Schedule = ({ schedule: initialSchedule }: IScheduleProps) => {
  const [schedule, setSchedule] = useState(initialSchedule);
  const toggleTime = (i: number) => () => {
    const newSchedule = [...schedule];
    newSchedule[i] = ~newSchedule[i];
    setSchedule(newSchedule);
  };
  const changeTime = (activated: boolean, i: number) => (newTime: number) => {
    const newSchedule = [...schedule];
    newSchedule[i] = activated ? newTime : ~newTime;
    setSchedule(newSchedule);
  };
  return (
    <Main>
      <SmallPage header="스케줄">
        <div className="flex flex-col w-56 mx-auto items-center justify-between gap-2">
          {schedule.map((time, i) => (
            <div className="flex w-full items-center justify-between">
              <ScheduleDayButton
                activated={time >= 0}
                text={dayString[i]}
                onClick={toggleTime(i)}
              />
              <ScheduleDayTime
                activated={time >= 0}
                time={nabs(time)}
                onChange={changeTime(time >= 0, i)}
              />
            </div>
          ))}
        </div>
      </SmallPage>
    </Main>
  );
};
