import { SignUpForm } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md p-5 pb-8">
        {/* 뒤로가기 아이콘 */}
        <AiOutlineLeft
          onClick={handleGoBack}
          className="text-2xl cursor-pointer text-customDepGrayColor"
        />
        <CardHeader className="p-0 pt-4">
          {/* 회원가입 타이틀 */}
          <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl text-center flex-grow text-customDepGrayColor">
            회원가입
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
