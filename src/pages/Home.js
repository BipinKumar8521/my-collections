import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import Collection from "../components/Collection";
import CollectionForm from "../components/CollectionForm";
import { RandomString } from "../tools/RandomGenerator";
// import { encrypt, decrypt } from "n-krypta";

export default function Home() {
  const [collections, setCollections] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // const key = "my-secret-key";
  // const encrypted = encrypt("Hello World!", key);
  // const decrypted = decrypt(encrypted, key);

  useEffect(() => {
    console.log(collections);
  }, [collections]);

  const addCollection = (collection) => {
    setCollections([...collections, collection]);
    setShowForm(false);
  };

  const removeCollection = (id) => {
    const newCollections = collections.filter((collection) => {
      return collection.id !== id;
    });
    setCollections(newCollections);
  };

  return (
    <div className="home">
      <h1>My Collections</h1>
      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close" : "Add Collection"}
      </button>
      {showForm && <CollectionForm addCollection={addCollection} />}
      <div>
        {collections && collections.length > 0 ? (
          <div className="collection-wrap">
            {collections.map((collection, index) => (
              <div className="collection" key={index}>
                <Collection
                  name={collection.name}
                  description={collection.description}
                  id={collection.id}
                  removeCollection={removeCollection}
                />
              </div>
            ))}
          </div>
        ) : (
          <h3 style={{ textAlign: "center", marginTop: "3rem" }}>
            No collections yet
          </h3>
        )}
      </div>
    </div>
  );
}
