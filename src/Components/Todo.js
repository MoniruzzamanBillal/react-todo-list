import "./Todo.css";

import React, { useState } from "react";
import List from "./List";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [liItems, setItems] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState("");

  const onchange = (e) => {
    setInputValue(e.target.value);
  };

  const onEditChange = (e) => {
    setEditText(e.target.value);
  };

  const addClick = () => {
    let itemsObj = {
      id: Math.random(),
      value: inputValue,
    };

    let prevArray = [...liItems];
    prevArray.push(itemsObj);

    prevArray.sort((a, b) => {
      if (a.value < b.value) {
        return -1;
      } else if (a.value > b.value) {
        return 1;
      } else {
        return 0;
      }
    });

    setItems(prevArray);
    setInputValue("");
  };

  const del = (id) => {
    const newItems = liItems.filter((ele) => {
      if (ele.id != id) {
        return ele;
      }
    });

    setItems(newItems);
  };

  const editClick = (id) => {
    console.log("Edit button");
    console.log(id);
    setEditTodo(id);
  };

  const updateEdit = (id) => {
    console.log("Update button click");
    console.log(id);

    const editItem = liItems.filter((ele) => {
      if (ele.id == id) {
        ele.value = editText;
      }
      return ele;
    });

    editItem.sort((a, b) => {
      if (a.value < b.value) {
        return -1;
      } else if (a.value > b.value) {
        return 1;
      } else {
        return 0;
      }
    });

    setItems(editItem);
    setEditTodo(null);

    setEditText("");
  };

  return (
    <>
      <div className="container">
        <div className="inpField">
          <div className="input">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your list"
              value={inputValue}
              onChange={onchange}
            />
          </div>

          <div className="button">
            <button
              type="button"
              onClick={addClick}
              className="btn btn-warning"
            >
              Add list
            </button>
          </div>
        </div>

        <div className="list">
          {liItems.map((ele) => {
            return (
              // <List
              //   key={ele.id}
              //   id={ele.id}
              //   value={ele.value}
              //   del={del}
              //   editClick={editClick}
              // />

              <div className="liItems" key={ele.id}>
                {ele.id === editTodo ? (
                  <input
                    type="text"
                    className="form-control"
                    f
                    placeholder="Enter your list"
                    value={editText}
                    onChange={onEditChange}
                  />
                ) : (
                  <p>{ele.value}</p>
                )}

                <div className="btnGroup">
                  <button
                    type="button"
                    onClick={() => {
                      del(ele.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>

                  {ele.id === editTodo ? (
                    <button
                      type="button"
                      className="btn btn-danger updateEditlist"
                      onClick={() => {
                        updateEdit(editTodo);
                      }}
                    >
                      update
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-danger editButton"
                      onClick={() => {
                        editClick(ele.id);
                      }}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
