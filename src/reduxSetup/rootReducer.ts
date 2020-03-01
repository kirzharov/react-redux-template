import { ADD_BOOK, ADD_ALL_BOOKS } from "./actionTypes";

const initialState: RootStore = {
  bookList: []
};

const actionHanlder = new Map<string, RootReducer>([
  [
    ADD_BOOK,
    (state, action: Action<BookT>) => ({
      bookList: [...state.bookList, action.payload]
    })
  ],
  [
    ADD_ALL_BOOKS,
    (state, { payload }: Action<BookT[]>) => ({
      bookList: [...state.bookList, ...payload]
    })
  ],

  ["DEFAULT_PLUG", (state: RootStore) => state]
]);

export function rootReducer(state = initialState, action: Action<ActionsT>) {
  const reducerToFire = (actionHanlder.has(action.type)
    ? actionHanlder.get(action.type)
    : actionHanlder.get("DEFAULT_PLUG")) as RootReducer;

  return reducerToFire(state, action);
}
