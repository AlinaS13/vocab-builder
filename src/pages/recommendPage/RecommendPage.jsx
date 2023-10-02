import { Dashboard } from "../../components/dashboard/Dashboard";
import styles from "./RecommendPage.module.scss";

const RecommendPage = () => {
  return (
    <div className={styles.recommendContainer}>
      <Dashboard />
    </div>
  );
};

export default RecommendPage;
