"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    let item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);

    alert(`
        Added Items
        Name: ${item.name}
        Quantity: ${item.quantity}
        Category: ${item.category}
        `);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
    >
      <div className="mb-2">
        <input
          type="text"
          placeholder="Item name"
          onChange={handleNameChange}
          value={name}
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          required
        ></input>
      </div>

      <div className="flex justify-between">
        <div className="p-2 m-4 ml-0 bg-white text-black w-44 rounded-lg flex items-end flex-col">
          <div className="flex">
            <div className="mx-16">
              <p>{quantity}</p>
            </div>

            <div className="flex ml-2">
              <button
                type="button"
                className="w-8 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-red-400 focus:ring-opacity-75 mr-1"
                onClick={decrement}
                disabled={quantity === 1}
              >
                -
              </button>

              <button
                type="button"
                className="w-8 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 ring-red-400 disabled:bg-gray-400 focus:ring-opacity-75"
                onClick={increment}
                disabled={quantity === 20}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <select
          onChange={handleCategoryChange}
          value={category}
          className="text-black ml-4 my-4 border-2 border-gray-300 p-2 rounded-lg font-sans"
        >
          <option selected disabled value="">
            {" "}
            Category
          </option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button className="w-full mt-4 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
        +
      </button>
    </form>
  );
}
