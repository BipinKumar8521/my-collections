import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/CollectionDetails.css";

export default function CollectionDetails() {
  const [collection, setCollection] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    const localCollections = localStorage.getItem("collections");
    if (localCollections) {
      const collections = JSON.parse(localCollections);
      setCollection(
        collections.filter((collection) => collection.id === id)[0]
      );
    }
  }, []);

  useEffect(() => {
    console.log(collection);
  }, [collection]);

  return (
    <div className="collection-details">
      <h1>{collection.name}</h1>
      <p>{collection.description}</p>
    </div>
  );
}
