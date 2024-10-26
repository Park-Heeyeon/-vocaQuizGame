import { modalState } from "@/atom/modalState";
import { ModalStateType } from "@/types";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid"; // uuid 패키지에서 uuidv4를 임포트

const isArrEmpty = (arr: unknown[]) => arr.length === 0;

const useModal = () => {
  const [modals, setModals] = useRecoilState(modalState);

  const openModal = ({
    type = "confirm",
    title,
    content,
    clickEvent,
  }: ModalStateType) => {
    const newModal = { id: uuidv4(), type, title, content, clickEvent };
    // 모달이 열리면 스크롤 막기
    document.body.style.overflow = "hidden";

    setModals((prev) => [...prev, newModal]);
  };

  const closeModal = (id?: string) => {
    if (!id) return;
    setModals((prev) => prev.filter((item) => item.id !== id));
    // 모달이 모두 닫힌 경우 스크롤이 가능하도록 변경
    if (isArrEmpty(modals)) document.body.style.overflow = "unset";
  };

  const closeAllModal = () => {
    setModals([]);
    document.body.style.overflow = "unset";
  };

  return { openModal, closeModal, closeAllModal };
};
export default useModal;
