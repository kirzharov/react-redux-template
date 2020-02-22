type ListElement = { name: string; id: string; comment: string };

type RootStore = { list: ListElement[] };

type Action<T> = { type: string; payload: T };

type ActionsT =
  | typeof ELEMENT_ADD
  | typeof ELEMENT_DROP
  | typeof RESET_ALL
  | "DEFAULT_PLUG";

type RootReducer<T = ActionsT> = (
  state: RootStore,
  action: Action<T>
) => RootStore;
