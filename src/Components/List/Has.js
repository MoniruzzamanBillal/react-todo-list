import { listContext } from "../Todo/Todo";
import React, { useContext } from "react";
import "./List.css";

export default function Nothas(props) {
  const { editText, editTodo, checkBox } = useContext(listContext);

  return (
    <>
      <div className="liItems has" key={props.id}>
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
          <div className="msg">
            <label htmlFor={props.id}>
              <p>{props.value}</p>
            </label>
          </div>
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
        </div>
      </div>
    </>
  );
}
