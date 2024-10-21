import { ReactElement } from "react";

export interface ModalStateType {
  id?: string; // 선택적 속성
  type?: "custom" | "confirm"; // 모달 타입
  title?: string;
  content: string | ReactElement<{ clickEvent?: () => void }>; // content는 문자열 또는 clickEvent를 받는 ReactElement
  clickEvent?: () => void; // 선택적 clickEvent
}
