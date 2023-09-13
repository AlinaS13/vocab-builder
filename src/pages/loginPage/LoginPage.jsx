import styles from "./LoginPage.module.scss";

import illustration from "../../assets/img/illustration.png";
import { LoginForm } from "../../components/loginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.loginPageContainer}>
      <LoginForm />
      <div className={styles.contentWrp}>
        <img src={illustration} className={styles.mainImg} alt={illustration} />
        <p className={styles.contentText}>
          Word · Translation · Grammar · Progress
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
