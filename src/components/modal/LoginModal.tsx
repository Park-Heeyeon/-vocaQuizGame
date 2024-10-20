import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import useModal from "@/utils/useModal";

const LoginModal: React.FC = () => {
  const { closeAllModal } = useModal();
  const navigate = useNavigate();

  const onClickSignUp = () => {
    closeAllModal();
    navigate("/signup");
  };

  return (
    <>
      <Input placeholder="ID" />
      <Input placeholder="PASSWORD" />
      <Button className="bg-customDepBlueColor hover:bg-customBlueColor">
        Submit
      </Button>
      <Button variant={"secondary"} onClick={onClickSignUp}>
        Sign Up
      </Button>
    </>
  );
};

export default LoginModal;
