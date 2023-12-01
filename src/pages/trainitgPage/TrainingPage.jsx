import styles from "./TrainingPage.module.scss";
import report from "../../assets/img/blood-report.png";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { openModalAddWord } from "../../redux/words/wordsSlicе";

import { isLoadingWords, selectTasks } from "../../redux/words/wordsSelector";

import { TrainingRoom } from "../../components/trainingRoom/TrainingRoom";
import { Loader } from "../../components/loader/Loader";

import { useEffect } from "react";
import { getTasks } from "../../redux/words/wordsOperation";

const TrainingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const isLoading = useSelector(isLoadingWords);

  const openModalAddWordAndRedirect = () => {
    dispatch(openModalAddWord());
    navigate("/dictionary");
  };
  useEffect(() => {
    dispatch(getTasks());
    // eslint-disable-next-line
  }, []);

  if (tasks === null) {
    return <Loader />;
  }

  return (
    <div className={styles.trainingPageContainer}>
      {isLoading ? (
        <Loader />
      ) : tasks?.length > 0 ? (
        <div className={styles.tasksContainer}>
          <TrainingRoom tasks={tasks} />
        </div>
      ) : (
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
        </div>
      )}
    </div>
  );
};

export default TrainingPage;
