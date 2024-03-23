import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/Slices/CartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div>
      <div className="groud flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg ">
            {product.title}
          </h1>
        </div>
        <div className="flex items-center w-full mt-5 justify-between">
          <button
            onClick={
              cart.some((item) => item.id == product.id)
                ? handleRemoveFromCart
                : handleAddToCart
            }
            className="bg-red-950 text-white border-2 rounded-lg p-2 px-4 font-bold"
          >
            {cart.some((item) => item.id == product.id)
              ? "Remove From Cart"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
