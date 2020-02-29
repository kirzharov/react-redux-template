import React from "react";
import { useLocation } from "react-router-dom";

export const NotFound: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <h3>
        No matched route for: <code>{location.pathname}</code>
      </h3>
    </div>
  );
};
