import { useDispatch } from "react-redux";
import styles from "./EditWordForm.module.scss";
import { useState } from "react";

import ukraine from "../../assets/img/ukraine.png";
import united from "../../assets/img/united.png";
import { editWord } from "../../redux/words/wordsOperation";
import { toast } from "react-toastify";

export const EditWordForm = ({ onClose, currentWord }) => {
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
      let editWordData;
      if (true) {
        editWordData = {
          id: currentWord._id,
          data: {
            en: en,
            ua: ua,
            category: currentWord.category,
            isIrregular: currentWord.isIrregular,
          },
        };
      } else if (true) {
        editWordData = {
          en: en,
          ua: ua,
          id: currentWord._id,
        };
      } else {
        editWordData = {
          en: en,
          ua: ua,
          id: currentWord._id,
        };
      }

      dispatch(editWord(editWordData));
      toast.success("Word successfully edited");
      onClose();
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Error: " + error.response.status);
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
            defaultValue={currentWord.ua}
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
            defaultValue={currentWord.en}
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
          Save
        </button>
        <button className={styles.cancelButton} type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};
