
import { useState } from "react";
import Navbar from "../components/navbar";
import RecipeCard from "../components/recipecard";
import { useRecipes } from "../context/recipecontext";


function Home() {
  const { recipes } = useRecipes();

  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const query = search.toLowerCase();

    return (
      recipe.title.toLowerCase().includes(query) ||
      recipe.category.toLowerCase().includes(query) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(query)
      )
    );
  });

  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">
              ● YOUR LITTLE KITCHEN COMPANION
            </p>

            <h1>
              Good food.
              <br />
              <span>Good mood.</span>
            </h1>

            <p className="hero-description">
              Keep your favorite recipes close, discover your next
              meal, and make every day a little more delicious.
            </p>

            <a href="#explore" className="hero-btn">
              Explore recipes →
            </a>
          </div>

         
        </section>

        <section className="explore-section" id="explore">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR PERSONAL COLLECTION</p>
              <h2>Recipes to make <span>again.</span></h2>
              <p>
                The recipes you have saved for another delicious day.
              </p>
            </div>
          </div>

          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search recipes or ingredients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="recipe-grid">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))
            ) : (
              <p className="no-recipes">
                No recipes found. Try another search!
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
