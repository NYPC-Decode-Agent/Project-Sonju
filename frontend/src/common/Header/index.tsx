import { Link } from 'react-router-dom';
import { useSignOutMutation, useUserInfoQuery } from '@/api';
import { InfoGetResponseDto } from '@shared/dto';

type UserHeaderProps = { user: InfoGetResponseDto['userInfo'] };
const UserHeader = ({ user: { name, phone } }: UserHeaderProps) => {
  const signOutMutation = useSignOutMutation();
  const signOut = () => signOutMutation.mutate();
  return (
    <b className="cursor-pointer" onClick={signOut}>
      {name} ({phone})
    </b>
  );
};

const GuestHeader = () => (
  <>
    <Link to="/login" className="text-gray-dark">
      로그인
    </Link>
    <Link to="/signup" className="text-gray-dark">
      회원가입
    </Link>
  </>
);

export const Header = () => {
  const { data: userInfo, isSuccess } = useUserInfoQuery();
  return (
    <nav className="fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between border-b border-gray-extra-light bg-gray-1000/50 px-8 backdrop-blur-sm">
      <div className="flex gap-4">
        <Link to="/" className="inline-flex w-20 items-center">
          <img src="/logo.png" width="80" height="40" />
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/edit" className="text-gray-dark">
          스케줄 (테스트)
        </Link>
        {isSuccess ? (
          <UserHeader user={userInfo.data.userInfo} />
        ) : (
          <GuestHeader />
        )}
      </div>
    </nav>
  );
};
