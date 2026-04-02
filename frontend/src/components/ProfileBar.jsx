// src/components/ProfileBar.jsx
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

/**
 * ProfileBar: 로그아웃 기능을 수행하는 버튼 컴포넌트
 * @param {function} onClick - 로그아웃 실행 함수
 * @param {string} className - 추가 스타일
 */
const ProfileBar = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex items-center justify-center gap-3 px-8 py-4 rounded-full",
        "bg-neutral-900 border border-neutral-800", // 어두운 배경과 테두리
        "text-secondary-400 font-serif text-lg leading-none", // VODA 핑크 포인트 컬러
        "hover:bg-neutral-800 hover:shadow-lg transition-all cursor-pointer", // 인터랙션
        className,
      )}
    >
      {/* FontAwesome 컴포넌트 사용 */}
      <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-xl" />

      <span className="pt-0.5">로그아웃</span>
    </button>
  );
};

export default ProfileBar;
