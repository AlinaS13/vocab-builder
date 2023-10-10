import { useEffect } from "react";
import styles from "./AddWordModal.module.scss";
import { RxCross2 } from "react-icons/rx";
import { AddWordForm } from "../addWordForm/AddWordForm";
import { useDispatch, useSelector } from "react-redux";
import { closeModalAddWord } from "../../redux/words/wordsSlicе";
import { selectIsModalAddWordOpen } from "../../redux/words/wordsSelector";

export const AddWordModal = () => {
  const dispatch = useDispatch();
  const isModalAddWordOpen = useSelector(selectIsModalAddWordOpen);

  const closeModal = (e) => {
    if (e.code === "Escape" || e.currentTarget === e.target) {
      dispatch(closeModalAddWord());
    }
  };

  useEffect(() => {
    if (!isModalAddWordOpen) return;
    document.addEventListener("keydown", closeModal);

    return () => {
      document.removeEventListener("keydown", closeModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.modalCloseButton}
          onClick={() => dispatch(closeModalAddWord())}
        >
          <RxCross2 color="#ffffff" className={styles.modalCloseSvg} />
        </button>
        <h2 className={styles.modalTitle}>Add word</h2>
        <p className={styles.modalText}>
          Adding a new word to the dictionary is an important step in enriching
          the language base and expanding the vocabulary.
        </p>
        <AddWordForm
        // onClick={() => dispatch(closeModalAddWord())}
        />
      </div>
    </div>
  );
};
