import AccordionData from "./AccordionData";
import { useState } from "react";
import "./style.css";

export default function Accordion() {
  const [singleSelect, setSingleSelect] = useState(null);
  const [enableMultiSelect, setEnableMulitSelect] = useState(false);
  const [multiSelect, setMultiSelect] = useState([]);

  function handleSingleSelect(currentId) {
    setSingleSelect(currentId === singleSelect ? null : currentId);
  }
  function handleMultiSingleSelect(currentId) {
    let copyArr = [...multiSelect];
    let findIndex = copyArr.indexOf(currentId);
    if (findIndex == -1) {
      copyArr.push(currentId);
    } else {
      copyArr.splice(findIndex, 1);
    }
    setMultiSelect(copyArr);
  }

  return (
    <div className="accordion-container">
      <button className="accord-btn" onClick={() => setEnableMulitSelect(!enableMultiSelect)}>
        {enableMultiSelect
          ? "Disable Multi Selection"
          : "Enable Multi Selection"}
      </button>
      {AccordionData.map((item) => (
        <div className="accordion">
          <header>
            <h1>{item.question}</h1>
            <button
              onClick={() =>
                enableMultiSelect
                  ? handleMultiSingleSelect(item.id)
                  : handleSingleSelect(item.id)
              }
            >
              +
            </button>
          </header>
          {enableMultiSelect
            ? multiSelect.indexOf(item.id) !== -1 && (
                <div className="content">
                  <p>{item.answer}</p>
                </div>
              )
            : singleSelect === item.id && (
                <div className="content">
                  <p>{item.answer}</p>
                </div>
              )}
        </div>
      ))}
    </div>
  );
}
