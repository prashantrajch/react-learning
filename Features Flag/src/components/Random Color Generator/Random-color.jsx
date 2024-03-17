import { useEffect, useState } from "react";
import "./randomColor.css";

export default function RandomColor() {
  const [typeColor, setTypeColor] = useState("HEX");
  const [color, setColor] = useState("#000000");


  function randomNumber(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {
    let colorArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += colorArr[randomNumber(colorArr.length)];
    }
    setColor(hex);
  }
  function handleRandomRgbColor() {
    let r = randomNumber(256);
    let g = randomNumber(256);
    let b = randomNumber(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeColor == "HEX") {
        handleRandomHexColor();
    } else {
        handleRandomRgbColor()
    }
  }, [typeColor]);

  return (
    <div className="bg-container" style={{ backgroundColor: `${color}` }}>
      <div className="bg-btns">
        <button onClick={() => setTypeColor('HEX')}>Hex Color</button>
        <button onClick={() =>setTypeColor("RGB")}>RGB Color</button>
        <button onClick={typeColor === 'HEX' ? handleRandomHexColor : handleRandomRgbColor}>Random Color Generator</button>
      </div>
      <div className="body-container">
        <h1>{typeColor} color</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
