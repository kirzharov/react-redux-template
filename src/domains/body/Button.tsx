import React from "react";
import { useDispatch } from "react-redux";

import { fetchAllBooks } from "../../reduxSetup/actions";

export const Button = () => {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(fetchAllBooks())}>get books</button>;
};
