import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import RecipeList from "../../components/RecipeList/RecipeList";

export default function Favourites() {
  // favouritesList
  const { favouritesList } = useContext(GlobalContext);

  return (
    <div className="container py-8 flex m-auto justify-center flex-wrap gap-10">
      {favouritesList != '' ? (
        favouritesList.map((recepieItem) => (
          <RecipeList key={recepieItem.id} item={recepieItem} />
        ))
      ) : (
        <p className="lg:text-4xl font-extrabold text-xl text-center text-black">
          Nothing is added in favourites....!
        </p>
      )}
    </div>
  );
}
