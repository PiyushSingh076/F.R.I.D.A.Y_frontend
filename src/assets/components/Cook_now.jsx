import React, { useState } from "react";

function Cook_now() {
    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [dietaryRestrictions, setDietaryRestrictions] = useState('');
    const [recipe, setRecipe] = useState('');
    const [loading, setLoading] = useState(false);

    const createRecipe = async () => {
        setLoading(true); // Show loading
        try {
            const response = await fetch(`http://localhost:8080/recipe?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryRestrictions}`);
            const data = await response.text();
            console.log(data);
            setRecipe(data);
        } catch (error) {
            console.error("Error generating recipe:", error);
            setRecipe("An error occurred while generating the recipe.");
        } finally {
            setLoading(false); // Hide loading
        }
    };

    return (
        <div style={{ textAlign: "center" }}> {/* Center all content */}
            <h2>Create Your Recipe</h2>
            <input
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Enter Ingredients (comma-separated)"
                style={{ margin: "10px" }}
            />
            <input
                type="text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Enter Preferred Cuisine"
                style={{ margin: "10px" }}
            />
            <input
                type="text"
                value={dietaryRestrictions}
                onChange={(e) => setDietaryRestrictions(e.target.value)}
                placeholder="Enter dietary restrictions (if any)"
                style={{ margin: "10px" }}
            />
            <button onClick={createRecipe} disabled={loading}>
                {loading ? "Loading..." : "Generate Recipe"}
            </button>

            <div className="output">
                {loading ? (
                    <p style={{ textAlign: "center", margin: "20px 0", fontSize: "18px" }}>
                        Loading...
                    </p>
                ) : (
                    <pre className="recipe-text">{recipe}</pre>
                )}
            </div>
        </div>
    );
}

export default Cook_now;
