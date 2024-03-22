import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

export default function Details() {
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { detailsData,favouritesList, setDetailsData, handleAddToFavourite} = useContext(GlobalContext);

  async function fetchDetailsApi() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const result = await response.json();
      if (result) {
        setDetailsData(result.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchDetailsApi();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading the details....please wait..</p>
      ) : detailsData != null ? (
        <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="row-start-2 lg:row-start-auto">
            <div className="h-96 overflow-hidden rounded-xl group">
              <img
                src={detailsData.recipe.image_url}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm text-cyan-700 font-medium">
              {detailsData.recipe.publisher}
            </span>
            <h3 className="font-bold text-2xl truncate text-black first-letter:uppercase">
              {detailsData.recipe.title}{" "}
            </h3>
            <div>
              <button onClick={() => handleAddToFavourite(detailsData.recipe)} className="bg-black text-white p-3 px-8 rounded-xl text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md">
               {
                favouritesList && favouritesList.findIndex((item) =>  item.id == detailsData.recipe.id) != -1 ? 'Remove from favourites' : 'Add to Favourites'
               }
              </button>
            </div>
            <div>
              <span className="text-2xl font-semibold text-black">
                Ingredients:{" "}
              </span>
              <ul className="flex flex-col  gap-3">
                {detailsData.recipe.ingredients.map((ingredient,ind) => (
                  <li key={ind}>
                    <span className="text-2xl font-semibold text-black">
                      {ingredient.quantity} {ingredient.unit}
                    </span>
                    <span className="text-2xl font-semibold text-black">
                      {ingredient.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
