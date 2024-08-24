import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="flex z-50 items-center justify-between fixed top-0 left-0 w-full h-16 px-8 bg-white/50 backdrop-blur-sm border-b border-gray-extra-light">
      <div className="flex gap-4">
        <Link
          to="/"
          className="inline-flex w-8 text-center font-montserrat font-extrabold leading-5"
        >
          DECODE AGENT
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/schedule" className="text-gray-dark">
          스케줄 (테스트)
        </Link>
        <Link to="/login" className="text-gray-dark">
          로그인
        </Link>
        <Link to="/signup" className="text-gray-dark">
          회원가입
        </Link>
      </div>
    </nav>
  );
};
