import { ModalStateType } from "@/types/ModalStateType";
import { atom } from "recoil";

export const modalState = atom<ModalStateType[]>({
  key: "modalState",
  default: [],
});
