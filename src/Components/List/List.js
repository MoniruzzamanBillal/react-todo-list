import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../Todo/Todo";
import "./List.css";

export default function List(props) {
  const { editText, editTodo, liItems, clsName, setClsName, setItems } =
    useContext(listContext);

  const [checkBox, setCheckBox] = useState(false);
  const [has, notHas] = useState("notHas");

  function setCheckFun(e) {
    let st = e.target.checked;
    let id = e.target.id;

    setCheckBox(st);
  }

  function ajaira(id) {
    let nl = liItems.map((ele) => {
      if (ele.id === id) {
        if (checkBox) {
          ele.chk = true;
          // ele.value = "true";
        } else {
          ele.chk = false;
          // ele.value = "false";
        }
      }
      return ele;
    });

    console.log(checkBox);
    console.log(nl);
    setItems(nl);

    let a = nl.map((ele) => {
      if (ele.id === id) {
        if (ele.chk) {
          notHas("notHas");
        } else {
          console.log("FAlse");
          notHas("has");
        }
      }
    });
  }

  return (
    <>
      {props.ele.chk ? (
        <div className={`liItems  `} key={props.id}>
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
              <input
                className="check"
                id={props.id}
                chk={props.ele.chk}
                type="checkbox"
                checked={checkBox}
                onChange={setCheckFun}
                onClick={() => {
                  ajaira(props.id);
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
      ) : (
        <div className={`liItems has `} key={props.id}>
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
              {/* <input
                className="check"
                id={props.id}
                
                chk={props.ele.chk}
                type="checkbox"
                checked={checkBox}
                onChange={setCheckFun}
                onClick={() => {
                  ajaira(props.id);
                }}
              /> */}

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

            {/* {props.id === editTodo ? (
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
            )} */}
          </div>
        </div>
      )}
    </>
  );
}
