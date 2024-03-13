import { useState } from "react";
import Modal from "./components/Modal";
let data = {
  heading: "Customized Header",
  body: "Customized Body",
  footer: "Customized Footer",
};

function App() {
  const [showModal, setShowModal] = useState(false);
  function closeModal() {
    setShowModal(!showModal);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setShowModal(!showModal)}>Open Modal Popup</button>
      {showModal ? <Modal data={data} closeModal={closeModal} /> : null}
    </div>
  );
}

export default App;
