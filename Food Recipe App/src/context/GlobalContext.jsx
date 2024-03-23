import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState(null);
  const [detailsData, setDetailsData] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);

  const navigate = useNavigate();

  async function handleSearchSubmit(ev) {
    ev.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=7fd4c769-c066-4b10-b7ed-b00716230a44`
      );
      const result = await response.json();
      if (result.data) {
        setRecipeList(result.data.recipes);
        setSearchParam("");
        setLoading(false);
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleAddToFavourite(getCurrentItem) {
    let cpyFavouritesList = [...favouritesList];
    const index = cpyFavouritesList.findIndex(
      (item) => item.id == getCurrentItem.id
    );
    if (index === -1) {
      cpyFavouritesList.push(getCurrentItem);
    } else {
      cpyFavouritesList.splice(index,1);
    }

    setFavouritesList(cpyFavouritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        recipeList,
        loading,
        searchParam,
        detailsData,
        favouritesList,
        setDetailsData,
        setSearchParam,
        handleSearchSubmit,
        handleAddToFavourite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
