import { Button, ButtonLink } from '@/common/Button';
import { SmallPage } from '@/common/Container';
import { TextField } from '@/common/TextField';

type HeaderProps = { children: React.ReactNode; };
const Header = ({ children }: HeaderProps) => (
  <h3 className="text-3xl text-center font-haru font-medium">{children}</h3>
);
const Highlight = ({ children }: HeaderProps) => (
  <span className="text-primary-700">{children}</span>
);
const HighlightSecondary = ({ children }: HeaderProps) => (
  <span className="text-secondary-700">{children}</span>
);


type CircleCardProps = {
  image: string;
  color: string;
  direction?: "end";
  children: React.ReactNode;
};
const CircleCard = ({ image, color, direction, children }: CircleCardProps) => (
  <div className="flex flex-col gap-6">
    <div className={`h-[172px] w-[172px] rounded-full ${color} flex items-end ${
      direction === "end" ? "justify-end" : "justify-center"
    }`}>
      <img src={`/images/${image}.svg`} width="138" />
    </div>
    <div className="text-center font-medium">{children}</div>
  </div>
);

type SmallCardProps = {
  image: string;
  header: string;
  children: React.ReactNode;
};
const SmallCard = ({ image, header, children }: SmallCardProps) => (
  <div className="px-6 py-4 rounded-md bg-white flex items-center gap-6">
    <img src={`/images/${image}_icon_1.svg`} width="63" height="63" />
    <div className="flex flex-col gap-2">
      <div className="text-sm font-bold">{header}</div>
      <div className="text-xs font-normal whitespace-pre-wrap">{children}</div>
    </div>
  </div>
);


const InquiryForm = () => {
  const handleSummit = (event: React.FormEvent) => {
    alert('문의사항 답변은 해당 연락처로 연락드리겠습니다.');
  };
  return (
    <SmallPage header="문의하기" subheader="궁금하신 점이 있으신가요?" color="bg-white/50" padding={10}>
      <form onSubmit={handleSummit} className="flex flex-col items-center gap-3">
        <TextField placeholder="이름" type="text" required />
        <TextField placeholder="전화번호" type="tel" required />
        <TextField placeholder="문의사항" type="text" required />
        <div className="mt-3 w-full max-w-48">
          <Button type="submit">문의하기</Button>
        </div>
      </form>
    </SmallPage>
  );
};

const Home = () => (
  <div className="bg-gray-1000 pt-14">
    <div className="flex items-center justify-center bg-[url(/bg-wide.png)] bg-cover px-24 py-16 gap-36">
      <div className="flex flex-row flex-shrink-0">
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
      <InquiryForm />
    </div>

    <div className="flex flex-col items-center gap-6 bg-white px-40 py-20">
      <Header><Highlight>씀씀이</Highlight>가 뭐예요?</Header>
      <div className="flex gap-16">
        <CircleCard image="grandmother_1" color="bg-green-100" direction="end">
          홀로 계신 어르신이
          <br />
          전화를 걸거나 받을 수 있어요.
        </CircleCard>

        <CircleCard image="sonju_1" color="bg-orange-100">
          일정 기간 이상 연락을 받지 않으면
          <br />
          비상 연락이 가요.
        </CircleCard>

        <CircleCard image="phone_1" color="bg-secondary-950">
          비상 알림을 통해
          <br />
          안부를 확인해요.
        </CircleCard>
      </div>
    </div>

    <div className="flex items-center justify-center gap-24 bg-secondary-950 py-8">
      <div className="h-64 w-[190px] bg-[url(/images/grandparents_1.svg)] bg-cover"></div>
      <div className="flex flex-col items-center gap-8">
        <Header>
          <HighlightSecondary>
            전화 한 통으로
            <br />
            씀씀이를 만나 보세요.
          </HighlightSecondary>
        </Header>
        <ButtonLink href="/">전화하러 가기 →</ButtonLink>
      </div>
      <img src="/images/sseumsseume_2.svg" width="142" />
    </div>

    <div className="flex flex-col justify-center bg-white px-40 py-20 text-center">
      <div className="flex flex-col gap-4">
        <Header>
          내 곁에 가까이,
          <br />
          <Highlight>사회복지사 씀씀이</Highlight>
        </Header>
        <h3 className="font-medium">
          씀씀이는 홀로 계신 어르신의 일상 체크부터
          <br />
          비상시 알림까지 보내주는 다정한 말벗입니다!
        </h3>
      </div>
      <img src="/images/description_1.svg" />
    </div>

    <div className="flex flex-col items-center justify-center gap-8 px-40 py-20">
      <Header>
        누구나 쉽게, 복잡한 절차 없이
        <br />
        <Highlight>전화 한 통</Highlight>으로 바로 사용할 수 있습니다.
      </Header>
      <div className="w-full flex items-end justify-center gap-8">
        <img src="/images/sseumsseume_3.svg" width="139" height="217" />
        <div className="w-full max-w-3xl grid grid-cols-2 grid-rows-2 gap-4">
          <SmallCard image="phone" header="지금 사용하는 핸드폰으로 바로 가능!">
            비싼 기기 장만할 필요 없이,
            <br />
            지금 사용하는 핸드폰에서 바로 사용할 수 있어요.
          </SmallCard>

          <SmallCard image="siren" header="위기 상황도 안심">
            통화 중 위기 상황 인지 시
            <br />
            사회복지 기관과 바로 연계해 드려요.
          </SmallCard>

          <SmallCard image="ear" header="익숙한 목소리 제공">
            '목소리 학습'을 통해서 자녀, 친구 등
            <br />
            특별한 분의 목소리로 대화를 나눌 수 있어요.
          </SmallCard>

          <SmallCard image="care" header="전문적인 케어">
            '씀씀이'는 사회복지사 캐릭터로 설정되어 있어,
            <br />
            전문적이고 따뜻한 말벗 서비스를 제공해요.
          </SmallCard>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
