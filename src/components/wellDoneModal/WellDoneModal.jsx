import { useEffect } from "react";
import styles from "./WellDoneModal.module.scss";
import { RxCross2 } from "react-icons/rx";
import book from "../../assets/img/book.png";
import { nanoid } from "@reduxjs/toolkit";

export const WellDoneModal = ({ isOpen, onClose, answers }) => {
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

  const correctAnswers = answers.filter((answer) => answer.isDone === true);
  const mistakes = answers.filter((answer) => answer.isDone === false);

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
        <h2 className={styles.modalTitle}>Well done</h2>
        <div className={styles.resultWrp}>
          <div>
            <h3 className={styles.resultTitle}>Сorrect answers:</h3>
            <ul className={styles.resultList}>
              {correctAnswers?.length > 0 &&
                correctAnswers.map((answer) => {
                  return (
                    <li key={nanoid()}>
                      <p>{answer.ua}</p>
                    </li>
                  );
                })}
              {correctAnswers?.length > 0 &&
                correctAnswers.map((answer) => {
                  return (
                    <li key={nanoid()}>
                      <p>{answer.en}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <h3 className={styles.resultTitle}>Mistakes:</h3>
            <ul className={styles.resultList}>
              {mistakes?.length > 0 &&
                mistakes.map((mistake) => {
                  return (
                    <li key={nanoid()}>
                      <p>{mistake.ua}</p>
                    </li>
                  );
                })}
              {mistakes?.length > 0 &&
                mistakes.map((mistake) => {
                  return (
                    <li key={nanoid()}>
                      <p>{mistake.en}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <img src={book} alt={book} className={styles.resultImg} />
      </div>
    </div>
  );
};
