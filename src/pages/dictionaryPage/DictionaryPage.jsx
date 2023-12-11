import styles from "./DictionaryPage.module.scss";
import report from "../../assets/img/blood-report.png";
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
import { LogOutModal } from "../../components/logOutModal/LogOutModal";
import { selectIsModalOpen } from "../../redux/auth/authSelector";
import { openModalLogOut } from "../../redux/auth/authSlicе";
import { openModalAddWord } from "../../redux/words/wordsSlicе";

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
  const isModalOpen = useSelector(selectIsModalOpen);
  const isModalAddWordOpen = useSelector(selectIsModalAddWordOpen);
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
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {results.length > 0 ? (
            <div>
              <WordsTable ownWords={results} />
            </div>
          ) : searchQuery ? (
            <p>{searchQuery} not found</p>
          ) : (
            <div className={styles.dictionaryСontentWrp}>
              <div className={styles.dictionaryСontentBox}>
                <h2>You don't have a single word in your dictionary.</h2>
                <p>
                  Please create or add a word to start the workout. We want to
                  improve your vocabulary and develop your knowledge, so please
                  share the words you are interested in adding to your study.
                </p>
                <div className={styles.buttonWrp}>
                  <button
                    onClick={() => dispatch(openModalAddWord())}
                    type="button"
                    className={styles.addButton}
                  >
                    Add word
                  </button>
                  <button
                    type="button"
                    className={styles.cancelButton}
                    onClick={() => dispatch(openModalLogOut())}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <img
                className={styles.dictionaryPageImg}
                src={report}
                alt={report}
              />
            </div>
          )}
          {isModalOpen && <LogOutModal />}
          {isModalAddWordOpen && <AddWordModal />}
        </>
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
  );
};
