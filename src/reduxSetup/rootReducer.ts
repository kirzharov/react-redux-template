import { Map as IMap } from "immutable";

import { ELEMENT_ADD, ELEMENT_DROP, RESET_ALL } from "./actionTypes";

const initialStateValue: { [k: string]: ListElement[] } = { list: [] };

const initialState = IMap(initialStateValue);

const actionHanlder = new Map<string, RootReducer>([
  [
    ELEMENT_ADD,
    (state, { payload }: Action<ListElement>) =>
      state.update("list", (v: ListElement[]) => [...v, payload])
  ],
  [
    ELEMENT_DROP,
    (state: RootStore, { payload }: Action<string>) =>
      state.update("list", (l: ListElement[]) =>
        l.filter(e => e.id !== payload)
      )
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
