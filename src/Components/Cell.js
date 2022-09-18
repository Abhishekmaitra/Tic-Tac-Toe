import React, { useState, useEffect } from "react";

function Cell({ item, cellStyle, id, onClickCell }) {
  const [style, setStyle] = useState({ cellStyle });

  //  Cell Styling  //
  useEffect(() => {
    if (item === "X") {
      setStyle({ "background-color": "salmon" });
    } else if (item === "O") {
      setStyle({ "background-color": "cyan" });
    } else setStyle({ cellStyle });
  }, [item, cellStyle]);

  return (
    <div className="cell" style={style} onClick={() => onClickCell(id)}>
      {item}
    </div>
  );
}

export default Cell;
