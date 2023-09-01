import React, { useState } from "react";
import { UniqueId } from "../tools/RandomGenerator";

export default function CollectionForm({ addCollection }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const add = () => {
    if (!name || !description) {
      alert("Please fill all the fields");
      return;
    }
    const collection = {
      name,
      description,
      id: UniqueId(),
    };
    addCollection(collection);
    setName("");
    setDescription("");
  };

  return (
    <div className="add-coll-form">
      <input
        type="text"
        placeholder="Collection Name"
        onChange={(e) => setName(e.target.value)}
      />
      <select
        name="Category"
        id="Category"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      >
        <option value="">--Select Category--</option>
        <option value="Websites">Websites</option>
        <option value="Passwords">Passwords</option>
        <option value="Notes">Notes</option>
      </select>
      <button onClick={add}>Add</button>
    </div>
  );
}
