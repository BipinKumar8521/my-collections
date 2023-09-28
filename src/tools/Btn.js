import React from "react";

import { Link } from "react-router-dom";
import "../CSS/Tools.css";

export default function Btn(props) {
  const type = props.type;

  if (type === "href") {
    return (
      <a className={`Button ${props.className}`} href={props.link}>
        {props.children}
      </a>
    );
  }

  if (type === "link") {
    return (
      <Link className={`Button ${props.className}`} to={props.path}>
        {props.children}
      </Link>
    );
  }
  return (
    <button onClick={props.onClick} className={`Button ${props.className}`}>
      {props.children}
    </button>
  );
}
