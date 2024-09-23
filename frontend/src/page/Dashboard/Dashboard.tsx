import { Main, SmallPage } from '@/common/Container';
import { Button } from '@/common/Button';
import { useNavigate } from 'react-router-dom';
import { usePersonDataQuery } from '@/api';

const dayString = ['일', '월', '화', '수', '목', '금', '토'];

const makeScheduleString = (schedule: number[]) => {
  const arr = (Object.keys(schedule) as any[])
    .filter((i) => schedule[i] >= 0)
    .map((i) => dayString[i])
  if (arr.length === 0) return "설정되어 있지 않습니다.";
  return `매주 ${arr.join("·")}요일`;
};

const randint = (start: number, end: number) => (Math.random() * (end - start + 1) | 0) + start;

export const Dashboard = () => {
  const { data: personData, isSuccess } = usePersonDataQuery();
  const navigate = useNavigate();
  if (!isSuccess) return null;

  return (
    <Main>
      <SmallPage header="정보 관리" size={3}>
        <div className="flex flex-col gap-4">
          {Object.values(personData).filter(({ id }) => id !== 0)
            .map(({ id, phone, name, birth, address, memo, schedule }) => (
              <div
                key={id}
                onClick={() => navigate(`/edit/${id}`)}
                className="flex flex-col w-full px-5 py-5 rounded-md border border-gray-light hover:border-gray-medium active:border-gray-dark hover:bg-primary-950 active:bg-primary-900 [transition:all_.2s] cursor-pointer select-none"
              >
                <h2 className="mb-2 text-2xl font-semibold">{name}</h2>
                <p className="flex">
                  <div className="flex-1"><b>전화번호</b>: {phone}</div>
                  <div className="flex-1"><b>생년월일</b>: {birth}</div>
                </p>
                <p className="flex">
                  <div className="flex-1"><b>마지막 통화</b>: 2024-09-22 {randint(1, 12)}:{randint(0, 59)}</div>
                  <div className="flex-1"><b>통화 주기</b>: {makeScheduleString(schedule)}</div>
                </p>
                <p><b>주소</b>: {address}</p>
                {memo && <p><b>메모</b>: {memo}</p>}
                </div>
            ))
          }
        </div>
        <div className="mt-8">
          <Button onClick={() => navigate("/edit/0")}>추가하기</Button>
        </div>
      </SmallPage>
    </Main>
  );
};
