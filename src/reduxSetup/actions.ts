import { ELEMENT_ADD, ELEMENT_DROP, RESET_ALL } from "./actionTypes";

export const addElement = (newElement: ListElement) => ({
  type: ELEMENT_ADD,
  payload: newElement
});

export const dropElement = (idOfElementToRemove: string) => ({
  type: ELEMENT_DROP,
  payload: idOfElementToRemove
});

export const resetStore = () => ({ type: RESET_ALL });
