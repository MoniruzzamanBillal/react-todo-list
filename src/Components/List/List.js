import React, { useContext } from "react";
import { listContext } from "../Todo/Todo";
import "./List.css";

export default function List(props) {
  const { editText, editTodo } = useContext(listContext);
  return (
    <>
      <div className="liItems" key={props.id}>
        {props.id === editTodo ? (
          <input
            type="text"
            className="form-control editForm"
            f
            placeholder="Enter your list"
            value={editText}
            onChange={props.onEditChange}
          />
        ) : (
          <p>{props.value}</p>
        )}

        <div className="btnGroup">
          <button
            type="button"
            onClick={() => {
              props.del(props.id);
            }}
            className="btn btn-danger delete grp"
          >
            Delete
          </button>

          {props.id === editTodo ? (
            <button
              type="button"
              className="btn btn-danger update grp"
              onClick={() => {
                props.updateEdit(editTodo);
              }}
            >
              update
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-danger edit grp"
              onClick={() => {
                props.editClick(props.id);
              }}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </>
  );
}
