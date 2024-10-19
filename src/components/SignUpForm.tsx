import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { InputField, Button } from "@/components";
import { RegisterSchema } from "@/schemas/RegisterSchema";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormType } from "@/types";

const SignUpForm: React.FC = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      nickname: "",
      id: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit, control } = form;

  // 가입하기 버튼 클릭 시 실행되는 함수
  const handleOnSubmit = (data: RegisterFormType) => {
    console.log("희연 가입하기 버튼 클릭 !!");
    console.log("희연 form", data);
    /* 
        사용자가 입력한 정보가 모두 유효성 검사가 걸쳐지고 나면 
        회원가입 요청 통신 (MSW) 후 통신이 성공이 된다면 Main으로 이동
    */
  };

  return (
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
          placeholder="영문 숫자 조합 5글자 이상"
        />
        {/** 비밀번호  */}
        <InputField
          control={control}
          name="password"
          type="password"
          label="비밀번호"
          placeholder="영문, 숫자, 특수문자(~!@#$%^&*) 조합 8글자 이상"
        />
        {/** 비밀번호 확인 */}
        <InputField
          control={control}
          name="confirmPassword"
          type="password"
          label="비밀번호 확인"
          placeholder="비밀번호를 한 번 더 입력해주세요"
        />
        <Button type="submit" text="가입하기" style="px-6 py-2" />
      </form>
    </Form>
  );
};

export default SignUpForm;
