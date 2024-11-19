import { getWordLevel } from "@/api";
import { userInfoState } from "@/atom/userInfoState";
import { userListState } from "@/atom/userListState";
import { Button } from "@/components";
import AnswerModal from "@/components/modal/AnswerModal";
import { VocaListType } from "@/types";
import useModal from "@/utils/useModal";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

const QuizPage = () => {
  const [randomWord, setRandomWord] = useState<string | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [answer, setAnswer] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const setUserList = useSetRecoilState(userListState);
  const level = userInfo.level || 1;

  const { openModal } = useModal();
  const navigate = useNavigate();

  const { data, isFetched } = useQuery({
    queryKey: ["wordLevel", level],
    queryFn: () => getWordLevel(level),
    enabled: !!level,
  });

  const getRandomQuiz = () => {
    const vocaList = data?.data; // 단어 목록 배열
    if (!vocaList || vocaList.length === 0) return; // vocaList가 없거나 비어있으면 종료

    const randomIndex = Math.floor(Math.random() * vocaList.length);
    const { word, meaning: correctMeaning } = vocaList[randomIndex]; // 랜덤 단어와 정답 뜻 추출
    setRandomWord(word);
    setAnswer(correctMeaning);

    // 모든 뜻을 배열로 변환하고, 정답의 뜻을 포함하여 랜덤으로 3개 선택
    const meaningsList = vocaList.map((item: VocaListType) => item.meaning); // 각 객체에서 meaning만 추출
    const randomMeanings = meaningsList
      .sort(() => Math.random() - 0.5) // 랜덤으로 섞기
      .slice(0, 2); // 2개 무작위 선택

    randomMeanings.push(correctMeaning); // 정답 추가
    const randomOptions = randomMeanings.sort(() => Math.random() - 0.5); // 옵션 랜덤으로 섞기
    setOptions(randomOptions); // 답변 옵션 상태 업데이트
  };

  const onClickOption = (selectOption: string) => {
    if (answer === selectOption) {
      setUserInfo((prev) => {
        const currentLevel = prev.level ?? 1; // 기본값 1
        const currentLevelRate = prev.levelRate ?? 0; // 기본값 0
        const isLevelUp = currentLevelRate === 90;
        return {
          ...prev,
          level: isLevelUp ? currentLevel + 1 : currentLevel,
          levelRate: isLevelUp ? 0 : currentLevelRate + 10,
        };
      });
      // 정답 알림 팝업 표출
      openModal({
        type: "custom",
        content: <AnswerModal isAnswer={true} />,
        clickEvent: () => {
          getRandomQuiz();
        },
      });
    } else {
      openModal({
        type: "custom",
        content: <AnswerModal isAnswer={false} />,
      });
    }
  };

  useEffect(() => {
    if (isFetched && data) {
      getRandomQuiz();
    }
  }, [isFetched, data]); // data와 isFetched가 변경될 때마다 퀴즈 갱신

  // userInfo 변경 시 userList 업데이트
  useEffect(() => {
    setUserList((prevList) => {
      return prevList.map((user) =>
        user.id === userInfo.id ? userInfo : user
      );
    });
  }, [userInfo]);

  return (
    <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
      <AiOutlineLeft
        className="absolute top-2 cursor-pointer text-customGrayColor left-2 w-6 h-6"
        onClick={() => navigate("/")}
      />{" "}
      <div className="flex flex-col items-center justify-center h-screen p-4">
        {randomWord && (
          <div className="bg-white shadow-lg rounded-lg p-6 mb-4 w-full max-w-md text-center">
            <h1 className="text-3xl font-bold mb-10">{randomWord}</h1>
            <div className="flex flex-col space-y-3">
              {options.map((option, index) => (
                <Button
                  key={index}
                  text={option}
                  style="w-[60%] py-2 text-lg text-white font-semibold rounded-2lg shadow hover:bg-customDepBlueColor transition duration-200"
                  clickEvent={() => {
                    onClickOption(option);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
