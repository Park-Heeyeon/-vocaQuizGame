import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import React from "react";
import InputField from "./common/InputField";
import Button from "./common/Button";

const SignUpForm: React.FC = () => {
  const form = useForm();

  const { handleSubmit, control } = form;

  // 가입하기 버튼 클릭 시 실행되는 함수
  const handleOnSubmit = () => {
    console.log("희연 가입하기 버튼 클릭 !!");
    /* 
        사용자가 입력한 정보가 모두 유효성 검사가 걸쳐지고 나면 
        회원가입 요청 통신 (MSW) 후 통신이 성공이 된다면 Main으로 이동
    */
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="relative p-4 space-y-3 overflow-x-hidden"
        >
          {/** 닉네임  */}
          <InputField control={control} name="nickname" label="닉네임" />
          {/** 아이디  */}
          <InputField
            control={control}
            name="id"
            label="아이디"
            placeholder="영문 + 숫자 5글자 이상"
          />
          {/** 비밀번호  */}
          <InputField
            control={control}
            name="password"
            label="비밀번호"
            placeholder="영문 + 숫자 7글자 이상"
          />
          {/** 비밀번호 확인 */}
          <InputField
            control={control}
            name="confirmPassword"
            label="비밀번호 확인"
          />
          <Button type="submit" text="가입하기" style="px-6 py-2" />
        </form>
      </Form>
    </>
  );
};

export default SignUpForm;
