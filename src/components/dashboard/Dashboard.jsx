import { NavLink, useLocation } from "react-router-dom";
import { Filters } from "../../components/filters/Filters";
import styles from "./Dashboard.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { AddWordModal } from "../../components/addWord/AddWordModal";
import { useSelector } from "react-redux";

import { selectStatistics } from "../../redux/words/wordsSelector";
// import { getStatistics } from "../../redux/words/wordsOperation";

export const Dashboard = () => {
  //   const dispatch = useDispatch();
  const location = useLocation();
  const statistics = useSelector(selectStatistics);

  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const openModalAddWord = () => setIsOpenAddModal(true);
  const closeModalAddWord = () => setIsOpenAddModal(false);

  const isDictionaryPage = location.pathname === "/dictionary";
  //   useEffect(() => {
  //     dispatch(getStatistics());
  //   }, [dispatch]);
  return (
    <div>
      <div className={styles.dashboardFilterWrp}>
        <Filters />
        <div className={styles.dashboardWrp}>
          <div className={styles.dashboardProgres}>
            To study:
            <span className={styles.dashboardProgresValue}>
              {statistics?.totalCount}
            </span>
          </div>
          {isDictionaryPage && (
            <button
              className={styles.dashboardAddBtn}
              type="button"
              onClick={openModalAddWord}
            >
              Add word <AiOutlinePlus color="#85AA9F" />
            </button>
          )}
          {isOpenAddModal && (
            <AddWordModal isOpen={isOpenAddModal} onClose={closeModalAddWord} />
          )}
          <NavLink className={styles.dashboardlink} to="/training">
            Train oneself <BsArrowRight color="#85AA9F" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
