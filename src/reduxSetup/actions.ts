import { ADD_BOOK, ADD_ALL_BOOKS, FETCH_ALL_BOOKS } from "./actionTypes";

export const addBook = (payload: BookT) => ({
  type: ADD_BOOK,
  payload
});

export const addAllBooks = (payload: BookT[]) => ({
  type: ADD_ALL_BOOKS,
  payload
});

export const fetchAllBooks = (retryCount = 0) => ({
  type: FETCH_ALL_BOOKS,
  payload: { retryCount }
});
