"use client";

import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function WeekTenPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const loadItems = async () => {
    if (user && user.uid) {
      const itemsList = await getItems(user.uid);
      setItems(itemsList);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (user && user.uid) {
      const itemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { id: itemId, ...newItem }]);
    }
  };

  const handleItemSelect = (selectedItem) => {
    const cleanedName = selectedItem.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
        ""
      )
      .trim();
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return null;
  }

  return (
    <main className="bg-slate-950 p-4 flex">
      <div className="flex-1">
        <h1 className="font-bold text-3xl text-white m-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1 ml-4 text-white">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}
