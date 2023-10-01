import { useEffect } from "react";
import styles from "./AddWordModal.module.scss";
import { RxCross2 } from "react-icons/rx";
import { AddWordForm } from "../addWordForm/AddWordForm";

export const AddWordModal = ({ isOpen, onClose }) => {
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
        <h2 className={styles.modalTitle}>Add word</h2>
        <p className={styles.modalText}>
          Adding a new word to the dictionary is an important step in enriching
          the language base and expanding the vocabulary.
        </p>
        <AddWordForm onClose={onClose} />
      </div>
    </div>
  );
};
