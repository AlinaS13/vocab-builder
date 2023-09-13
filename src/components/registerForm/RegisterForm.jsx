import { Formik, Form, Field } from "formik";
import styles from "./RegisterForm.module.scss";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as yup from "yup";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ErrorSVG from "../../assets/svg/ErrorSvg";
import SuccessSVG from "../../assets/svg/SuccessSvg";
// import { useDispatch } from "react-redux";
// import { registrationUser } from "../../redux/auth/authOperation";

const SignupSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("Must be string")
    .required("Please enter your name")
    .matches(/^[a-zA-Z0-9а-яА-ЯІіЇї]+$/, "Special symbols are not allowed")
    .min(3, "Your username i s too short")
    .max(16, "Username cannot be longer than 16 characters"),
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
      "Password is little secure.Please enter an uppercase letter, a lowercase letter, and a number",
      (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(value || "")
    ),
});

export const RegisterForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  //   const dispatch = useDispatch();

  //   const handleRegister = (userData) => {
  //     dispatch(registrationUser(userData));
  //   };

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
        name: "",
        email: "",
        password: "",
      }}
      validateOnBlur
      //   onSubmit={(userData) => {
      //     handleRegister(userData);
      //   }}
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
          <div className={styles.registrationFormWrp}>
            <h2 className={styles.registrationFormTitle}>Register</h2>
            <p className={styles.registrationFormText}>
              To start using our services, please fill out the registration form
              below. All fields are mandatory:
            </p>
            <Form className={styles.registrationForm}>
              <label className={styles.registrationLabel}>
                <Field
                  autoComplete="off"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className={`${styles.registrationField} ${
                    errors.name && touched.name ? styles.error : ""
                  } ${!errors.name && touched.name ? styles.success : ""}`}
                />
                {touched.name && errors.name && (
                  <div className={styles.messageWrp}>
                    <ErrorSVG />
                    <p className={styles.errorMessage}>{errors.name}</p>
                  </div>
                )}
                {touched.name && !errors.name && (
                  <div className={styles.messageWrp}>
                    <SuccessSVG />
                    <p className={styles.successMessage}>Success name</p>
                  </div>
                )}
              </label>

              <label className={styles.registrationLabel}>
                <Field
                  autoComplete="off"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={styles.registrationField}
                />
                {touched.email && errors.email && (
                  <div className={styles.messageWrp}>
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

              <label className={styles.registrationLabel}>
                <Field
                  autoComplete="off"
                  name="password"
                  type={passwordType}
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={styles.registrationField}
                />
                <div className={styles.eyeBox} onClick={togglePassword}>
                  {passwordType === "password" ? (
                    <BsEyeSlash fill="#121417" />
                  ) : (
                    <BsEye fill="#121417" />
                  )}
                </div>
                {touched.password && errors.password && (
                  <div className={styles.messageWrp}>
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
                className={styles.registrationButton}
              >
                Register
              </button>
              <NavLink className={styles.navLink} to="/login">
                Login
              </NavLink>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
