import { useEffect, useState } from "react";
import styles from "./Filters.module.scss";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { getAllWords, getCategories } from "../../redux/words/wordsOperation";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingWords,
  selectCategories,
} from "../../redux/words/wordsSelector";
import { Loader } from "../loader/Loader";
import { nanoid } from "@reduxjs/toolkit";

export const Filters = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(isLoadingWords);
  const [searchQuery, setSearchQuery] = useState("");
  const [debounceTimer, setDebounceTimer] = useState(null);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const hendleOpenCategoriesList = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const debouncedSearch = (query) => {
    clearTimeout(debounceTimer);

    const timerId = setTimeout(() => {
      dispatch(getAllWords(query.trim()));
    }, 300);

    setDebounceTimer(timerId);
  };
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  useEffect(() => {
    if (searchQuery === "") {
      dispatch(getAllWords(searchQuery));
    }
  }, [dispatch, searchQuery]);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className={styles.filtersWrp}>
      <form className={styles.inputWrp}>
        <input
          name="search"
          type="text"
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
          <p>Categories</p>
          <ul
            className={
              isCategoriesOpen === true
                ? styles.dropDowList || styles.active
                : styles.hidden
            }
          >
            {isLoading ? (
              <Loader />
            ) : (
              categories &&
              categories.map((el) => {
                return <li key={nanoid()}>{el}</li>;
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
