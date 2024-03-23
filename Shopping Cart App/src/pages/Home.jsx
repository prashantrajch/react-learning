import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProuctApi() {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      console.log(result);
      if (result) {
        setProducts(result);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProuctApi();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen border w-full flex justify-center items-center">
          <Circles
            height={120}
            width={120}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="border min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products != "" ? (
            products.map((productItem,id) => (
              <ProductCard key={id} product={productItem} />
            ))
          ) : (
            <p>Something Errors...!</p>
          )}
        </div>
      )}
    </div>
  );
}
