
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { RecipeProvider } from "./context/recipecontext";

import Home from "./pages/home";
import AddRecipe from "./pages/addrecipe";
import Favorites from "./pages/favorites";
import RecipeDetails from "./pages/recipedetails";

import "./App.css";

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/favorites" element={<Favorites />} />

          <Route path="/add-recipe" element={<AddRecipe />} />

          <Route path="/recipe/:id" element={<RecipeDetails />} />

          <Route
            path="*"
            element={
              <div className="simple-page">
                <h1>404 - Page not found</h1>
                <a href="/">Go Home</a>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
