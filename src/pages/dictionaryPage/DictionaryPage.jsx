import styles from "./DictionaryPage.module.scss";
import { Dashboard } from "../../components/dashboard/Dashboard";
import { WordsTable } from "../../components/wordsTable/WordsTable";
import { useSelector } from "react-redux";
import { selectUserWords } from "../../redux/words/wordsSelector";

const DictionaryPage = () => {
  const { results } = useSelector(selectUserWords);
  console.log(results);
  return (
    <div className={styles.dictionaryContainer}>
      <Dashboard />
      {results.length > 0 && <WordsTable ownWords={results} />}
    </div>
  );
};

export default DictionaryPage;
