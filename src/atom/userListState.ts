import { UserInfoStateType } from "@/types";
import { atom } from "recoil";

export const userListState = atom<UserInfoStateType[]>({
  key: "userListState",
  default: [],
});
