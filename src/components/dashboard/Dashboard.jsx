import { NavLink, useLocation } from "react-router-dom";
import { Filters } from "../../components/filters/Filters";
import styles from "./Dashboard.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

import { AddWordModal } from "../../components/addWord/AddWordModal";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsModalAddWordOpen,
  selectStatistics,
} from "../../redux/words/wordsSelector";

import { openModalAddWord } from "../../redux/words/wordsSlicе";

export const Dashboard = ({ handleSearchChange, searchQuery }) => {
  const dispatch = useDispatch();

  const location = useLocation();
  const statistics = useSelector(selectStatistics);
  const isModalAddWordOpen = useSelector(selectIsModalAddWordOpen);

  const isDictionaryPage = location.pathname === "/dictionary";

  return (
    <div>
      <div className={styles.dashboardFilterWrp}>
        <Filters
          handleSearchChange={handleSearchChange}
          searchQuery={searchQuery}
        />
        <div className={styles.dashboardWrp}>
          <div className={styles.dashboardProgres}>
            To study:
            <span className={styles.dashboardProgresValue}>
              {statistics?.totalCount}
            </span>
          </div>
          <div className={styles.dashboardAddBtnAndLinkWrp}>
            {isDictionaryPage && (
              <button
                className={styles.dashboardAddBtn}
                type="button"
                onClick={() => dispatch(openModalAddWord())}
              >
                Add word <AiOutlinePlus color="#85AA9F" />
              </button>
            )}
            {isModalAddWordOpen && <AddWordModal />}
            <NavLink className={styles.dashboardlink} to="/training">
              Train oneself <BsArrowRight color="#85AA9F" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
