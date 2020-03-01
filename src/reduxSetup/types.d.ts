type RootStore = {
  bookList: BookT[];
};

type Action<T> = { type: string; payload: T };

type ActionsT = typeof ADD_BOOK | typeof ADD_ALL_BOOKS | "DEFAULT_PLUG";

type RootReducer<T = ActionsT> = (
  state: RootStore,
  action: Action<T>
) => RootStore;
