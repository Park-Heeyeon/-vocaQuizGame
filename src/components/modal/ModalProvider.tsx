import { modalState } from "@/atom/modalState";
import { useRecoilValue } from "recoil";
import ModalLayout from "./ModalLayout";
import useModal from "@/utils/useModal";

const ModalProvider: React.FC = () => {
  const modals = useRecoilValue(modalState);
  const { closeModal } = useModal();

  return (
    <>
      {modals.map((modal, idx) => {
        const isBottomModal = idx === 0;
        return (
          <div key={modal.id} className="modal-wrapper">
            {isBottomModal && (
              <div
                className="modal-overlay"
                onClick={() => {
                  closeModal(modal.id);
                }}
              />
            )}
            <div className="modal-content w-3/4 max-w-[350px]">
              <ModalLayout {...modal} />
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ModalProvider;
