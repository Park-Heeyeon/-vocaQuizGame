import { Button } from "../ui/button";
import { Input } from "../ui/input";

const LoginModal: React.FC = () => {
  return (
    <>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <Button className="bg-customDepBlueColor hover:bg-customBlueColor">
        Submit
      </Button>
      <Button variant={"secondary"}>Sign Up</Button>
    </>
  );
};

export default LoginModal;
