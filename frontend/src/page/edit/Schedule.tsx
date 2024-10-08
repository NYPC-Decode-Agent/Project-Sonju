export interface IScheduleProps {
  schedule: number[]; // 길이 7, dayOfWeek[0]: 일요일, dayOfWeek[1]: 월요일
  setSchedule: (schedule: number[]) => void;
};

interface IScheduleDayButtonProps {
  activated: boolean;
  text: string;
  onClick?: () => void;
};

interface IScheduleAmpmButtonProps {
  type: boolean;
  activated: boolean;
  time: number;
  onChange: (time: number) => void;
};

interface IScheduleDayTimeProps {
  activated: boolean;
  time: number;
  onChange: (time: number) => void;
};

const dayString = ['일', '월', '화', '수', '목', '금', '토'];
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
    className={`inline-flex h-12 w-12 items-center justify-center rounded-full border text-xl font-medium transition ${
      !activated
        ? 'border-gray-lighter text-gray-light hover:border-primary-850 hover:bg-primary-850 hover:text-gray-medium'
        : 'border-primary-800 bg-primary-800 text-gray-dark'
    } active:border-primary-750 active:bg-primary-750`}
    onClick={onClick}
  >
    {text}
  </button>
);

const ScheduleAmpmButton = ({
  type,
  activated,
  time,
  onChange,
}: IScheduleAmpmButtonProps) => (
  <button
    className={`mr-1 rounded border px-2 py-1 leading-4 transition ${
      !activated
        ? 'border-gray-lighter'
        : time < half !== type
          ? 'border-gray-lighter hover:border-primary-850 hover:bg-primary-850 hover:text-gray-medium active:border-primary-750 active:bg-primary-750'
          : 'border-primary-800 bg-primary-800 text-gray-dark'
    }`}
    onClick={() => activated && time < half !== type && onChange(revAmpm(time))}
  >
    {!type ? '오전' : '오후'}
  </button>
);

const ScheduleDayTime = ({
  activated,
  time,
  onChange,
}: IScheduleDayTimeProps) => (
  <div
    className={`inline-flex items-center gap-1 ${!activated ? 'text-gray-lighter' : 'text-gray-dark'}`}
  >
    <div className="inline-flex flex-col gap-1 px-1">
      <ScheduleAmpmButton
        type={false}
        activated={activated}
        time={time}
        onChange={onChange}
      />
      <ScheduleAmpmButton
        type={true}
        activated={activated}
        time={time}
        onChange={onChange}
      />
    </div>
    <input
      className="w-8 text-right text-2xl font-semibold outline-none"
      type="text"
      inputMode="numeric"
      pattern="\d+"
      value={hour(Math.floor(time / 60))
        .toString()
        .padStart(2, '0')}
      onChange={(e) =>
        onChange(
          chgTime(time, capHour(Number(e.target.value)) * 60 + (time % 60)),
        )
      }
      onClick={(e) => (e.target as any).select()}
      onKeyDown={(e) =>
        e.key === 'ArrowUp'
          ? onChange(chgTime(time, (time + 60) % half))
          : e.key === 'ArrowDown'
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
      value={(time % 60).toString().padStart(2, '0')}
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
        e.key === 'ArrowUp'
          ? onChange(chgTime(time, (time + 1) % half))
          : e.key === 'ArrowDown'
            ? onChange(chgTime(time, (time - 1 + half) % half))
            : undefined
      }
    />
  </div>
);

export const Schedule = ({ schedule, setSchedule }: IScheduleProps) => {
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
        <div
          key={i}
          className="flex w-full items-center justify-between rounded-md border border-gray-light px-4 py-2"
        >
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
