import { Main, SmallPage } from '@/common/Container';
import { TextField } from '@/common/TextField';
import { TextArea } from '@/common/TextArea';
import { Button } from '@/common/Button';
import { useForm } from '@/utils/form';
import { IScheduleProps, Schedule } from './Schedule';

export const Edit = ({ schedule }: IScheduleProps) => {
  const { form, onChange } = useForm({
    name: '김철수',
    phone: '01012345678',
    birth: '19500101',
    address: '서울특별시 강남구 테헤란로',
    memo: '심장약 복용: 특별 케어 필요',
    aiScript: '안녕하세요. 씀씀이예요.',
    emergencyPhone: '+821011111111',
    emergencyCount: '3',
  });
  return (
    <Main>
      <SmallPage header="정보 수정 / 스케줄 관리" size={3}>
        <div className="mb-4 flex justify-between">
          <div className="flex w-80 flex-col gap-4">
            <TextField
              name="name"
              placeholder="이름"
              value={form.name}
              onChange={onChange}
            />
            <TextField
              name="phone"
              placeholder="전화번호"
              value={form.phone}
              onChange={onChange}
            />
            <TextField
              name="birth"
              placeholder="생년월일"
              value={form.birth}
              onChange={onChange}
            />
            <TextField
              name="address"
              placeholder="주소"
              value={form.address}
              onChange={onChange}
            />
            <TextField
              name="memo"
              placeholder="메모"
              value={form.memo}
              onChange={onChange}
            />
            <TextArea
              name="aiScript"
              placeholder="AI 대화 스크립트"
              value={form.aiScript}
              onChange={onChange}
            />
            <TextField
              name="emergencyPhone"
              placeholder="비상 연락 전화번호"
              value={form.emergencyPhone}
              onChange={onChange}
            />
          </div>
          <div className="flex w-64 flex-col items-center justify-between gap-2">
            <Schedule schedule={schedule} />
            <TextField
              name="emergencyCount"
              placeholder="비상 알림 기준 (0이면 비활성화)"
              value={form.emergencyCount + ' (번 연락 실패 시)'}
              onClick={(e) => (e.target as any).select()}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mt-8">
          <Button>저장</Button>
        </div>
      </SmallPage>
    </Main>
  );
};
