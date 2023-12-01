import React from "react";
import styles from "./TrainingRoom.module.scss";
import { BsArrowRight } from "react-icons/bs";
import ukraine from "../../assets/img/ukraine.png";
import united from "../../assets/img/united.png";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAnsvers } from "../../redux/words/wordsOperation";
import { WellDoneModal } from "../wellDoneModal/WellDoneModal";
import { selectTasksAnswers } from "../../redux/words/wordsSelector";
import CircularWithValueLabel from "../сircularProgress/CircularProgress";

export const TrainingRoom = ({ tasks }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const answers = useSelector(selectTasksAnswers);
  const [isOpenWellDoneModal, setIsOpenWellDoneModal] = useState(false);
  const [currentKey, setCurrentKey] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentWordObject, setCurrentWordObject] = useState(tasks[currentKey]);
  const [inputValue, setInputValue] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [isLastTask, setIsLastTask] = useState(false);
  const [submitRequested, setSubmitRequested] = useState(false);

  const openWellDoneModal = () => setIsOpenWellDoneModal(true);

  const closeWellDoneModal = () => {
    navigate("/dictionary");
    setIsOpenWellDoneModal(false);
  };

  useEffect(() => {
    setCurrentWordObject(tasks[currentKey]);
    let currentLanguage = currentWordObject.en ? "en" : "ua";
    setCurrentLanguage(currentLanguage);
    setIsLastTask(currentKey === tasks.length - 1);
  }, [tasks, currentKey, currentLanguage, currentWordObject]);

  useEffect(() => {
    if (userAnswers.length > 0 && submitRequested === true) {
      dispatch(addAnsvers(userAnswers));
    }
  }, [dispatch, userAnswers, submitRequested]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const saveAndSetNextWord = () => {
    let value = inputValue ? inputValue : null;
    const newAnswer = {
      _id: currentWordObject._id,
      task: currentLanguage,
      en: currentWordObject.en ? currentWordObject.en : value,
      ua: currentWordObject.ua ? currentWordObject.ua : value,
    };

    setUserAnswers([...userAnswers, newAnswer]);

    setCurrentKey(currentKey + 1);
    setInputValue("");
  };

  const handleSaveButtonClick = (e) => {
    e.preventDefault();
    if (!userAnswers || currentWordObject) {
      let value = inputValue ? inputValue : null;
      const newAnswer = {
        _id: currentWordObject._id,
        task: currentLanguage,
        en: currentWordObject.en ? currentWordObject.en : value,
        ua: currentWordObject.ua ? currentWordObject.ua : value,
      };

      setUserAnswers([...userAnswers, newAnswer]);
      setSubmitRequested(true);
    }
    openWellDoneModal();
  };

  return (
    <>
      <div className={styles.progressCircularWrp}>
        <CircularWithValueLabel currentKey={currentKey} />
      </div>
      <form onSubmit={handleSaveButtonClick}>
        <div className={styles.trainingRoomWrp}>
          <div className={styles.trainingTextariaWrp}>
            <textarea
              className={styles.trainingTextarea}
              name="translation"
              rows="20"
              placeholder="Введіть переклад"
              value={inputValue}
              onChange={handleInputChange}
            ></textarea>
            <div className={styles.translateLanguageMarkerWrp}>
              <div className={styles.translateLanguageMarker}>
                <img
                  src={currentLanguage !== "ua" ? ukraine : united}
                  alt={currentLanguage !== "ua" ? ukraine : united}
                />
                <p className={styles.languageTitle}>
                  {currentLanguage !== "ua" ? "Ukrainian" : "English"}
                </p>
              </div>
            </div>

            <div className={styles.trainingTask}>
              <p className={styles.trainingTaskWord}>
                {currentWordObject[currentLanguage]}
              </p>
              <div className={styles.taskLanguageMarker}>
                <img
                  src={currentLanguage === "ua" ? ukraine : united}
                  alt={currentLanguage === "ua" ? ukraine : united}
                />
                <p className={styles.languageTitle}>
                  {currentLanguage === "ua" ? "Ukrainian" : "English"}
                </p>
              </div>
            </div>
            <button
              className={styles.nextBtn}
              type="button"
              onClick={saveAndSetNextWord}
              style={{ display: isLastTask ? "none" : "inline-flex" }}
            >
              Next <BsArrowRight color="#85AA9F" />
            </button>
          </div>
        </div>
        <div className={styles.actionTasksButtonsWrp}>
          <button
            className={styles.saveTaskButton}
            // disabled={!isLastTask}
            // type="submit"
            // onClick={handleSaveButtonClick}
          >
            Save
          </button>
          <NavLink
            to="/dictionary"
            className={styles.cancelTaskButton}
            // type="button"
            //   onClick={() => dispatch(closeModalAddWord())}
          >
            Cancel
          </NavLink>
        </div>
        {isOpenWellDoneModal && (
          <WellDoneModal
            isOpen={isOpenWellDoneModal}
            onClose={closeWellDoneModal}
            answers={answers}
          />
        )}
      </form>
    </>
  );
};
