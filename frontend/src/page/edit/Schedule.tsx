import { useState } from "react";

export interface IScheduleProps {
  schedule: number[]; // 길이 7, dayOfWeek[0]: 일요일, dayOfWeek[1]: 월요일
}

interface IScheduleDayButtonProps {
  activated: boolean;
  text: string;
  onClick?: () => void;
}

interface IScheduleAmpmButtonProps {
  type: boolean;
  activated: boolean;
  time: number;
  onChange: (time: number) => void;
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
    className={`inline-flex w-12 h-12 text-xl font-medium items-center justify-center rounded-full border transition ${
      !activated
        ? "text-gray-light border-gray-lighter hover:text-gray-medium hover:bg-primary-850 hover:border-primary-850"
        : "text-gray-dark border-primary-800 bg-primary-800"
    } active:border-primary-750 active:bg-primary-750`}
    onClick={onClick}
  >
    {text}
  </button>
);

const ScheduleAmpmButton = ({ type, activated, time, onChange }: IScheduleAmpmButtonProps) => (
  <button
    className={`mr-1 border rounded transition px-2 py-1 leading-4 ${
      !activated
      ? "border-gray-lighter"
      : (time < half) !== type
        ? "border-gray-lighter hover:text-gray-medium hover:bg-primary-850 hover:border-primary-850 active:border-primary-750 active:bg-primary-750"
        : "text-gray-dark border-primary-800 bg-primary-800"
    }`}
    onClick={() => activated && (time < half) !== type && onChange(revAmpm(time))}
  >{!type ? "오전" : "오후"}</button>
);

const ScheduleDayTime = ({
  activated,
  time,
  onChange,
}: IScheduleDayTimeProps) => (
  <div
    className={`inline-flex items-center gap-1 ${!activated ? "text-gray-lighter" : "text-gray-dark"}`}
  >
    <div className="inline-flex flex-col px-1 gap-1">
      <ScheduleAmpmButton type={false} activated={activated} time={time} onChange={onChange} />
      <ScheduleAmpmButton type={true} activated={activated} time={time} onChange={onChange} />
    </div>
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
    <>
      {schedule.map((time, i) => (
        <div key={i} className="flex w-full items-center justify-between rounded-md px-4 py-2 border border-gray-light">
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
    </>
  );
};
