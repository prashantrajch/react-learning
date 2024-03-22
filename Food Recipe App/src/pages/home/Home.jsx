import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import RecipeList from "../../components/RecipeList/RecipeList";

export default function Home() {
  const{recipeList,loading} = useContext(GlobalContext);

    return (
      <div className="container py-8 flex m-auto justify-center flex-wrap gap-10">
        {loading? <h2>Data is Loading.....Please Wait.!</h2> :
          recipeList ? recipeList.map((recepieItem) => <RecipeList key={recepieItem.id} item={recepieItem} />) : <p className="lg:text-4xl font-extrabold text-xl text-center text-black">Nothing to show...! Please Search Something</p>
        }
      </div>
    );
  }
  