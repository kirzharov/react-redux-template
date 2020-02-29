import React from "react";

type MenuPropsT = {
  menuOptions: string[];
};

export const MenuList = ({ menuOptions }: MenuPropsT) => {
  return (
    <ul>
      {menuOptions.map(it => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  );
};
