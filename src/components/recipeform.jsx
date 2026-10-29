
import { useState } from "react";

function RecipeForm({ onSubmit }) {
  const [form, setForm] = useState({
    title: "",
    category: "Breakfast",
    time: "",
    servings: 2,
    image: "",
    description: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...form,
      servings: Number(form.servings),
      ingredients: form.ingredients
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      instructions: form.instructions
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean),
      image:
        form.image ||
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
    });
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <label>Recipe Name</label>
      <input
        name="title"
        placeholder="e.g. Homemade Pizza"
        value={form.title}
        onChange={handleChange}
        required
      />

      <label>Category</label>
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
        <option>Dessert</option>
        <option>Healthy</option>
        <option>Italian</option>
        <option>Other</option>
      </select>

      <div className="form-row">
        <div>
          <label>Cooking Time</label>
          <input
            name="time"
            placeholder="30 min"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Servings</label>
          <input
            type="number"
            name="servings"
            min="1"
            value={form.servings}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <label>Image URL (optional)</label>
      <input
        name="image"
        placeholder="https://example.com/food.jpg"
        value={form.image}
        onChange={handleChange}
      />

      <label>Description</label>
      <textarea
        name="description"
        placeholder="Tell us about your recipe..."
        value={form.description}
        onChange={handleChange}
        required
      />

      <label>Ingredients (one per line)</label>
      <textarea
        name="ingredients"
        placeholder={"2 cups flour\n1 egg\n1 cup milk"}
        value={form.ingredients}
        onChange={handleChange}
        required
      />

      <label>Instructions (one step per line)</label>
      <textarea
        name="instructions"
        placeholder={"Prepare the ingredients\nCook the dish\nServe"}
        value={form.instructions}
        onChange={handleChange}
        required
      />

      <button className="submit-recipe-btn" type="submit">
        Save Recipe
      </button>
    </form>
  );
}

export default RecipeForm;
