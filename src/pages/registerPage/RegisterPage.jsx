import styles from "./RegisterPage.module.scss";
import { RegisterForm } from "../../components/registerForm/RegisterForm";
import illustration from "../../assets/img/illustration.png";
// import vector from "../../assets//img/vector.png";

const RegisterPage = () => {
  return (
    <div className={styles.registerPageContainer}>
      <RegisterForm />
      <div className={styles.contentWrp}>
        <img src={illustration} className={styles.mainImg} alt={illustration} />
        <p className={styles.contentText}>
          Word · Translation · Grammar · Progress
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
