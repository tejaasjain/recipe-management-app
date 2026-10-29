import Navbar from "../components/navbar";
import RecipeCard from "../components/recipecard";
import { useRecipes } from "../context/recipecontext";

function Favorites() {
  const { recipes } = useRecipes();

  const favorites = recipes.filter(
    (recipe) => recipe.favorite
  );

  return (
    <>
      <Navbar />

      <main className="explore-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              YOUR LITTLE COLLECTION
            </p>

            <h2>
              Made with <span>love.</span>
            </h2>

            <p>
              Your favorite recipes, all in one place.
            </p>
          </div>
        </div>

        <div className="recipe-grid">
          {favorites.length > 0 ? (
            favorites.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
              />
            ))
          ) : (
            <div className="no-recipes">
              <h3>No favorites yet ♡</h3>

              <p>
                Save a recipe by clicking its heart icon.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Favorites;
