import { useEffect, useState } from "react";
import styles from "./Filters.module.scss";
import "./stylesFilter.css";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import {
  getAllWords,
  getCategories,
  getUserWords,
} from "../../redux/words/wordsOperation";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../redux/words/wordsSelector";
import { nanoid } from "@reduxjs/toolkit";
import { getisAuth } from "../../redux/auth/authSelector";
import { useLocation } from "react-router-dom";

export const Filters = ({ handleSearchChange, searchQuery }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getisAuth);
  const location = useLocation();
  const categories = useSelector(selectCategories);
  const [isSelectedCategories, setIsSelectedCategories] = useState(false);

  const [selectedVerbCategory, setSelectedVerbCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const isDictionaryPage = location.pathname === "/dictionary";

  const hendleOpenCategoriesList = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  useEffect(() => {
    if (isLoggedIn && !categories) {
      dispatch(getCategories());
    }
  }, [dispatch, isLoggedIn, categories]);

  const hendleSelectCategory = (el) => {
    setSelectedCategory(el);
    setIsCategoriesOpen(false);

    if (isDictionaryPage) {
      dispatch(getUserWords({ selectedCategory: el }));
    } else if (!isDictionaryPage) {
      dispatch(getAllWords({ selectedCategory: el }));
    }
  };
  const handleVerbCategoryChange = (value) => {
    setSelectedVerbCategory(value);
    if (isDictionaryPage) {
      dispatch(getUserWords({ selectedCategory: "verb", isIrregular: value }));
    } else if (!isDictionaryPage) {
      dispatch(getAllWords({ selectedCategory: "verb", isIrregular: value }));
    }
  };
  const handleResetFilters = () => {
    setSelectedVerbCategory(null);
    setIsCategoriesOpen(false);
    const radioButtons = document.getElementsByName("verbFilter");
    radioButtons.forEach((button) => {
      button.checked = false;
    });
    handleVerbCategoryChange(null);
    hendleSelectCategory(null);
    setSelectedCategory("Categories");
  };

  return (
    <div className={styles.filtersWrp}>
      <form className={styles.inputWrp}>
        <input
          name="search"
          type="search"
          autoComplete="off"
          placeholder="Find the word"
          value={searchQuery}
          onChange={handleSearchChange}
        ></input>
        <FiSearch className={styles.inputSvg} color="#121417" />
      </form>
      <div>
        <div className={styles.filterBox} onClick={hendleOpenCategoriesList}>
          {!isCategoriesOpen ? (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowDown size={20} fill="#121417" />
            </button>
          ) : (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowUp size={20} fill="#121417" />
            </button>
          )}
          <p className={styles.categoriesName}>{selectedCategory}</p>
          <ul
            className={
              isCategoriesOpen === true
                ? styles.dropDowList || styles.active
                : styles.hidden
            }
          >
            <li onClick={handleResetFilters}>
              <p className={styles.categoriesName}>Categories</p>
            </li>
            {categories &&
              categories.map((el) => {
                return (
                  <li
                    onClick={() => {
                      hendleSelectCategory(el);
                    }}
                    key={nanoid()}
                    className={
                      el === isSelectedCategories ? styles.selectedCategory : ""
                    }
                  >
                    <p className={styles.categoriesName}> {el}</p>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      {selectedCategory === "verb" && (
        <div className={styles.radioButtons}>
          <input
            className="custom-radio-filter"
            type="radio"
            id="custom-1"
            name="verbFilter"
            value="regular"
            checked={selectedVerbCategory === "true"}
            onChange={() => handleVerbCategoryChange("true")}
          />
          <label htmlFor="custom-1" className={styles.radioInput}>
            Regular
          </label>
          <input
            className="custom-radio-filter"
            type="radio"
            value="irregular"
            id="custom-2"
            name="verbFilter"
            checked={selectedVerbCategory === "false"}
            onChange={() => handleVerbCategoryChange("false")}
          />
          <label htmlFor="custom-2" className={styles.radioInput}>
            Irregular
          </label>
        </div>
      )}
    </div>
  );
};
