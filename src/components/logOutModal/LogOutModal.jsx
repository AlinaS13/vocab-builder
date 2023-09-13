import styles from "./LogOutModal.module.scss";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/authOperation";
import { closeModalLogOut } from "../../redux/auth/authSlicе";

export const LogOutModal = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser());
    dispatch(closeModalLogOut());
  };

  const onClose = (e) => {
    if (e.code === "Escape" || e.currentTarget === e.target) {
      dispatch(closeModalLogOut());
    }
  };

  window.addEventListener("keydown", onClose);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContainer}>
        <button
          className={styles.modalBtnClose}
          type="button"
          onClick={() => dispatch(closeModalLogOut())}
        >
          <RxCross2 />
        </button>
        <h2 className={styles.modalTitle}>Confirmation</h2>
        <p className={styles.modalText}>Are you sure you want to exit</p>
        <div className={styles.btnContainer}>
          <button
            className={styles.btnCancel}
            type="button"
            onClick={() => dispatch(closeModalLogOut())}
          >
            Cancel
          </button>
          <button
            className={styles.btnYes}
            type="button"
            onClick={handleLogOut}
          >
            Yes, I'm sure!
          </button>
        </div>
      </div>
    </div>
  );
};
