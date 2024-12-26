import React, { useState } from "react";

function Cook_now(){
    const[ingredients,setIngredients]=useState('');
    const[cuisine,setCuisine]=useState('');
    const[dietaryRestrictions,setDietaryRestrictions]=useState('');
    const[recipe,setRecipe]=useState('');

    const createRecipe= async ()=>{
        try {
            const response = await fetch (`http://localhost:8080/recipe?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrictions}`);
            const data=await response.text();
            console.log(data);
            setRecipe(data);
        } catch (error) {
            console.error("Error generating recipe:", error);
        }
    };
    return (
        <div>
            <h2>Create Your Recipe</h2>
            <input type="text" 
                        value={ingredients}
                        onChange={(e)=>setIngredients(e.target.value)}
                        placeholder="Enter Ingredients(comma(,) separated)"/>
            <input type="text" 
                        value={cuisine}
                        onChange={(e)=>setCuisine(e.target.value)}
                        placeholder="Enter Preferred Cuisine"/>
            <input type="text" 
                        value={dietaryRestrictions}
                        onChange={(e)=>setDietaryRestrictions(e.target.value)}
                        placeholder="Enter dietary restrictions if any"/>
            <button onClick={createRecipe}>Generate Recipe</button>

            <div className="output">
                <pre className="recipe-text"> {recipe}</pre>
            </div>
        </div>
    );
}

export default Cook_now;