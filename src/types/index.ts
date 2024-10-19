type VocaListType = {
  [key: string]: string;
};

type UserInfoType = {
  id: string;
  pwd: string;
  nickname: string;
  level: number;
};

type RegisterFormType = {
  nickname: string;
  id: string;
  password: string;
  confirmPassword: string;
};

export type { VocaListType, UserInfoType, RegisterFormType };
