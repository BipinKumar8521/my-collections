import React from "react";
import { Link } from "react-router-dom";
import Btn from "../tools/Btn";

export default function Collection({
  name,
  description,
  id,
  removeCollection,
  editCollection,
}) {
  const RemoveCollection = (id) => {
    removeCollection(id);
  };

  const EditCollection = (id) => {
    editCollection(id);
  };

  return (
    <>
      <div>
        <h2 style={{ display: "inline" }}>{name}</h2>
        <i
          title="edit"
          className="fa-solid fa-pencil pencil-icon"
          onClick={(e) => EditCollection(id)}
        ></i>
      </div>

      <p>{description}</p>
      <button
        title="delete"
        className="deleteBtn"
        onClick={() => RemoveCollection(id)}
      >
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button>

      <Btn type="link" title="open" path={`/collection/${id}`}>
        Open
        <i className="fa-solid fa-up-right-from-square"></i>
      </Btn>
    </>
  );
}
