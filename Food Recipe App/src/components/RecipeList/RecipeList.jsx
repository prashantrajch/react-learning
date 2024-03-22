import { Link } from "react-router-dom";
export default function RecipeList({ item }) {
  // console.log(item);
  return (
    <div className="flex gap-5 flex-col w-80 overflow-hidden p-5 shadow-xl border-2 rounded-2xl border-white bg-white/75">
      <div className="h-40 flex rounded-xl overflow-hidden ">
        <img
          src={item?.image_url}
          alt={item.publisher}
          className="block w-full"
        />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font-medium">
          {item.publisher}{" "}
        </span>
        <h2 className="text-2xl font-bold turncate text-black">{item.title}</h2>
        <Link
          to={`/details/${item.id}`}
          className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
