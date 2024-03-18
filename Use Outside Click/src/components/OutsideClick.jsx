import { useEffect } from "react";

export default function OutsideClick(ref, handler) {
  useEffect(() => {
    function listener(event) {
      if (!ref.current) {
        console.log("im run in if block");
        return;
      }
      handler();
    }

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}
