import React from "react";

type ListItemProps = ListElement;

export const ListItem = ({ name, comment }: ListItemProps) => (
  <b>
    {name} - comment: {comment}
  </b>
);
