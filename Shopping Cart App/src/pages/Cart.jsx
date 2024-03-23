import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "../components/CartCard";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const cart = useSelector((state) => state.cart);
  console.log(cart);
  console.log(totalCart);

  useEffect(() => {
    setTotalCart(cart.reduce((acclu, curr) => acclu + curr.price, 0));
  }, [cart]);

  return (
    <>
      {cart != "" ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto ">
            <div className="flex flex-col justify-center items-center p-3">
                {
                    cart.map((cartItem) => <CartCard cartItem={cartItem} />)
                }
            </div>
            <div>
                <div className="flex flex-col justify-center items-center p-5 space-y-5 mt-14">
                    <h1 className="font-bold text-lg text-red-800">Your Cart Summary</h1>
                    <p>
                        <span className="text-gray-800 font-bol">Total Item</span>
                        <span>: {cart.length}</span>
                    </p>
                    <p>
                    <span className="text-gray-800 font-bol">Total Amount</span>
                        <span>: {totalCart}</span>
                    </p>
                </div>
            </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl mb-2">Your Cart is empty..!</h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg p-2 px-4 font-bold">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
