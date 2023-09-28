import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import Collection from "../components/Collection";
import CollectionForm from "../components/CollectionForm";
import { RandomString } from "../tools/RandomGenerator";
import Btn from "../tools/Btn";
// import { encrypt, decrypt } from "n-krypta";

export default function Home() {
  const [collections, setCollections] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentCollection, setCurrentCollection] = useState({
    name: "",
    description: "",
    id: "",
  });

  // const key = "my-secret-key";
  // const encrypted = encrypt("Hello World!", key);
  // const decrypted = decrypt(encrypted, key);

  useEffect(() => {
    const localCollections = localStorage.getItem("collections");
    if (localCollections) {
      setCollections(JSON.parse(localCollections));
    }
  }, []);

  const addCollection = (collection) => {
    setCollections([...collections, collection]);
    localStorage.setItem(
      "collections",
      JSON.stringify([...collections, collection])
    );
    setShowForm(false);
  };

  const removeCollection = (id) => {
    const newCollections = collections.filter((collection) => {
      return collection.id !== id;
    });
    setCollections(newCollections);
    localStorage.setItem("collections", JSON.stringify([...newCollections]));
  };

  const editCollection = (id) => {
    const collection = collections.find((collection) => {
      return collection.id === id;
    });
    setCurrentCollection(collection);
    setShowForm(true);
  };

  const updateCollection = (collection) => {
    const newCollections = collections.map((item) => {
      if (item.id === collection.id) {
        return collection;
      }
      return item;
    });
    setCollections(newCollections);
    localStorage.setItem("collections", JSON.stringify([...newCollections]));
    setShowForm(false);
  };

  return (
    <div className="home">
      <h1>My Collections</h1>
      <Btn
        type="button"
        className="add-btn"
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        {showForm ? "Close" : "Add Collection"}
      </Btn>
      <span className={`hide ${showForm ? "show" : ""}`}>
        <CollectionForm
          collection={currentCollection}
          addCollection={addCollection}
          updateCollection={updateCollection}
        />
      </span>
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
                  editCollection={editCollection}
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
