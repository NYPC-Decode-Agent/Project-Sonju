import { Main, SmallPage } from '@/common/Container';
import { InfoGetResponseDto } from '@shared/dto';
import { ButtonLink } from '@/common/Button';
import { useNavigate } from 'react-router-dom';

type IPersonInfo = InfoGetResponseDto["alarmInfo"][number];

// 초기 고객 데이터
const samplePersons: IPersonInfo[] = [
  {
    id: 1,
    name: "김철수",
    is_active: true,
    phone: "01012345678",
    birth_date: "19500101",
    address: "서울특별시 강남구 테헤란로",
    time: [null, null, null, null, null, null, null],
    ai_script: "안녕하세요. 씀씀이예요.",
    memo: "심장약 복용: 특별 케어 필요",
    emergency_phone: "+821011111111",
    emergency_count: 3,
  },
  {
    id: 2,
    name: "이영희",
    is_active: true,
    phone: "01087654321",
    birth_date: "19491231",
    address: "서울특별시 강남구 테헤란로",
    time: [null, "0", null, null, "0", null, null],
    ai_script: "안녕하세요. 씀씀이예요.",
    memo: "",
    emergency_phone: "+821011111111",
    emergency_count: 3,
  },
];

const dayString = ['일', '월', '화', '수', '목', '금', '토'];

const makeTimeString = (time: (string | null)[]) => {
  const arr = (Object.keys(time) as any[])
    .filter((i) => time[i] !== null)
    .map((i) => dayString[i])
  if (arr.length === 0) return "설정되어 있지 않습니다.";
  return `매주 ${arr.join("·")}요일`;
};

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <SmallPage header="정보 관리" size={3}>
        <div className="flex flex-col gap-4">
          {samplePersons.map(({ id, phone, name, birth_date, address, memo, time }) => (
            <div
              key={id}
              onClick={() => navigate('/edit')}
              className="flex flex-col w-full px-5 py-5 rounded-md border border-gray-light hover:border-gray-medium active:border-gray-dark hover:bg-primary-950 active:bg-primary-900 [transition:all_.2s] cursor-pointer select-none"
            >
              <h2 className="mb-2 text-2xl font-semibold">{name}</h2>
              <p className="flex">
                <div className="flex-1"><b>전화번호</b>: {phone}</div>
                <div className="flex-1"><b>생년월일</b>: {birth_date}</div>
              </p>
              <p className="flex">
                <div className="flex-1"><b>마지막 통화</b>: 2024-09-22 12:30</div>
                <div className="flex-1"><b>통화 주기</b>: {makeTimeString(time)}</div>
              </p>
              <p><b>주소</b>: {address}</p>
              {memo && <p><b>메모</b>: {memo}</p>}
              </div>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/edit">추가하기</ButtonLink>
        </div>
      </SmallPage>
    </Main>
  );
};
