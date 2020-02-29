import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ListItem } from "./ListItem";
import { ControlList } from "./ControlList";
import { dropElement } from "../../../reduxSetup";
import { listSelector } from "./selectors";
import { MyBlock } from "./MyBlock";
import { MyBoldB } from "./styled";

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

  const { list, count, moreThanThree } = useSelector<
    RootStore,
    { list: ListElement[]; count: number; moreThanThree: number }
  >(listSelector);

  const remove = (id: string) => () => {
    dispatch(dropElement(id));
  };

  const RenderListElement = listElementWrapper<typeof remove>(remove);

  return (
    <>
      <MyBlock text={text} />
      <b>{count}</b>
      <MyBoldB>{moreThanThree}</MyBoldB>
      <ControlList dispatch={dispatch} />
      <ol>
        {list && list.map(el => <RenderListElement {...el} key={el.id} />)}
      </ol>
    </>
  );
};
