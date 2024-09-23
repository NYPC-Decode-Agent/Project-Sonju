import { useNavigate, useParams } from 'react-router-dom';
import { Main, SmallPage } from '@/common/Container';
import { TextField } from '@/common/TextField';
import { TextArea } from '@/common/TextArea';
import { Button } from '@/common/Button';
import { useForm } from '@/utils/form';
import { Schedule } from './Schedule';
import { useEditPersonInfoMutation, usePersonDataQuery } from '@/api';
import { IPersonInfo } from '@/api/types';

const emptyPerson = {
  isActive: true,
  name: '',
  phone: '',
  birth: '',
  address: '',
  memo: '',
  aiScript: '안녕하세요. 씀씀이예요.',
  emergencyPhone: '',
  emergencyCount: 0,
  schedule: [-1, -1, -1, -1, -1, -1, -1],
};

export type EditPageProps = { person: IPersonInfo; };
const EditPage = ({ person }: EditPageProps) => {
  const { form, onChange } = useForm(person);
  const editPersonInfoMutation = useEditPersonInfoMutation();
  const navigate = useNavigate();

  const onChangeSchedule = (schedule: number[]) => {
    onChange({ target: { name: "schedule", value: schedule } });
  };

  const save = () => {
    // event.preventDefault();
    editPersonInfoMutation.mutate({
      id: person.id,
      personInfo: form,
    });
    navigate('/dashboard');
  };

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
            <Schedule schedule={form.schedule} setSchedule={onChangeSchedule} />
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
          <Button onClick={save}>저장</Button>
        </div>
      </SmallPage>
    </Main>
  );
};

export type EditProps = { id: number; };
export const Edit = () => {
  const { id } = useParams();
  const { data: personData, isSuccess } = usePersonDataQuery();
  if (!isSuccess) return null;
  const personInfo = personData[Number(id)] ?? {
    id,
    ...emptyPerson,
  };
  return <EditPage person={personInfo} />;
};
