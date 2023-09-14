import styles from "./Header.module.scss";
import logo from "../../assets/svg/logo.svg";
import { NavLink } from "react-router-dom";
import UserSVG from "../../assets/svg/UserSvg";
import { useDispatch, useSelector } from "react-redux";
import { LuLogOut } from "react-icons/lu";

import {
  getisAuth,
  getUserName,
  selectIsModalOpen,
} from "../../redux/auth/authSelector";
import { openModalLogOut } from "../../redux/auth/authSlicе";
import { LogOutModal } from "../logOutModal/LogOutModal";

export const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const isAuth = useSelector(getisAuth);
  const isModalOpen = useSelector(selectIsModalOpen);
  return (
    <header className={styles.header}>
      <div className={styles.logoWrp}>
        <img src={logo} alt={logo} />
        <p className={styles.logoText}>VocabBuilder</p>
      </div>
      {isAuth ? (
        <>
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
            <p className={styles.userName}>{userName}</p>
            <div className={styles.userSvgWrp}>
              <UserSVG />
            </div>
            <button
              className={styles.logoutBtn}
              type="button"
              onClick={() => dispatch(openModalLogOut())}
            >
              <LuLogOut color="#121417" />
            </button>
            {isModalOpen && <LogOutModal />}
          </div>
        </>
      ) : null}
    </header>
  );
};
