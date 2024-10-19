import { SignUpForm } from "@/components";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SignUpPage: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md p-5">
        <CardHeader className="p-0 pt-4">
          <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-customDepGrayColor">
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
