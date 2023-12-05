import { useDispatch, useSelector } from "react-redux";
import { Dashboard } from "../../components/dashboard/Dashboard";
import { WordsTable } from "../../components/wordsTable/WordsTable";
import styles from "./RecommendPage.module.scss";
import {
  isLoadingWords,
  selectAllWords,
} from "../../redux/words/wordsSelector";
import { getAllWords, getStatistics } from "../../redux/words/wordsOperation";
import { WordsPagination } from "../../components/wordsPagination/WordsPagination";

import { Loader } from "../../components/loader/Loader";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const RecommendPage = () => {
  const dispatch = useDispatch();

  const [debounceTimer, setDebounceTimer] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  const debouncedSearch = useCallback(
    (query) => {
      clearTimeout(debounceTimer);

      const timerId = setTimeout(() => {
        dispatch(getAllWords({ searchQuery: query.trim() }));
      }, 300);

      setDebounceTimer(timerId);
    },
    [debounceTimer, dispatch]
  );

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  return (
    <>
      <div className={styles.recommendContainer}>
        <Dashboard
          handleSearchChange={handleSearchChange}
          searchQuery={searchQuery}
        />
        <WordsTableAndPagination searchQuery={searchQuery} />
      </div>
    </>
  );
};

export default RecommendPage;

const WordsTableAndPagination = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingWords);
  const { results, totalPages, page, perPage } = useSelector(selectAllWords);
  const allWords = useSelector(selectAllWords);

  useEffect(() => {
    dispatch(
      getAllWords({
        searchQuery,
        page: allWords.page,
        perPage: allWords.perPage,
      })
    );
    // eslint-disable-next-line
  }, []);

  const handlePageChange = (newPage) => {
    dispatch(
      getAllWords({
        searchQuery,
        page: newPage,
        perPage: getAllWords.perPage,
      })
    );
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {results.length > 0 ? (
            <WordsTable allWords={results} />
          ) : (
            searchQuery && <p>{searchQuery} not found</p>
          )}
          {totalPages > 1 && (
            <WordsPagination
              page={page}
              totalPages={totalPages}
              perPage={perPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      )}
    </>
  );
};
