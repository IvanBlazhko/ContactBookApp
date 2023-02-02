import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactAPI } from './ContactsSlices/ContactSlice';
import { authReducer } from './UserAuth/AuthSlice';
import { myFilter } from './ContactsSlices/ContactFilterSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    myContactsFilter: myFilter.reducer,
    auth: persistedReducer,
    [contactAPI.reducerPath]: contactAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactAPI.middleware,
  ],
});

setupListeners(store.dispatch);
export const persist = persistStore(store);
