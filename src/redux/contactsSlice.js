import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContacts(state, { payload }) {
      state.contacts.push(payload);
    },
    deleteContacts(state, { payload }) {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContacts, changeFilter, deleteContacts } =
  contactsSlice.actions;
