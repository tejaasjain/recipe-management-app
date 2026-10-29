
import { Link } from "react-router-dom";
import { useRecipes } from "../context/recipecontext";

function RecipeCard({ recipe }) {
  const { toggleFavorite } = useRecipes();

  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />

        <button
          className={`favorite-btn ${recipe.favorite ? "liked" : ""}`}
          onClick={() => toggleFavorite(recipe.id)}
          aria-label="Toggle favorite"
        >
          {recipe.favorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="recipe-card-content">
        <div className="recipe-meta">
          <span>{recipe.category}</span>
          <span>◷ {recipe.time}</span>
        </div>

        <Link to={`/recipe/${recipe.id}`} className="recipe-title">
          {recipe.title}
        </Link>

        <p>{recipe.description}</p>

        <Link to={`/recipe/${recipe.id}`} className="view-recipe">
          View recipe →
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
