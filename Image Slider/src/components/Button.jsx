export default function Button({ idx, currentSlide, handleBtnClick }) {
  return (
    <button
      key={idx}
      className={
        idx === currentSlide
          ? "current-indicatior active-indicator"
          : "current-indicatior"
      }
      onClick={() => handleBtnClick(idx)}
    ></button>
  );
}
