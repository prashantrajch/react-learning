import { useRef, useState } from "react";
import OutsideClick from "./OutsideClick";

export default function UseOnClickOustideMain() {
  const [showContent, setShowContent] = useState(false);
  const divRef = useRef();

  OutsideClick(divRef,() => setShowContent(false));

  console.log(OutsideClick)

  return (
    <div>
      {showContent ? (
        <div ref={divRef}>
          <h1>Thsi is a random content</h1>
          <p>
            Please click outside of theis to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
