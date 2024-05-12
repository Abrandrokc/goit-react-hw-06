import { configureStore } from "@reduxjs/toolkit";
import contact from "./contactsSlice";
import filter from './filtersSlice'
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
const contactConfic = {key: "contactItems",
  storage,
  whitelist: ["items"],}
const pContacts = persistReducer(contactConfic, contact)
export const store = configureStore({
    reducer: {contacts: pContacts,
        filters: filter,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),}
)
export const persistore = persistStore(store)