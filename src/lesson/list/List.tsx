import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ListItem } from "./ListItem";
import { ControlList } from "./ControlList";
import { dropElement } from "../../reduxSetup";

type ListPropsT = {
  text: string;
};

function listElementWrapper<T extends Function>(remove: T) {
  return (props: ListElement) => (
    <li>
      <button onClick={remove(props.id)}> X </button>
      <ListItem {...props} />
    </li>
  );
}

export const List = (props: ListPropsT) => {
  const { text } = props;

  const dispatch = useDispatch();

  const content = useSelector<RootStore, ListElement[]>(state => state.list);

  const remove = (id: string) => () => {
    dispatch(dropElement(id));
  };

  const RenderListElement = listElementWrapper<typeof remove>(remove);

  return (
    <>
      <b>{text}</b>
      <ControlList dispatch={dispatch} />
      <ol>
        {content &&
          content.map(el => <RenderListElement {...el} key={el.id} />)}
      </ol>
    </>
  );
};
