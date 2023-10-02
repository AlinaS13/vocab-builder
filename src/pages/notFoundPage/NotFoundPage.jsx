import styles from "./NotFoundPage.module.scss";
import notFound from "../../assets/img/not-found.png";
import { NavLink } from "react-router-dom";
import { PiArrowFatRightDuotone } from "react-icons/pi";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img src={notFound} alt="Not Found" className={styles.notFoundImg} />
      <NavLink to="/dictionary" className={styles.navLink}>
        Go to Dictionary Page <PiArrowFatRightDuotone color="#121417" />
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
