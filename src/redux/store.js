import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlicе";
import wordsReducer from "./words/wordsSlicе";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
  }),
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    words: wordsReducer,
  },
  middleware: middlewares,
});

export const persistor = persistStore(store);
