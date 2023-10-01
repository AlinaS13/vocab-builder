import { NavLink } from "react-router-dom";
import { Filters } from "../../components/filters/Filters";
import styles from "./Dictionary.module.scss";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { AddWordModal } from "../../components/addWord/AddWordModal";

const DictionaryPage = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const openModalAddWord = () => setIsOpenAddModal(true);
  const closeModalAddWord = () => setIsOpenAddModal(false);
  return (
    <div className={styles.dictionaryContainer}>
      <div className={styles.dictionaryFilterWrp}>
        <Filters />
        <div className={styles.dictionaryWrp}>
          <p className={styles.dictionaryProgres}>To study: 20</p>

          <button
            className={styles.dictionaryAddBtn}
            type="button"
            onClick={openModalAddWord}
          >
            Add word <AiOutlinePlus color="#85AA9F" />
          </button>
          {isOpenAddModal && (
            <AddWordModal isOpen={isOpenAddModal} onClose={closeModalAddWord} />
          )}
          <NavLink className={styles.dictionarylink} to="/training">
            Train oneself <BsArrowRight color="#85AA9F" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DictionaryPage;
