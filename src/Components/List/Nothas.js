import { listContext } from "../Todo/Todo";
import React, { useContext } from "react";
import "./List.css";

export default function Nothas(props) {
  const { editText, editTodo, checkBox } = useContext(listContext);

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
          <div className="msg" key={props.id}>
            <input
              className="check"
              id={props.id}
              chk={props.ele.chk}
              type="checkbox"
              checked={checkBox}
              onChange={props.setCheckFun}
              onClick={() => {
                props.ajaira(props.id);
              }}
            />

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
