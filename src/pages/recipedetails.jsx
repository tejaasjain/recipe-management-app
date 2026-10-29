
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { useRecipes } from "../context/recipecontext";

function RecipeDetails() {
  const { id } = useParams();
  const { recipes, toggleFavorite, deleteRecipe } = useRecipes();

  const recipe = recipes.find((item) => item.id === Number(id));

  if (!recipe) {
    return (
      <>
        <Navbar />
        <main className="simple-page">
          <h1>Recipe not found!</h1>
          <Link to="/">Back to Explore</Link>
        </main>
      </>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipe.id);
      window.location.href = "/";
    }
  };

  return (
    <>
      <Navbar />

      <main className="details-page">
        <Link to="/" className="back-link">
          ← Back to Explore
        </Link>

        <div className="details-layout">
          <div className="details-image">
            <img src={recipe.image} alt={recipe.title} />
          </div>

          <div className="details-content">
            <p className="eyebrow">{recipe.category}</p>

            <h1>{recipe.title}</h1>

            <p className="details-description">
              {recipe.description}
            </p>

            <div className="details-meta">
              <span>◷ {recipe.time}</span>
              <span>♧ {recipe.servings} servings</span>
            </div>

            <button
              className="favorite-detail-btn"
              onClick={() => toggleFavorite(recipe.id)}
            >
              {recipe.favorite
                ? "♥ Remove from favorites"
                : "♡ Add to favorites"}
            </button>

            <button className="delete-recipe-btn" onClick={handleDelete}>
              Delete recipe
            </button>
          </div>
        </div>

        <div className="recipe-instructions">
          <div>
            <h2>Ingredients</h2>

            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Instructions</h2>

            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </main>
    </>
  );
}

export default RecipeDetails;
