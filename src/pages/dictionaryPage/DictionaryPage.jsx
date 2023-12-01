import styles from "./DictionaryPage.module.scss";
import { Dashboard } from "../../components/dashboard/Dashboard";
import { WordsTable } from "../../components/wordsTable/WordsTable";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingWords,
  selectIsModalAddWordOpen,
  selectUserWords,
} from "../../redux/words/wordsSelector";

import { AddWordModal } from "../../components/addWord/AddWordModal";
import { Loader } from "../../components/loader/Loader";
import { WordsPagination } from "../../components/wordsPagination/WordsPagination";
import { getStatistics, getUserWords } from "../../redux/words/wordsOperation";
import { useEffect } from "react";

const DictionaryPage = () => {
  const dispatch = useDispatch();

  const isModalAddWordOpen = useSelector(selectIsModalAddWordOpen);
  const { results, totalPages, page, perPage } = useSelector(selectUserWords);
  const userWords = useSelector(selectUserWords);
  const isLoading = useSelector(isLoadingWords);

  useEffect(() => {
    dispatch(getStatistics());
    dispatch(
      getUserWords({ page: userWords.page, perPage: userWords.perPage })
    );
    // eslint-disable-next-line
  }, []);

  const handlePageChange = (newPage) => {
    dispatch(getUserWords({ page: newPage, perPage: userWords.perPage }));
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.dictionaryContainer}>
          {results.length > 0 ? (
            <>
              <Dashboard />
              {results.length > 0 && <WordsTable ownWords={results} />}
              {totalPages > 1 && (
                <WordsPagination
                  page={page}
                  totalPages={totalPages}
                  perPage={perPage}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <Dashboard />
          )}
        </div>
      )}
      {isModalAddWordOpen && <AddWordModal />}
    </>
  );
};

export default DictionaryPage;
