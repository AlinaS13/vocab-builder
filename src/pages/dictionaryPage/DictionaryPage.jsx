import styles from "./DictionaryPage.module.scss";
import { Dashboard } from "../../components/dashboard/Dashboard";
import { WordsTable } from "../../components/wordsTable/WordsTable";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  isLoadingWords,
  selectIsModalAddWordOpen,
  selectUserWords,
} from "../../redux/words/wordsSelector";
import { useEffect, useState } from "react";
import { AddWordModal } from "../../components/addWord/AddWordModal";
import { Loader } from "../../components/loader/Loader";
import { WordsPagination } from "../../components/wordsPagination/WordsPagination";
import { getStatistics, getUserWords } from "../../redux/words/wordsOperation";

const DictionaryPage = () => {
  const dispatch = useDispatch();
  const isModalAddWordOpen = useSelector(selectIsModalAddWordOpen);

  const [debounceTimer, setDebounceTimer] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(getStatistics());
  }, [dispatch]);

  const debouncedSearch = useCallback(
    (query) => {
      clearTimeout(debounceTimer);

      const timerId = setTimeout(() => {
        dispatch(getUserWords({ searchQuery: query.trim() }));
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
      <div className={styles.dictionaryContainer}>
        <Dashboard
          handleSearchChange={handleSearchChange}
          searchQuery={searchQuery}
        />
        <WordsTableAndPagination searchQuery={searchQuery} />
      </div>

      {isModalAddWordOpen && <AddWordModal />}
    </>
  );
};

export default DictionaryPage;

const WordsTableAndPagination = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingWords);
  const { results, totalPages, page, perPage } = useSelector(selectUserWords);
  const userWords = useSelector(selectUserWords);

  useEffect(() => {
    dispatch(
      getUserWords({
        searchQuery,
        page: userWords.page,
        perPage: userWords.perPage,
      })
    );
    // eslint-disable-next-line
  }, []);

  const handlePageChange = (newPage) => {
    dispatch(
      getUserWords({
        searchQuery,
        page: newPage,
        perPage: getUserWords.perPage,
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
            <WordsTable ownWords={results} />
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
