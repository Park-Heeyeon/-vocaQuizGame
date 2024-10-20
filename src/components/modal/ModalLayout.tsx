import React from "react"; // React 가져오기 추가
import { ModalStateType } from "@/types";
import useModal from "@/utils/useModal";
import { FaTimes } from "react-icons/fa";
import Button from "../common/Button";

const ModalLayout: React.FC<ModalStateType> = ({
  type,
  title,
  content,
  id,
  clickEvent,
}) => {
  const { closeModal } = useModal();

  const onClickConfirm = () => {
    closeModal(id);
    if (clickEvent) {
      clickEvent();
    }
  };

  return (
    <div className="w-full bg-gray-50  border-gray-300 flex flex-col text-center p-8 rounded-2xl shadow-md gap-4 mx-auto">
      {type === "custom" && (
        <FaTimes
          className="cursor-pointer text-customGrayColor"
          onClick={() => closeModal(id)}
        />
      )}
      <h1 className="font-bold text-xl text-customDepGrayColor">{title}</h1>
      {typeof content === "string" ? (
        <p>{content}</p> // 문자열인 경우
      ) : (
        React.cloneElement(content, { clickEvent }) // 컴포넌트인 경우
      )}
      {type === "confirm" && (
        <Button text="확인" clickEvent={onClickConfirm} style="px-3 py-2" />
      )}
    </div>
  );
};

export default ModalLayout;
