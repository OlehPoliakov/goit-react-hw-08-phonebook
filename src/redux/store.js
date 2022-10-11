import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contacts/api';
import contactsSlice from './contacts/slice';

export const store = configureStore({
  reducer: {
    filter: contactsSlice,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
