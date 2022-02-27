import React from "react";
import useFetch from "react-fetch-hook";

function Recipes() {
    const { isLoading, error, data } = useFetch ("https://api.spoonacular.com/recipes/random?&apiKey=d6c7c93a8a3a43d9a16c1a45b1c0b349");
    const recipeData = data [0];
  
    if (isLoading) return "Loading...";
    if (error) return "Error!";
    
  return <div></div>;
}

export default Recipes;
