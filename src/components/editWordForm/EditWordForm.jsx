import { useDispatch, useSelector } from "react-redux";
import styles from "./EditWordForm.module.scss";
import { selectCategories } from "../../redux/words/wordsSelector";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ukraine from "../../assets/img/ukraine.png";
import united from "../../assets/img/united.png";
import { addNewWord } from "../../redux/words/wordsOperation";
import { toast } from "react-toastify";

export const EditWordForm = ({ onClose }) => {
  const dispatch = useDispatch();

  const [en, setEn] = useState("");
  const [ua, setUa] = useState("");
  const [error, setError] = useState({});

  const enPattern = "\\b[A-Za-z'-]+(?:\\s+[A-Za-z'-]+)*\\b";
  const uaPattern = "^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\\s]+$";

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const enRegex = new RegExp(enPattern);
    const uaRegex = new RegExp(uaPattern, "u");

    if (!enRegex.test(en)) {
      setError({ message: "Letter must be English", code: "en" });
      return;
    } else if (!uaRegex.test(ua)) {
      setError({ message: "Letter must be Ukrainian", code: "ua" });
      return;
    } else {
      setError({});
    }

    try {
      let newWordData;
      if (true) {
        newWordData = {
          en: en,
          ua: ua,
        };
      } else if (true) {
        newWordData = {
          en: en,
          ua: ua,
        };
      } else {
        newWordData = {
          en: en,
          ua: ua,
        };
      }
      dispatch(addNewWord(newWordData));
      onClose();
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("gfgfgfggfgfg");
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles.inputSet}>
        <div className={styles.addWordInputWrp}>
          <input
            className={styles.addWordInput}
            id="ua"
            type="text"
            value={ua}
            onChange={(e) => {
              setUa(e.target.value);
              setError({});
            }}
            required
          />
          {error && error.code === "ua" && (
            <div className={styles.errorMessage}>{error.message}</div>
          )}
          <label htmlFor="ua" className={styles.addWordLabel}>
            <img src={ukraine} alt={ukraine} /> Ukrainian
          </label>
        </div>

        <div className={styles.addWordInputWrp}>
          <input
            className={styles.addWordInput}
            id="en"
            type="text"
            value={en}
            onChange={(e) => {
              setEn(e.target.value);
              setError({});
            }}
            required
          />
          {error && error.code === "en" && (
            <div className={styles.errorMessage}>{error.message}</div>
          )}
          <label htmlFor="en" className={styles.addWordLabel}>
            <img src={united} alt={united} /> English
          </label>
        </div>
      </div>

      <div className={styles.addWordButtonsWrp}>
        <button className={styles.addWordButton} type="submit">
          Add
        </button>
        <button className={styles.cancelButton} type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};
