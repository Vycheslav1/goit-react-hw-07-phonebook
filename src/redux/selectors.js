import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.filters;

export const getContacts = state => state.contacts;

export const selectVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(filter.filter.toLowerCase())
    );
  }
);
