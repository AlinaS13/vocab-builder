import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import authReducer from "./auth/authSlicе";
import wordsReducer from "./words/wordsSlicе";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    words: wordsReducer,
  },
  middleware: middlewares,
});

export const persistor = persistStore(store);

//!
//import storage from "redux-persist/lib/storage";
// import logger from "redux-logger";
// import authReducer from "./auth/authSlicе";
// import wordsReducer from "./words/wordsSlicе";
// import { combineReducers } from "redux";
// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from "redux-persist";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";

// const persistConfig = {
//   key: "user",
//   version: 1,
//   storage,
//   whitelist: ["token"],
// };

// const rootReducer = combineReducers({
//   auth: authReducer,
//   words: wordsReducer,
// });

// const middlewares = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: middlewares,
// });
// export const persistor = persistStore(store);
