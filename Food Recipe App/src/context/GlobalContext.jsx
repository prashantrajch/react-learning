import { func } from "prop-types";
import { createContext, useState } from "react";

export const GlobalContext = createContext(null);


export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading,setLoading]=useState(false);
  const[recipeList,setRecipeList] = useState(null);

  async function handleSearchSubmit(ev){
    ev.preventDefault();

    try{
      setLoading(true);
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=7fd4c769-c066-4b10-b7ed-b00716230a44`);
      const result = await response.json();
      if(result.data){
        setRecipeList(result.data.recipes)
        setSearchParam('');
        setLoading(false);
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <GlobalContext.Provider value={{recipeList,loading, searchParam, setSearchParam,handleSearchSubmit}}>
      {children}
    </GlobalContext.Provider>
  );
}
