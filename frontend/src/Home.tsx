import { Button, ButtonLink } from './common/Button';
import { TextField } from './common/TextField';

const Home = () => {
  const handleSummit = (event: React.FormEvent) => {
    alert('문의사항 답변은 해당 연락처로 연락드리겠습니다.');
  };
  return (
    <div className="bg-gray-1000 pt-14">
      <div className="flex items-center justify-between bg-[url(/bg-wide.png)] bg-cover px-48 py-24">
        <div className="flex flex-row">
          <div className="flex flex-col gap-6">
            <h2 className="font-haru font-medium">
              마음을 쓰는 AI 통화서비스 '씀씀이'
            </h2>
            <h3 className="font-haru text-5xl font-semibold leading-tight text-secondary-750">
              마음을 쓰면,
              <br />
              마음이 닿습니다.
            </h3>
            <h3 className="font-medium">
              어르신, 오늘 하루도 안녕히 잘 지내셨나요?
              <br />
              AI 통화 서비스 ‘씀씀이’가 안부를 여쭙습니다.
            </h3>
          </div>
          <img
            src="/images/sseumsseum_1.svg"
            width="134"
            height="183"
            alt="씀씀이 캐릭터 사진 1"
          />
        </div>
        <form
          className="ml-20 flex flex-1 flex-col items-center gap-4 rounded-xl border border-gray-lighter bg-white/50 p-8"
          onSubmit={handleSummit}
        >
          <h3 className="text-md flex justify-center font-haru font-medium tracking-tight text-gray-light">
            궁금하신 점이 있으신가요?
          </h3>
          <h2 className="flex justify-center self-stretch border-b border-gray-extra-light pb-6 text-3xl font-bold tracking-tight">
            문의하기
          </h2>
          <TextField placeholder="이름" type="text" required />
          <TextField placeholder="전화번호" type="tel" required />
          <TextField placeholder="문의사항" type="text" required />
          <div className="mt-4 flex w-[30%] flex-col gap-3">
            <Button type="submit">문의하기</Button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center gap-6 bg-white px-40 py-20">
        <h3 className="font-haru text-3xl font-medium">
          <span className="text-primary-700">씀씀이</span>가 뭐예요?
        </h3>
        <div className="flex gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex h-[172px] w-[172px] items-end justify-end rounded-full bg-green-100">
              <img src="/images/grandmother_1.svg" width="138" />
            </div>
            <div className="text-center font-medium">
              홀로 계신 어르신이
              <br />
              전화를 걸거나 받을 수 있어요.
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex h-[172px] w-[172px] items-end justify-center rounded-full bg-orange-100">
              <img src="/images/sonju_1.svg" width="138" />
            </div>
            <div className="text-center font-medium">
              일정 기간 이상 연락을 받지 않으면
              <br />
              비상 연락이 가요.
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex h-[172px] w-[172px] items-end justify-center rounded-full bg-secondary-950">
              <img src="/images/phone_1.svg" width="140" />
            </div>
            <div className="text-center font-medium">
              비상 알림을 통해
              <br />
              안부를 확인해요.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-24 bg-secondary-950 py-8">
        <div className="h-64 w-[190px] bg-[url(/images/grandparents_1.svg)] bg-cover"></div>
        <div className="flex flex-col items-center gap-8">
          <div className="text-center font-haru text-3xl font-medium leading-tight text-secondary-700">
            전화 한 통으로
            <br />
            씀씀이를 만나 보세요.
          </div>
          <ButtonLink href="/">전화하러 가기 →</ButtonLink>
        </div>
        <img src="/images/sseumsseume_2.svg" width="142" />
      </div>
      <div className="flex flex-col justify-center bg-white px-40 py-20 text-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-haru text-3xl font-medium">
            내 곁에 가까이,
            <br />
            <span className="text-primary-700">사회복지사 씀씀이</span>
          </h2>
          <h3 className="font-medium">
            씀씀이는 홀로 계신 어르신의 일상 체크부터
            <br />
            비상시 알림까지 보내주는 다정한 말벗입니다!
          </h3>
        </div>
        <img src="/images/description_1.svg" />
      </div>
      <div className="flex flex-col justify-center gap-8 px-40 py-20 text-center">
        <h2 className="font-haru text-3xl font-medium">
          누구나 쉽게, 복잡한 절차 없이
          <br />
          <span className="text-primary-700">전화 한 통</span>으로 바로 사용할
          수 있습니다.
        </h2>
        <div className="flex items-center gap-8">
          <img src="/images/sseumsseume_3.svg" width="139" height="217" />
          <div className="h-[201px] w-[10000px] bg-[url(/images/description_2.svg)] bg-cover bg-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
