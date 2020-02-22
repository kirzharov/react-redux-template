import { ELEMENT_ADD, ELEMENT_DROP, RESET_ALL } from "./actionTypes";

const initialState: RootStore = { list: [] };

const actionHanlder = new Map<string, RootReducer>([
  [
    ELEMENT_ADD,
    (state, action: Action<ListElement>) => {
      const { list } = state;
      return { list: [...list, action.payload] };
    }
  ],
  [
    ELEMENT_DROP,
    (state: RootStore, action: Action<string>) => {
      const { list } = state;
      return { list: list.filter(e => e.id !== action.payload) };
    }
  ],
  [RESET_ALL, () => initialState],
  ["DEFAULT_PLUG", (state: RootStore) => state]
]);

export function rootReducer(state = initialState, action: Action<ActionsT>) {
  const reducerToFire = (actionHanlder.has(action.type)
    ? actionHanlder.get(action.type)
    : actionHanlder.get("DEFAULT_PLUG")) as RootReducer;

  return reducerToFire(state, action);
}
