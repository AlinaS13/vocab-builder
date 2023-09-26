import { NavLink } from "react-router-dom";
import { Filters } from "../../components/filters/Filters";
import styles from "./Dictionary.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const DictionaryPage = () => {
  return (
    <div className={styles.dictionaryContainer}>
      <div className={styles.dictionaryFilterWrp}>
        <Filters />
        <div className={styles.dictionaryWrp}>
          <p className={styles.dictionaryProgres}>To study: 20</p>
          <button className={styles.dictionaryAddBtn}>
            Add word <AiOutlinePlus color="#85AA9F" />
          </button>
          <NavLink className={styles.dictionarylink} to="/training">
            Train oneself <BsArrowRight color="#85AA9F" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DictionaryPage;
