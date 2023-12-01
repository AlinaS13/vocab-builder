import { useDispatch, useSelector } from "react-redux";
import { Dashboard } from "../../components/dashboard/Dashboard";
import { WordsTable } from "../../components/wordsTable/WordsTable";
import styles from "./RecommendPage.module.scss";
import {
  isLoadingWords,
  selectAllWords,
} from "../../redux/words/wordsSelector";
import { getAllWords } from "../../redux/words/wordsOperation";
import { WordsPagination } from "../../components/wordsPagination/WordsPagination";

import { Loader } from "../../components/loader/Loader";
import { useEffect } from "react";

const RecommendPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingWords);
  const allWords = useSelector(selectAllWords);
  const { results, totalPages, page, perPage } = useSelector(selectAllWords);

  useEffect(() => {
    dispatch(getAllWords({ page: allWords.page, perPage: allWords.perPage }));
    // eslint-disable-next-line
  }, []);

  const handlePageChange = (newPage) => {
    dispatch(getAllWords({ page: newPage, perPage: getAllWords.perPage }));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.recommendContainer}>
          <Dashboard />
          {results.length > 0 && <WordsTable allWordss={results} />}

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

export default RecommendPage;
