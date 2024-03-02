export default function ProductCard({title,thumbnail,id}) {
  return (
    <div className="product-card" key={id}>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
    </div>
  );
}
