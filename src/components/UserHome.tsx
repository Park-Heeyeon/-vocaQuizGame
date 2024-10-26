import { userInfoState } from "@/atom/userInfoState";
import MainImg from "@public/images/main_img.png";
import { useRecoilState, useSetRecoilState } from "recoil";
import Button from "./common/Button";
import { requestLogout } from "@/api";
import { isLoggedInState } from "@/atom/isLoggedInState";
import { useNavigate } from "react-router-dom";

const UserHome: React.FC = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const navigate = useNavigate();

  const logout = () => {
    requestLogout()
      .then(() => {
        setUserInfo({
          nickname: "",
          id: "",
          password: "",
          level: 1,
          levelRate: 0,
        });
        setIsLoggedIn(false);
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="img-container flex justify-center mt-40 md:mt-32">
        <img
          src={MainImg}
          alt="Profile Logo"
          className="w-full h-auto max-h-80"
        />
      </div>
      <div className="text-center mt-8 px-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          {userInfo.nickname} 님의
          <br />
          현재 레벨은
          <span className="font-bold text-customDepBlueColor">
            {" "}
            {userInfo.level} Level{" "}
          </span>
          이에요!
        </h3>
        <p className="text-base md:text-xl text-gray-600">
          다음 레벨까지
          <span className="font-semibold text-customDepBlueColor">
            {" "}
            {100 - (userInfo.levelRate ?? 0)}%{" "}
          </span>
          남았어요.
          <br />
          다음 레벨을 향해 퀴즈를 풀러 가볼까요?
        </p>
        <div className="flex mt-4 justify-center">
          <Button
            style="mx-1 px-6 py-3 text-white rounded-md"
            text="퀴즈 풀기"
            clickEvent={() => navigate("/quiz")}
          />
          <Button
            style="mx-1 px-6 py-3 bg-customGrayColor text-white rounded-md"
            text="오늘은 그만"
            clickEvent={logout}
          />
        </div>
      </div>
    </>
  );
};
export default UserHome;
