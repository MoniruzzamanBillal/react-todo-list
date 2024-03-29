import "./Todo.css";

import React, { createContext, useEffect, useState } from "react";
import List from "../List/List";

export const listContext = createContext();

function getStorageItem() {
  let item = localStorage.getItem("liItems");
  if (item) {
    return JSON.parse(item);
  } else {
    return [];
  }
}

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [liItems, setItems] = useState(getStorageItem);
  const [editTodo, setEditTodo] = useState(null);
  const [editText, setEditText] = useState("");
  const [clsName, setClsName] = useState("");

  const onchange = (e) => {
    setInputValue(e.target.value);
  };

  const onEditChange = (e) => {
    setEditText(e.target.value);
  };

  const addClick = () => {
    if (
      inputValue === undefined ||
      inputValue === "" ||
      inputValue?.trim() === ""
    ) {
      alert("You are lazy!!! enter proper value.");
    } else {
      let itemsObj = {
        id: Math.random(),
        value: inputValue,
        chk: true,
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

      let cross = prevArray.filter((ele) => {
        if (!ele.chk) {
          return ele;
        }
      });

      let notCross = prevArray.filter((ele) => {
        if (ele.chk) {
          return ele;
        }
      });

      setItems([...notCross, ...cross]);

      setInputValue("");
    }
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
    setEditTodo(id);
  };

  const updateEdit = (id) => {
    const editItem = liItems.filter((ele) => {
      if (ele.id === id) {
        if (
          editText === undefined ||
          editText === "" ||
          editText?.trim() === ""
        ) {
          alert("You are lazy!!! enter proper value.");
        } else {
          ele.value = editText;
        }
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

    let cross = editItem.filter((ele) => {
      if (!ele.chk) {
        return ele;
      }
    });

    let notCross = editItem.filter((ele) => {
      if (ele.chk) {
        return ele;
      }
    });

    setItems([...notCross, ...cross]);
    setEditTodo(null);
    setEditText("");
  };

  useEffect(() => {
    localStorage.setItem("liItems", JSON.stringify(liItems));
  }, [liItems]);

  return (
    <>
      <listContext.Provider
        value={{
          editText,
          editTodo,
          liItems,
          clsName,
          setItems,
          setClsName,
        }}
      >
        <div className="container">
          <div className="todoContainer">
            <div className="inpField">
              <div className="input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your list"
                  value={inputValue}
                  onChange={onchange}
                  del={del}
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
                  <>
                    <List
                      key={ele.id}
                      id={ele.id}
                      value={ele.value}
                      chk={ele.chk}
                      onEditChange={onEditChange}
                      updateEdit={updateEdit}
                      editClick={editClick}
                      onChange={onchange}
                      del={del}
                      ele={ele}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </listContext.Provider>
    </>
  );
}
