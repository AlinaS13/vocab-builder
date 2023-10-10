import React from "react";
import styles from "./WordsPagination.module.scss";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

export const WordsPagination = ({ page, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className={styles.pagination}>
      <button
        className={styles.paginationButton}
        onClick={() => onPageChange(1)}
      >
        {<MdOutlineKeyboardDoubleArrowLeft />}
      </button>
      {page > 1 && (
        <button
          className={styles.paginationButton}
          onClick={() => onPageChange(page - 1)}
        >
          {<MdOutlineKeyboardArrowLeft />}
        </button>
      )}

      {pageNumbers.map((el) => {
        if (
          el === 1 ||
          el === totalPages ||
          (el >= page - 1 && el <= page + 1)
        ) {
          return (
            <button
              key={el}
              onClick={() => onPageChange(el)}
              className={` ${
                el === page ? styles.currentPage : styles.paginationButton
              }`}
            >
              <span>{el}</span>
            </button>
          );
        } else if (el === page - 3 || el === page + 3) {
          return (
            <button
              className={styles.paginationButton}
              key={el}
              onClick={() => onPageChange(el)}
            >
              {"..."}
            </button>
          );
        } else {
          return null;
        }
      })}

      {page < totalPages && (
        <button
          className={styles.paginationButton}
          onClick={() => onPageChange(page + 1)}
        >
          {<MdOutlineKeyboardArrowRight />}
        </button>
      )}
      <button
        onClick={() => onPageChange(totalPages)}
        className={styles.paginationButton}
      >
        {<MdOutlineKeyboardDoubleArrowRight />}
      </button>
    </div>
  );
};
