export default function Suggestions({ data, handleClick }) {
  return (
    <div className="suggestion-container">
      {data.map((name, ind) => (
        <p key={ind} onClick={() => handleClick(name)}>
          {name}
        </p>
      ))}
    </div>
  );
}
