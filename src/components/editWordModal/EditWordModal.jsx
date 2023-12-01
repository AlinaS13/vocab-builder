import { useEffect } from "react";
import styles from "./EditWordModal.module.scss";
import { RxCross2 } from "react-icons/rx";
import { EditWordForm } from "../editWordForm/EditWordForm";

export const EditWordModal = ({ isOpen, onClose, currentWord }) => {
  const closeModal = (e) => {
    if (e.code === "Escape" || e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", closeModal);

    return () => {
      document.removeEventListener("keydown", closeModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.modalCloseButton}
          onClick={onClose}
        >
          <RxCross2 color="#ffffff" className={styles.modalCloseSvg} />
        </button>
        <EditWordForm onClose={onClose} currentWord={currentWord} />
      </div>
    </div>
  );
};
