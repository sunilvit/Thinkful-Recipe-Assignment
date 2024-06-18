import React, {useState} from "react";

function RecipeCreate({createRecipe}) {
    const initialState = {
        name: '',
        cuisine: '',
        photo: '',
        ingredients: '',
        preparation: '',
    }
    const [newRecipe, setNewRecipe] = useState(initialState);
    const handleChange = (e) =>
        setNewRecipe((current) =>
            (
                {...current, [e.target.name]: e.target.value}
            )
        );
    const handleSubmit = (e) => {
        e.preventDefault();
        createRecipe(newRecipe);
        setNewRecipe(initialState)
    }
    return (
        <form name="create" onSubmit={handleSubmit}>
            <table>
                <tbody>
                <tr>
                    <td>
                        <input name="name" type="text" id="name" required placeholder="Name"
                               value={newRecipe.name} onChange={handleChange} className="set-width"/>
                    </td>
                    <td>
                        <input name="cuisine" type="text" id="cuisine" required placeholder="Cuisine"
                               value={newRecipe.cuisine} onChange={handleChange} className="set-width"/>
                    </td>
                    <td>
                        <input name="photo" type="url" id="photo" required placeholder="Photo"
                               value={newRecipe.photo} onChange={handleChange} className="set-width"/>
                    </td>
                    <td>
                        <textarea name="ingredients" type="text" id="ingredients" required placeholder="Ingredients"
                                  value={newRecipe.ingredients} onChange={handleChange}
                                  className="set-width" rows="4"/>
                    </td>
                    <td>
                        <textarea name="preparation" type="text" id="preparation" required placeholder="Preparation"
                                  value={newRecipe.preparation} onChange={handleChange}
                                  className="set-width" rows="4"/>
                    </td>
                    <td>
                        <button type="submit">Create</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </form>
    );
}

export default RecipeCreate;
