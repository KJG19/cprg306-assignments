"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortItem = [...items].sort((a, b) => {
    if (a[sortBy] > b[sortBy]) return 1;
    if (a[sortBy] < b[sortBy]) return -1;
    return 0;
  });

  return (
    <div>
      <div>
        <label className="text-white m-2">Sort by:</label>
        <button
          className={`p-1 m-2 w-28 ${
            sortBy === "name" ? "bg-red-700" : "bg-red-500"
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`p-1 m-2 w-28 ${
            sortBy === "category" ? "bg-red-700" : "bg-red-500"
          }`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>
      <div>
        {sortItem.map((item) => (
          <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
      </div>
    </div>
  );
}
