import { useDispatch, useSelector } from "react-redux";
import styles from "./AddWordForm.module.scss";
import "./stylesAddWord.css";
import { selectCategories } from "../../redux/words/wordsSelector";
import { useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ukraine from "../../assets/img/ukraine.png";
import united from "../../assets/img/united.png";
import { addNewWord, getCategories } from "../../redux/words/wordsOperation";
import { toast } from "react-toastify";

export const AddWordForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [selectedCategoryType, setSelectedCategoryType] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(false);
  const [selectedCategorie, setSelectedCategorie] = useState("Categories");
  const [isIrregular, setIsIrregular] = useState(false);
  const [en, setEn] = useState("");
  const [ua, setUa] = useState("");
  const [error, setError] = useState({});

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const hendleOpenCategoriesList = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };
  useEffect(() => {
    if (isCategoriesOpen) {
      dispatch(getCategories());
    }
  }, [dispatch, isCategoriesOpen]);
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
    } else if (selectedCategorie === "Categories") {
      setError({ message: "Please select a category", code: "category" });
      return;
    } else {
      setError({});
    }

    try {
      let newWordData;
      if (selectedCategoryType === "regular") {
        newWordData = {
          en: en,
          ua: ua,
          category: selectedCategorie,
          isIrregular: isIrregular,
        };
      } else if (selectedCategoryType === "irregular") {
        newWordData = {
          en: en,
          ua: ua,
          category: selectedCategorie,
          isIrregular: isIrregular,
        };
      } else {
        newWordData = {
          en: en,
          ua: ua,
          category: selectedCategorie,
        };
      }
      dispatch(addNewWord(newWordData));

      onClose();
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Such a word exists");
      }
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles.verbCategoriesWrp}>
        <div className={styles.filterBox} onClick={hendleOpenCategoriesList}>
          {!isCategoriesOpen ? (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowDown size={20} fill="#FCFCFC" />
            </button>
          ) : (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowUp size={20} fill="#FCFCFC" />
            </button>
          )}
          <p className={styles.categoriesName}>{selectedCategorie}</p>
          <ul
            className={
              isCategoriesOpen === true
                ? styles.dropDowList || styles.active
                : styles.hidden
            }
          >
            <li
              onClick={() => {
                setSelectedCategorie("Categories");
                setSelectedCategories(null);
                setIsCategoriesOpen(false);
                setError({});
              }}
            >
              <p className={styles.categoriesName}> Categories</p>
            </li>
            {categories &&
              categories.map((el) => {
                return (
                  <li
                    onClick={() => {
                      setSelectedCategorie(el);
                      setSelectedCategories(el);
                      setIsCategoriesOpen(false);
                      setError({});
                    }}
                    key={nanoid()}
                    className={
                      el === selectedCategories ? styles.selectedCategory : ""
                    }
                  >
                    <p className={styles.categoriesName}>{el}</p>
                  </li>
                );
              })}
          </ul>
        </div>
        {selectedCategorie === "verb" && (
          <div className={styles.radioButtons}>
            <input
              className="custom-radio"
              type="radio"
              id="regularCheckbox"
              name="verbModal"
              value="regular"
              checked={selectedCategoryType === "regular"}
              onChange={() => {
                setSelectedCategoryType("regular");

                setIsIrregular(false);
              }}
            />
            <label htmlFor="regularCheckbox" className={styles.radioInput}>
              Regular
            </label>
            <input
              className="custom-radio"
              type="radio"
              value="irregular"
              id="irregularCheckbox"
              checked={isIrregular}
              onChange={() => {
                setSelectedCategoryType("irregular");
                setIsIrregular(true);
              }}
              name="verbModal"
            />
            <label htmlFor="irregularCheckbox" className={styles.radioInput}>
              Irregular
            </label>
          </div>
        )}
        {error && error.code === "category" && (
          <div className={styles.errorMessageCategory}>{error.message}</div>
        )}
      </div>

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
