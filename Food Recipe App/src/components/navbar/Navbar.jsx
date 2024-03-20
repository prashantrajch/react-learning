import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

export default function Navbar() {

  const{searchParam, setSearchParam,handleSearchSubmit} = useContext(GlobalContext)

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}>Food Recipe</NavLink>
      </h2>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-lg lg:w-96 shadow-lg outline-none shadow-blue-300 focus:shadow-blue-500"
          value={searchParam}
          onChange={(ev) => setSearchParam(ev.target.value)}
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black font-medium hover:text-blue-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favourites"}
            className="text-black font-medium hover:text-blue-700 duration-300"
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
