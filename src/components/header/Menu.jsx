import { RxCross2 } from "react-icons/rx";
import styles from "./Menu.module.scss";
import UserSVG from "../../assets/svg/UserSvg";
import { useDispatch, useSelector } from "react-redux";
import { getUserName } from "../../redux/auth/authSelector";
import { NavLink } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { openModalLogOut } from "../../redux/auth/authSlicе";

const Menu = ({ setIsMenuActive, isMenuActive }) => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  return (
    <div className={`${styles.backdrop} ${isMenuActive ? styles.active : ""}`}>
      <button
        className={styles.closeBtn}
        type="button"
        onClick={() => setIsMenuActive(false)}
      >
        <RxCross2 color="#ffffff" className={styles.closeSvg} />
      </button>
      <div className={styles.authWrp}>
        <p className={styles.userName}>{userName}</p>
        <div className={styles.userSvgWrp}>
          <UserSVG />
        </div>
        <button
          className={styles.logoutBtn}
          type="button"
          onClick={() => {
            dispatch(openModalLogOut());
            setIsMenuActive(false);
          }}
        >
          <LuLogOut color="#fcfcfc" />
        </button>
      </div>
      <nav className={styles.navWrp}>
        <NavLink
          to="/dictionary"
          className={styles.navLink}
          onClick={() => setIsMenuActive(false)}
        >
          Dictionary
        </NavLink>
        <NavLink
          to="/recommend"
          className={styles.navLink}
          onClick={() => setIsMenuActive(false)}
        >
          Recommend
        </NavLink>
        <NavLink
          to="/training"
          className={styles.navLink}
          onClick={() => setIsMenuActive(false)}
        >
          Training
        </NavLink>
      </nav>
    </div>
  );
};

export default Menu;
