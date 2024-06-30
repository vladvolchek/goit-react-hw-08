import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filter/selectors";

export const selectLoading = (state) => state.contacts.loading;



export const selectAllContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  }
);
