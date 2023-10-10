import styles from "./DictionaryPage.module.scss";
import report from "../../assets/img/blood-report.png";
import { Dashboard } from "../../components/dashboard/Dashboard";
import { WordsTable } from "../../components/wordsTable/WordsTable";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingWords,
  selectUserWords,
} from "../../redux/words/wordsSelector";
import { useState } from "react";
import { AddWordModal } from "../../components/addWord/AddWordModal";
import { Loader } from "../../components/loader/Loader";
import { WordsPagination } from "../../components/wordsPagination/WordsPagination";
import { getUserWords } from "../../redux/words/wordsOperation";

const DictionaryPage = () => {
  const dispatch = useDispatch();
  const { results, totalPages, page, perPage } = useSelector(selectUserWords);
  const userWords = useSelector(selectUserWords);
  const isLoading = useSelector(isLoadingWords);
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const openModalAddWord = () => setIsOpenAddModal(true);
  const closeModalAddWord = () => setIsOpenAddModal(false);

  const handlePageChange = (newPage) => {
    dispatch(getUserWords({ page: newPage, perPage: userWords.perPage }));
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {results.length > 0 ? (
            <div className={styles.dictionaryContainer}>
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
            </div>
          ) : (
            <div className={styles.dictionaryWelcomeContainer}>
              <div className={styles.contentWrp}>
                <div className={styles.contentBox}>
                  <h2>You don't have a single word to learn right now. </h2>
                  <p>
                    Please create or add a word to start the workout. We want to
                    improve your vocabulary and develop your knowledge, so
                    please share the words you are interested in adding to your
                    study.
                  </p>
                  <div className={styles.buttonWrp}>
                    <button
                      onClick={openModalAddWord}
                      type="button"
                      className={styles.addButton}
                    >
                      Add word
                    </button>
                    <button type="button" className={styles.cancelButton}>
                      Cancel
                    </button>
                  </div>
                </div>
                <img src={report} alt={report} />
              </div>
              {isOpenAddModal && (
                <AddWordModal
                  isOpen={isOpenAddModal}
                  onClose={closeModalAddWord}
                />
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DictionaryPage;
