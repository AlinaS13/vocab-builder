import styles from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";
import { NavLink } from "react-router-dom";
import UserSVG from "../../assets/svg/UserSvg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrp}>
        <img src={logo} className={styles.logoImg} alt={logo} />
        <p className={styles.logoText}>VocabBuilder</p>
      </div>
      <nav className={styles.navWrp}>
        <NavLink to="/dictionary" className={styles.navLink}>
          Dictionary
        </NavLink>
        <NavLink to="/recommend" className={styles.navLink}>
          Recommend
        </NavLink>
        <NavLink to="/training" className={styles.navLink}>
          Training
        </NavLink>
      </nav>
      <div className={styles.authWrp}>
        <p className={styles.userName}>Iryna</p>
        <div className={styles.userSvgWrp}>
          <UserSVG />
        </div>
      </div>
    </header>
  );
};
