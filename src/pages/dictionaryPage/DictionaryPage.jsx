import { Dashboard } from "../../components/dashboard/Dashboard";
// import { WordsTable } from "../../components/wordsTable/WordsTable";
import styles from "./DictionaryPage.module.scss";

const DictionaryPage = () => {
  return (
    <div className={styles.dictionaryContainer}>
      <Dashboard />
      {/* <WordsTable /> */}
    </div>
  );
};

export default DictionaryPage;
