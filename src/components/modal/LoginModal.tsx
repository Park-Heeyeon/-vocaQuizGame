import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import useModal from "@/utils/useModal";

const LoginModal: React.FC = () => {
  const { closeAllModal } = useModal();
  const navigate = useNavigate();

  const onClickJoinBtn = () => {
    closeAllModal();
    navigate("/join");
  };

  return (
    <>
      <Input placeholder="ID" />
      <Input placeholder="PASSWORD" />
      <Button className="bg-customDepBlueColor hover:bg-customBlueColor">
        Submit
      </Button>
      <Button variant={"secondary"} onClick={onClickJoinBtn}>
        Sign Up
      </Button>
    </>
  );
};

export default LoginModal;
