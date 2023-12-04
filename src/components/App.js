import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import styles from "./App.scss";
import { Layout } from "./layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute } from "../hooks/PrivateRoute";
import { PublicRoute } from "../hooks/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { getCurrentUser } from "../redux/auth/authOperation";
import { Loader } from "./loader/Loader";
import { getisAuth } from "../redux/auth/authSelector";

const DictionaryPage = lazy(() =>
  import("../pages/dictionaryPage/DictionaryPage")
);
const RecommendPage = lazy(() =>
  import("../pages/recommendPage/RecommendPage")
);
const TrainingPage = lazy(() => import("../pages/trainitgPage/TrainingPage"));
const RegisterPage = lazy(() => import("../pages/registerPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/loginPage/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/notFoundPage/NotFoundPage"));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getisAuth);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={styles.container}>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
}

export default App;
