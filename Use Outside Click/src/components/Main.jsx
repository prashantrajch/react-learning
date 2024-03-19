import { useRef, useState } from "react";
import OutsideClick from "./OutsideClick";

export default function UseOnClickOustideMain() {
  const [showContent, setShowContent] = useState(false);
  const divRef = useRef();

  OutsideClick(divRef, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={divRef} style={{padding: '10px',background: 'blue',color: "#fff"}}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of theis to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button style={{padding: '12px 20px',cursor:'pointer'}} onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
