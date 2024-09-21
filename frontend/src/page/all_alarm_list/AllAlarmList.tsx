import React, { useState } from 'react';
import { Main, SmallPage } from '@/common/Container';

interface dummyAlarms {
  id: number;
  name: string;
  birthdate: string;
  memo: string;
}

// 초기 고객 데이터
const initialAlarms: dummyAlarms[] = [
  { id: 1, name: 'John Doe', birthdate: '1990-01-01', memo: 'VIP Customer' },
  {
    id: 2,
    name: 'Jane Smith',
    birthdate: '1995-05-20',
    memo: 'Frequent Buyer',
  },
  {
    id: 3,
    name: 'Tom Hanks',
    birthdate: '1980-07-10',
    memo: 'Interested in discounts',
  },
];

export const AllAlarmList: React.FC = () => {
  // 고객 목록 상태
  const [alarms, setAlarms] = useState<dummyAlarms[]>(initialAlarms);

  // 카드 클릭 핸들러
  const handleCardClick = (alarm: dummyAlarms) => {
    alert(`Clicked on: ${alarm.name}`);
  };

  // 새로운 고객 추가 핸들러
  const handleAddAlarm = () => {
    const newAlarm: dummyAlarms = {
      id: alarms.length + 1,
      name: `New Customer ${alarms.length + 1}`,
      birthdate: '2000-01-01',
      memo: 'Newly added customer',
    };

    // 기존 고객 목록에 새로운 고객 추가
    setAlarms([...alarms, newAlarm]);
  };

  return (
    <Main>
      <SmallPage header="전체 알람 목록" size={3} gap={8}>
        <div className="mb-4 flex justify-end">
          <button
            onClick={handleAddAlarm}
            className="rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
          >
            고객 추가
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2">
          {alarms.map((alarm) => (
            <div
              key={alarm.id}
              onClick={() => handleCardClick(alarm)}
              className="cursor-pointer rounded-lg border border-gray-300 p-4 shadow transition-shadow hover:shadow-lg"
            >
              <h2 className="mb-2 text-lg font-semibold">{alarm.name}</h2>
              <p className="text-gray-600">Birthdate: {alarm.birthdate}</p>
              <p className="text-gray-500">Memo: {alarm.memo}</p>
            </div>
          ))}
        </div>
      </SmallPage>
    </Main>
  );
};
