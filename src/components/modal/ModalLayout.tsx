import { ModalStateType } from "@/types";
import useModal from "@/utils/useModal";
import { FaTimes } from "react-icons/fa";

const ModalLayout: React.FC<ModalStateType> = ({
  type,
  title,
  content,
  id,
}) => {
  const { closeModal } = useModal();
  return (
    <div className="w-full bg-gray-50 flex flex-col text-center p-8 rounded-2xl shadow-md gap-4 mx-auto">
      {type === "custom" && (
        <FaTimes className="cursor-pointer" onClick={() => closeModal(id)} />
      )}
      <h1 className="font-bold text-xl text-customDepGrayColor">{title}</h1>
      {content}
    </div>
  );
};

export default ModalLayout;
