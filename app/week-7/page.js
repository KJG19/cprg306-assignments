"use client";

import NewItem from "../week-7/new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";

export default function WeekSevenPage() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="bg-slate-950">
      <title>Shopping List</title>
      <h1 className="font-bold text-3xl text-white m-2">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
