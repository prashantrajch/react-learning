import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/Slices/CartSlice";

export default function CartCard({ cartItem }) {
  const dispatch = useDispatch();
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div>
      <div className="flex items-center p-5 justify-between bg-red-500 mt mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem.image}
            alt={cartItem.title}
            className="h-28 rounded-lg"
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem.title}</h1>
            <p className="text-white font-extrabold">{cartItem.price} </p>
            <button
              onClick={handleRemoveFromCart}
              className="bg-red-950 text-white border-2 rounded-lg p-2 px-4 font-bold"
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
