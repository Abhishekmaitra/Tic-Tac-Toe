import React, { useState } from "react";
import Cell from "./Cell";

function Game() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [cellStyle, setCellStyle] = useState({ "background-color": "white" });
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");

  //onClick for Each Cell //
  const onClickCell = (id) => {
    if (cells[id] === "") {
      if (turn === "X") {
        cells[id] = "X";
        setTurn("O");
      } else {
        cells[id] = "O";

        setTurn("X");
      }
      checkWinner(cells);
      setCells([...cells]);
    } else return;
  };

  //Function to check winner //
  const checkWinner = () => {
    const combos = {
      rows: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      columns: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((sequence) => {
        if (cells[sequence[0]] === "" || cells[sequence[1]] === "") {
          //do nothing
        } else if (
          cells[sequence[0]] === cells[sequence[1]] &&
          cells[sequence[1]] === cells[sequence[2]]
        ) {
          setWinner(cells[sequence[0]]);
        }
      });
    }
  };

  //Function to Restart Game //
  const restartGame = () => {
    setCells(Array(9).fill(""));
    setTurn("X");
    setWinner("");
  };

  return (
    <>
      <div className="game">
        {cells.map((item, index) => (
          <Cell
            key={index}
            cellStyle={cellStyle}
            item={item}
            id={index}
            onClickCell={onClickCell}
          />
        ))}
      </div>
      {winner && (
        <div className="btn-container">
          <div className="greeting-text"> {winner} is the winner</div>
          <button className="restartBtn" onClick={() => restartGame()}>
            Restart Game
          </button>
        </div>
      )}
    </>
  );
}

export default Game;
