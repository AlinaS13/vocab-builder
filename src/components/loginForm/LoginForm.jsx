import { Formik, Form, Field } from "formik";
import styles from "./LoginForm.module.scss";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as yup from "yup";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ErrorSVG from "../../assets/svg/ErrorSvg";
import SuccessSVG from "../../assets/svg/SuccessSvg";
import { loginUser } from "../../redux/auth/authOperation";
import { useDispatch } from "react-redux";

const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .typeError("Must be string")
    .trim()
    .required("Please enter your email")
    .min(7, "Your email is too short")
    .max(35, "Email cannot be longer than 35 characters")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format"),
  password: yup
    .string()
    .typeError("Must be string")
    .trim()
    .required("Please enter your password")
    .min(6, "Your password is too short")
    .max(7, "Password cannot be longer than 7 characters")
    .test(
      "password",
      "The password must consist of 6 English letters and 1 number",
      (value) => /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/.test(value || "")
    ),
});

export const LoginForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const dispatch = useDispatch();

  const handleLogin = (userData) => {
    dispatch(loginUser(userData));
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <Formik
      validationSchema={SignupSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={(userData) => {
        handleLogin(userData);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => {
        return (
          <div className={styles.loginFormWrp}>
            <h2 className={styles.loginFormTitle}>Login</h2>
            <p className={styles.loginFormText}>
              Please enter your login details to continue using our service:
            </p>
            <Form className={styles.loginForm}>
              <label className={styles.loginLabel}>
                <Field
                  autoComplete="off"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={styles.loginField}
                />
                {touched.email && errors.email && (
                  <div className={styles.errorWrp}>
                    <ErrorSVG />
                    <p className={styles.errorMessage}>{errors.email}</p>
                  </div>
                )}
                {touched.email && !errors.email && (
                  <div className={styles.messageWrp}>
                    <SuccessSVG />
                    <p className={styles.successMessage}>Success email</p>
                  </div>
                )}
              </label>

              <label className={styles.loginLabel}>
                <Field
                  autoComplete="off"
                  name="password"
                  type={passwordType}
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={styles.loginField}
                />
                <div className={styles.eyeBox} onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <BsEyeSlash fill="#121417" />
                  ) : (
                    <BsEye fill="#121417" />
                  )}
                </div>
                {touched.password && errors.password && (
                  <div className={styles.errorWrp}>
                    <ErrorSVG />
                    <p className={styles.errorMessage}>{errors.password}</p>
                  </div>
                )}
                {touched.password && !errors.password && (
                  <div className={styles.messageWrp}>
                    <SuccessSVG />
                    <p className={styles.successMessage}>Success password</p>
                  </div>
                )}
              </label>
              <button
                type="submit"
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                className={styles.loginButton}
              >
                Login
              </button>
              <NavLink className={styles.navLink} to="/register">
                Register
              </NavLink>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
