import { ReactElement } from "react";

export interface ModalStateType {
  id?: string;
  type: "custom" | "confirm" | "alert";
  title?: string;
  content: string | ReactElement;
}
