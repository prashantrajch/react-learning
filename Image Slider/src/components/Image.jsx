export default function Images({ src, alt, id, idx, currentSlide }) {
  return (
    <img
      key={id}
      src={src}
      alt={alt}
      className={
        idx === currentSlide ? "current-image active-image" : "current-image"
      }
    ></img>
  );
}
