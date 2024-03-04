import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerator() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR code Generator</h1>
      <div className="input-container">
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => handleGenerator()}
          disabled={input ? false : true}
        >
          Generator
        </button>
      </div>
      <div className="qr-container">
        {qrCode ? (
          <QRCode
            id="qr-code-value"
            value={qrCode}
            size={250}
            bgColor="#023047"
            fgColor="#fff"
          />
        ) : null}
      </div>
    </div>
  );
}
