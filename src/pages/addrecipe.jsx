
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import RecipeForm from "../components/recipeform";
import { useRecipes } from "../context/recipecontext";

function AddRecipe() {
  const { addRecipe } = useRecipes();
  const navigate = useNavigate();

  const handleAddRecipe = (recipe) => {
    addRecipe(recipe);
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <main className="form-page">
        <div className="form-heading">
          <p className="eyebrow">SHARE SOMETHING DELICIOUS</p>
          <h1>Add a <span>recipe.</span></h1>
          <p>
            Every great meal starts with a recipe worth keeping.
          </p>
        </div>

        <RecipeForm onSubmit={handleAddRecipe} />
      </main>
    </>
  );
}

export default AddRecipe;
