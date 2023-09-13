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
// import breedsSlice from "./breeds/breedsSlice";
// import votingSlice from "./voting/votingSlice";
// import searchSlice from "./search/SearchSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  //   blacklist: ["teachers"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  //   breeds: breedsSlice,
  //   voting: votingSlice,
});

const middlewares = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

export const persistor = persistStore(store);
