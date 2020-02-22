type ListElement = { name: string; id: string; comment: string };

type IMap<K, V> = import("immutable").Map<K, V>;

type RootStore = IMap<string, ListElement[]>;

type Action<T> = { type: string; payload: T };

type ActionsT =
  | typeof ELEMENT_ADD
  | typeof ELEMENT_DROP
  | typeof RESET_ALL
  | typeof MOUNT_DATA
  | "DEFAULT_PLUG";

type RootReducer<T = ActionsT> = (
  state: RootStore,
  action: Action<T>
) => RootStore;
