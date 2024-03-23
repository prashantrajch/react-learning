import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl tracking-wide uppercase ">
              React Redux shopping cart
            </h1>
          </div>
        </Link>
        <ul className="flex item-center list-none space-x-6 text-gray-800 font-semibold mr-5">
          <Link to={"/"}>
            <li className="cursor-pointer">Home</li>
          </Link>
          <li className="cursor-pointer">
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
