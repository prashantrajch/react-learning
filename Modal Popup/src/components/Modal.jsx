import "./modal.css";
export default function Modal({ data, closeModal }) {
  return (
    <div className="container">
      <div className="modal">
        <div className="header">
          <h1>{data.heading}</h1>
          <div className="close" onClick={closeModal}>
            x
          </div>
        </div>
        <div className="body">
          <p>{data.body}</p>
        </div>
        <div className="footer">
          <h3>{data.footer} </h3>
        </div>
      </div>
    </div>
  );
}
