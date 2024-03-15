import { useEffect, useState } from "react";
import Box from "./Box";
import "./style.css";

export default function TicTacToe() {
  const [value, setValue] = useState(Array(9).fill(""));
  const [isTurnX, setIsTurnX] = useState(true);
  const [status, setStatus] = useState("Now,started with X");

  function checkWinner(box) {
    const winnerRule = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winnerRule.length; i++) {
      let [col1, col2, col3] = winnerRule[i];
      if (box[col1] && box[col1] === box[col2] && box[col1] === box[col3]) {
        return box[col1];
      }
    }

    return null;
  }

  function handleClick(getIndex) {
    let copyValue = [...value];
    if (copyValue[getIndex] || checkWinner(copyValue)) {
      return;
    }
    copyValue[getIndex] = isTurnX ? "X" : "O";
    setStatus(`Now,your turn ${!isTurnX ? "X" : "O"} `);
    setValue(copyValue);
    setIsTurnX(!isTurnX);
  }

  function handleReset() {
    setValue(Array(9).fill(""));
    setIsTurnX(true);
    setStatus("After Reset...!  Game starting with X");
  }

  useEffect(() => {
    if (checkWinner(value)) {
      setStatus("Hurray.... " + checkWinner(value) + " is winner");
    } else if (
      checkWinner(value) == null &&
      value.every((item) => item !== "")
    ) {
      setStatus("This match is draw....Please restart the game..!");
    }
  }, [value]);

  return (
    <div className="container">
      <div className="row">
        <Box value={value[0]} onClick={() => handleClick(0)} />
        <Box value={value[1]} onClick={() => handleClick(1)} />
        <Box value={value[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Box value={value[3]} onClick={() => handleClick(3)} />
        <Box value={value[4]} onClick={() => handleClick(4)} />
        <Box value={value[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Box value={value[6]} onClick={() => handleClick(6)} />
        <Box value={value[7]} onClick={() => handleClick(7)} />
        <Box value={value[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
