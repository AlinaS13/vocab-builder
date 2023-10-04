import { Routes, Route } from "react-router-dom";
import styles from "./App.scss";
import { Layout } from "./components/layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./hooks/PrivateRoute";
import { PublicRoute } from "./hooks/PublicRoute";
import RegisterPage from "./pages/registerPage/RegisterPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import DictionaryPage from "./pages/dictionaryPage/DictionaryPage";
import RecommendPage from "./pages/recommendPage/RecommendPage";
import TrainingPage from "./pages/trainitgPage/TrainingPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "./redux/auth/authOperation";
import { getStatistics, getUserWords } from "./redux/words/wordsOperation";
import { getisAuth } from "./redux/auth/authSelector";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getisAuth);
  useEffect(() => {
    dispatch(getCurrentUser());
    if (isAuth) {
      dispatch(getStatistics());
      dispatch(getUserWords());
    }

    // eslint-disable-next-line
  }, []);
  return (
    <div className={styles.container}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/recommend" element={<RecommendPage />} />
          <Route path="/training" element={<TrainingPage />} />
        </Route>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;