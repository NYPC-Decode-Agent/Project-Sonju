import { Button, ButtonLink } from "./common/Button";
import { TextField } from "./common/TextField";

const Home = () => {
  const handleSummit = (event: React.FormEvent) => {
    alert("문의사항 답변은 해당 연락처로 연락드리겠습니다.");
  };
  return (
    <div className="pt-14 bg-gray-1000">
      <div className="flex px-48 py-24 bg-[url(/bg-wide.png)] bg-cover items-center justify-between">
        <div className="flex flex-row">
          <div className="flex flex-col gap-6">
            <h2 className="font-haru font-medium">
              마음을 쓰는 AI 통화서비스 '씀씀이'
            </h2>
            <h3 className="text-secondary-750 font-haru font-semibold leading-tight text-5xl">
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
          className="flex flex-col gap-4 flex-1 bg-white/50 p-8 items-center border border-gray-lighter rounded-xl ml-20"
          onSubmit={handleSummit}
        >
          <h3 className="flex justify-center text-md text-gray-light font-haru font-medium tracking-tight">
            궁금하신 점이 있으신가요?
          </h3>
          <h2 className="flex justify-center pb-6 border-b border-gray-extra-light text-3xl font-bold tracking-tight self-stretch">
            문의하기
          </h2>
          <TextField placeholder="이름" type="text" required />
          <TextField placeholder="전화번호" type="tel" required />
          <TextField placeholder="문의사항" type="text" required />
          <div className="flex flex-col mt-4 gap-3 w-[30%]">
            <Button type="submit">문의하기</Button>
          </div>
        </form>
      </div>
      <div className="flex flex-col px-40 py-20 gap-6 bg-white items-center">
        <h3 className="font-haru font-medium text-3xl">
          <span className="text-primary-700">씀씀이</span>가 뭐예요?
        </h3>
        <div className="flex gap-16">
          <div className="flex flex-col gap-6">
            <div className="flex w-[172px] h-[172px] rounded-full bg-green-100 items-end justify-end">
              <img src="/images/grandmother_1.svg" width="138" />
            </div>
            <div className="font-medium text-center">
              홀로 계신 어르신이
              <br />
              전화를 걸거나 받을 수 있어요.
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex w-[172px] h-[172px] rounded-full bg-orange-100 items-end justify-center">
              <img src="/images/sonju_1.svg" width="138" />
            </div>
            <div className="font-medium text-center">
              일정 기간 이상 연락을 받지 않으면
              <br />
              비상 연락이 가요.
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex w-[172px] h-[172px] rounded-full bg-secondary-950 items-end justify-center">
              <img src="/images/phone_1.svg" width="140" />
            </div>
            <div className="font-medium text-center">
              비상 알림을 통해
              <br />
              안부를 확인해요.
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-8 bg-secondary-950 gap-24 items-center justify-center">
        <div className="w-[190px] h-64 bg-[url(/images/grandparents_1.svg)] bg-cover"></div>
        <div className="flex flex-col items-center gap-8">
          <div className="text-secondary-700 font-haru font-medium leading-tight text-3xl text-center">
            전화 한 통으로
            <br />
            씀씀이를 만나 보세요.
          </div>
          <ButtonLink href="/">전화하러 가기 →</ButtonLink>
        </div>
        <img src="/images/sseumsseume_2.svg" width="142" />
      </div>
      <div className="flex flex-col px-40 py-20 bg-white justify-center text-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-haru font-medium text-3xl">
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
      <div className="flex flex-col px-40 py-20 gap-8 justify-center text-center">
        <h2 className="font-haru font-medium text-3xl">
          누구나 쉽게, 복잡한 절차 없이
          <br />
          <span className="text-primary-700">전화 한 통</span>으로 바로 사용할
          수 있습니다.
        </h2>
        <div className="flex gap-8 items-center">
          <img src="/images/sseumsseume_3.svg" width="139" height="217" />
          <div className="w-[10000px] h-[201px] bg-[url(/images/description_2.svg)] bg-cover bg-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
