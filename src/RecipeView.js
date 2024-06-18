import React from "react";

function RecipeView({recipe, deleteRecipe, key}) {

    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>
                <img src={recipe.photo} alt={recipe.name}/>
            </td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td>
                <button onClick={deleteRecipe} type="button" name="delete">Delete</button>
            </td>
        </tr>
    )
}

export default RecipeView;