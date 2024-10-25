import { isLoggedInState } from "@/atom/isLoggedInState";
import { UserHome, VisitorHome } from "@/components";
import { useRecoilValue } from "recoil";

const HomePage: React.FC = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  return (
    <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
      {isLoggedIn ? <UserHome /> : <VisitorHome />}
    </div>
  );
};

export default HomePage;
