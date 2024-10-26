import { userInfoState } from "@/atom/userInfoState";
import useModal from "@/utils/useModal";
import { useRecoilValue } from "recoil";

interface AnswerModalProps {
  isAnswer: boolean;
  clickEvent?: () => void;
}

const AnswerModal: React.FC<AnswerModalProps> = ({ clickEvent, isAnswer }) => {
  const { level = 1, levelRate = 0 } = useRecoilValue(userInfoState);
  const { closeAllModal } = useModal();

  const isLevelUp = levelRate === 0;

  const onClickBtn = () => {
    if (clickEvent) {
      clickEvent();
    }
    closeAllModal();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-2">
        {isAnswer ? "정답이에요!" : "오답이에요!"}
      </h2>
      {isAnswer ? (
        <p className="text-gray-700 text-center mb-4">
          {isLevelUp ? (
            <>
              <span className="font-bold text-customDepBlueColor">
                Level {level}
              </span>
              로 업그레이드 되었어요!
            </>
          ) : (
            <>
              다음 레벨까지{" "}
              <span className="font-bold text-customDepBlueColor">
                {100 - levelRate}%
              </span>{" "}
              남았어요.
            </>
          )}
        </p>
      ) : (
        <p className="text-gray-700 text-center mb-4">
          정답을 다시 생각해보세요!
        </p>
      )}
      <button
        className="w-full py-2 px-4 bg-customBlueColor text-white rounded-lg transition duration-300"
        onClick={onClickBtn}
      >
        {isAnswer ? "다음 문제 풀기" : "다시 풀어보기"}
      </button>
    </div>
  );
};

export default AnswerModal;
