import React, { useState, Dispatch, ChangeEvent } from "react";
import { v4 } from "uuid";

import { addElement, resetStore, callFetch } from "../../reduxSetup";

type ControlListProps = { dispatch: Dispatch<ActionsT> };

const generateElement = (name: string, comment: string) => ({
  id: v4(),
  name,
  comment
});

export const ControlList = ({ dispatch }: ControlListProps) => {
  const [name, setName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
  };
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const addNew = () => {
    if (name) {
      const myComment = comment || "dummy comment";
      dispatch(addElement(generateElement(name, myComment)));
    }
  };
  const fetchElement = () => {
    dispatch(callFetch({ name, comment }));
  };
  const clearAll = () => dispatch(resetStore());

  return (
    <ul>
      <li>
        <input value={name} onChange={handleNameChange} />
        <input value={comment} onChange={handleCommentChange} />
        <button onClick={addNew}>Add element</button>
      </li>
      <li>
        <button onClick={clearAll}>Reset Store</button>
      </li>
      <li>
        <button onClick={fetchElement}>Fetch element</button>
      </li>
    </ul>
  );
};
