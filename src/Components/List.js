import React from "react";
import "./List.css";

export default function List(props) {
  return (
    <>
      <div className="liItems" key={props.id}>
        <p>{props.value}</p>
        <div className="btnGroup">
          <button
            type="button"
            onClick={() => {
              props.del(props.id);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.editClick(props.id);
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
