
import { createContext, useContext, useEffect, useState } from "react";

const RecipeContext = createContext();

const initialRecipes = [
  {
    id: 1,
    title: "Fresh Garden Salad",
    category: "Healthy",
    time: "15 min",
    servings: 2,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    description: "A refreshing salad packed with fresh vegetables.",
    ingredients: [
      "2 cups lettuce",
      "1 cucumber",
      "1 tomato",
      "1 avocado",
      "Olive oil",
      "Salt and pepper",
    ],
    instructions: [
      "Wash and chop all vegetables.",
      "Add the vegetables to a large bowl.",
      "Drizzle with olive oil.",
      "Season with salt and pepper.",
      "Mix well and serve fresh.",
    ],
    favorite: false,
  },
  {
    id: 2,
    title: "Creamy Pasta",
    category: "Italian",
    time: "25 min",
    servings: 2,
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
    description: "Delicious creamy pasta for a comforting meal.",
    ingredients: [
      "200g pasta",
      "1 cup cream",
      "2 garlic cloves",
      "Parmesan cheese",
      "Salt and pepper",
    ],
    instructions: [
      "Boil pasta until cooked.",
      "Saute garlic in a pan.",
      "Add cream and cheese.",
      "Mix in the pasta.",
      "Serve warm.",
    ],
    favorite: false,
  },
  {
    id: 3,
    title: "Berry Pancakes",
    category: "Breakfast",
    time: "20 min",
    servings: 2,
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    description: "Fluffy pancakes topped with fresh berries.",
    ingredients: [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "1 tbsp sugar",
      "Fresh berries",
    ],
    instructions: [
      "Mix flour, egg, milk, and sugar.",
      "Heat a pan.",
      "Pour the batter into small circles.",
      "Cook both sides until golden.",
      "Serve with fresh berries.",
    ],
    favorite: false,
  },
];

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem("recipes");

    return saved ? JSON.parse(saved) : initialRecipes;
  });

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes((prev) => [
      {
        ...recipe,
        id: Date.now(),
        favorite: false,
      },
      ...prev,
    ]);
  };

  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  const toggleFavorite = (id) => {
    setRecipes((prev) =>
      prev.map((recipe) =>
        recipe.id === id
          ? { ...recipe, favorite: !recipe.favorite }
          : recipe
      )
    );
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, addRecipe, deleteRecipe, toggleFavorite }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}
