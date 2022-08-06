import React from "react";

export const CheckList = (props) => {
  const { noteValue } = props;
  return (
    <div>
      notes:
      {noteValue}
    </div>
  );
};
