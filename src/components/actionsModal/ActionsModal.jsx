import { useEffect, useState } from "react";
import styles from "./ActionsModal.module.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { deleteWord, getStatistics } from "../../redux/words/wordsOperation";
import { useDispatch } from "react-redux";
import { EditWordModal } from "../editWordModal/EditWordModal";
import { toast } from "react-toastify";

export const ActionsModal = ({
  isOpen,
  onClose,
  currentWordId,
  currentWord,
}) => {
  const dispatch = useDispatch();
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const openModalEditWord = () => setIsOpenEditModal(true);
  const closeModalEditWord = () => setIsOpenEditModal(false);

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

  const hendleDeleteWord = () => {
    dispatch(deleteWord(currentWordId))
      .then((response) => {
        if (response.payload) {
          dispatch(getStatistics());
          toast.success("Word successfully deleted");
        } else {
          toast.error("Failed to delete word");
        }
      })
      .catch((error) => {
        toast.error("Failed to delete word");
      });
    onClose();
  };
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.actionBtnWrp}>
          <button
            type="button"
            onClick={() => {
              openModalEditWord();
            }}
          >
            <FiEdit2 color="85AA9F" />
            Edit
          </button>
          <button
            type="button"
            onClick={() => {
              hendleDeleteWord();
            }}
          >
            <FaRegTrashAlt color="85AA9F" />
            Delete
          </button>
        </div>
      </div>
      {isOpenEditModal && (
        <EditWordModal
          isOpen={isOpenEditModal}
          onClose={closeModalEditWord}
          currentWord={currentWord}
        />
      )}
    </div>
  );
};
