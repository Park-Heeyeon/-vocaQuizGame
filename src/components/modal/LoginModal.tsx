import { useNavigate } from "react-router-dom";
import useModal from "@/utils/useModal";
import { useForm } from "react-hook-form";
import InputField from "../common/InputField";
import { LoginFormType } from "@/types";
import { Form } from "../ui/form";
import Button from "../common/Button";

const LoginModal: React.FC = () => {
  const form = useForm({
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const { openModal, closeAllModal } = useModal();
  const navigate = useNavigate();

  const handleOnSubmit = (data: LoginFormType) => {
    console.log("희연 로그인버튼 클릭트 !", data);

    // 아이디, 비밀번호 미입력 검사
    if (data.id === "" || data.password === "") {
      openModal({
        type: "confirm",
        title: "알림",
        content: "아이디, 비밀번호를 입력해주세요",
      });
    }

    // 로그인 요청 후 성공/실패 시, 팝업 표출
  };

  const onClickSignUp = () => {
    closeAllModal();
    navigate("/signup");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleOnSubmit)}
        className="relative p-1 pb-0 space-y-3 overflow-x-hidden"
      >
        {/** 아이디 */}
        <InputField<LoginFormType>
          control={form.control}
          name="id"
          placeholder="ID"
        />
        {/** 비밀번호 */}
        <InputField<LoginFormType>
          control={form.control}
          name="password"
          placeholder="PASSWORD"
        />
        <div className="btn-box space-y-2 h-full">
          <Button
            type="submit"
            text="Submit"
            style="bg-customDepBlueColor hover:bg-customBlueColor w-full h-auto py-2"
          />
          <Button
            text="Sign Up"
            style="bg-customGrayColor w-full h-auto py-2"
            clickEvent={onClickSignUp}
          />
        </div>
      </form>
    </Form>
  );
};

export default LoginModal;
