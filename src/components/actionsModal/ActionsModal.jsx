import { useEffect } from "react";
import styles from "./ActionsModal.module.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

export const ActionsModal = ({ isOpen, onClose }) => {
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
        <div className={styles.actionBtnWrp}>
          <button>
            <FiEdit2 color="85AA9F" />
            Edit
          </button>
          <button>
            <FaRegTrashAlt color="85AA9F" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
