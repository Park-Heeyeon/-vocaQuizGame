import { useNavigate } from "react-router-dom";
import LogoImg from "@public/images/logo_img.png";
import { Button } from "@/components";
import useModal from "@/utils/useModal";
import LoginModal from "@/components/modal/LoginModal";

const VisitorHome: React.FC = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();
  return (
    <>
      <div className="img-container flex justify-center mt-40 md:mt-32">
        <img src={LogoImg} alt="Main Logo" className="w-full h-auto max-h-80" />
      </div>
      <div className="btn-container mt-10 flex flex-col">
        <Button
          text="로그인"
          style="w-[70%] px-12 py-3"
          clickEvent={() =>
            openModal({
              type: "login",
              title: "Login",
              content: <LoginModal />,
            })
          }
        />
        <Button
          text="회원가입"
          color="bg-customGrayColor"
          style="w-[70%] px-12 py-3 mt-2"
          clickEvent={() => navigate("/signup")}
        />
      </div>
    </>
  );
};
export default VisitorHome;
