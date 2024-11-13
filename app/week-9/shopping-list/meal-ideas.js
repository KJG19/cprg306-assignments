"use client";
import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  async function loadMealIdeas() {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  }

  useEffect(() => {
    if (ingredient) {
      console.log("Fetching meal ideas for:", ingredient);
    }
    loadMealIdeas();
  }, [ingredient]);

  return (
    <main className="flex-1 max-w-sm m-2">
      <h1 className="text-xl font-bold text-white">
        Meal Ideas with {ingredient}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {meals.map(({ idMeal, strMeal, strMealThumb }) => (
          <div key={idMeal} className="">
            <img src={strMealThumb} alt={strMeal} className="" />
            <h2 className="">{strMeal}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
