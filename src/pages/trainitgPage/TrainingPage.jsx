import styles from "./TrainingPage.module.scss";
import report from "../../assets/img/blood-report.png";
import { AddWordModal } from "../../components/addWord/AddWordModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectIsModalAddWordOpen } from "../../redux/words/wordsSelector";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModalAddWord,
  openModalAddWord,
} from "../../redux/words/wordsSlicе";

const TrainingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isModalAddWordOpen = useSelector(selectIsModalAddWordOpen);
  // const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  const openModalAddWordAndRedirect = () => {
    dispatch(openModalAddWord());
    // isModalAddWordOpen(true);
    navigate("/dictionary");
  };

  // const closeModalAddWord = () => setIsOpenAddModal(false);

  return (
    <div className={styles.trainingPageContainer}>
      <div className={styles.dictionaryWelcomeContainer}>
        <div className={styles.contentWrp}>
          <div className={styles.contentBox}>
            <h2>You don't have a single word to learn right now. </h2>
            <p>
              Please create or add a word to start the workout. We want to
              improve your vocabulary and develop your knowledge, so please
              share the words you are interested in adding to your study.
            </p>
            <div className={styles.buttonWrp}>
              <button
                onClick={openModalAddWordAndRedirect}
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
        {/* {isModalAddWordOpen && (
          <AddWordModal
          // isOpen={openModalAddWordAndRedirect}
          // onClose={dispatch(closeModalAddWord())}
          />
        )} */}
      </div>
    </div>
  );
};

export default TrainingPage;
