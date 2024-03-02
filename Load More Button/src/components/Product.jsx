import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./product.css";
export default function Product() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabel, setDisabel] = useState(false);

  async function fetchProductData() {
    try {
      setLoading(true);
      let response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count == 0 ? 0 : count * 2
        }`
      );
      let result = await response.json();
      setProducts((prevData) => [...prevData, ...result.products]);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(true);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [count]);

  useEffect(() => {
    if (products.length == 100) {
      setDisabel(true);
    }
  }, [products]);

  return (
    <>
      {loading ? (
        <p
          style={{ textAlign: "center", fontSize: "40px", marginTop: "100px" }}
        >
          Data is loading...Please wait
        </p>
      ) : (
        <div className="container">
          <div className="product-container">
            {products.map((item) => (
              <ProductCard {...item} />
            ))}
          </div>
          <button
            disabled={disabel}
            onClick={() => setCount((prev) => prev + 1)}
          >
            Load More Products
          </button>
          {disabel && <p>You hav Reached to 100 products</p>}
        </div>
      )}
    </>
  );
}
