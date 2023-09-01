import React from "react";
import { Link } from "react-router-dom";

export default function Collection({
  name,
  description,
  id,
  removeCollection,
}) {
  const RemoveCollection = (id) => {
    removeCollection(id);
  };
  return (
    <>
      <div>
        <h2 style={{ display: "inline" }}>{name}</h2>
        <i className="fa-solid fa-pencil pencil-icon"></i>
      </div>

      <p>{description}</p>
      <button className="deleteBtn" onClick={() => RemoveCollection(id)}>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>

      <Link to={`/collection/:${id}`}>
        <button>
          Open
          <i className="fa-solid fa-up-right-from-square"></i>
        </button>
      </Link>
    </>
  );
}
