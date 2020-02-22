import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

export const Navigation = () => (
  <ul>
    <li>
      <Link to="/list">Da Coolest list ever</Link>
    </li>
    <li>
      <Link to={`/fc/${v4()}`}>To FC with random Id</Link>
    </li>
  </ul>
);
