import React, { useEffect, useState } from "react";
import { UniqueId } from "../tools/RandomGenerator";

export default function CollectionForm({
  addCollection,
  collection,
  updateCollection,
}) {
  const [name, setName] = useState(collection.name);
  const [description, setDescription] = useState(collection.description);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    console.log(collection);
    setName(collection.name);
    setDescription(collection.description);
    if (collection.name) {
      setIsEdit(true);
    }
  }, [collection]);

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

  const edit = () => {
    if (!name || !description) {
      alert("Please fill all the fields");
      return;
    }
    const newcollection = {
      name,
      description,
      id: collection.id,
    };
    updateCollection(newcollection);
    setName("");
    setDescription("");
  };

  return (
    <div className="add-coll-form">
      <input
        type="text"
        value={name}
        placeholder="Collection Name"
        onChange={(e) => setName(e.target.value)}
      />
      <select
        name="Category"
        id="Category"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      >
        <option value="">--Select Category--</option>
        <option value="Websites">Websites</option>
        <option value="Passwords">Passwords</option>
        <option value="Notes">Notes</option>
      </select>
      {isEdit ? (
        <button onClick={edit}>Update</button>
      ) : (
        <button onClick={add}>Add</button>
      )}
    </div>
  );
}
