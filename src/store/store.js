import { combineReducers, configureStore } from "@reduxjs/toolkit";
import allDataSlice from "./allDataSlice";
import helpCenterSlice from "./helpCenterSlice";
import navbarLinksSlice from "./navbarLinksSlice";
import nftCardsSlice from "./nftCardsSlice";
import statsSlice from "./statsSlice";
import walletSlice from "./walletSlice";

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

const rootReducer = combineReducers({
  allData: allDataSlice,
  nftCardsData: nftCardsSlice,
  navbarLinksData: navbarLinksSlice,
  statsData: statsSlice,
  walletData: walletSlice,
  helpCenterData: helpCenterSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["allData"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
