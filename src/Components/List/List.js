import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../Todo/Todo";
import "./List.css";
import Nothas from "./Nothas";
import Has from "./Has";

export default function List(props) {
  const { editText, editTodo, liItems, clsName, setClsName, setItems } =
    useContext(listContext);

  const [checkBox, setCheckBox] = useState(false);

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
        } else {
          ele.chk = false;
        }
      }
      return ele;
    });

    let cross = liItems.filter((ele) => {
      if (!ele.chk) {
        return ele;
      }
    });

    let notCross = liItems.filter((ele) => {
      if (ele.chk) {
        return ele;
      }
    });

    setItems([...notCross, ...cross]);
  }

  return (
    <>
      {props.ele.chk ? (
        <Nothas
          key={props.id}
          onChange={props.onEditChange}
          id={props.id}
          chk={props.ele.chk}
          checkBox={checkBox}
          setCheckFun={setCheckFun}
          ajaira={ajaira}
          value={props.value}
          ele={props.ele}
          del={props.del}
          editClick={props.editClick}
          onEditChange={props.onEditChange}
          updateEdit={props.updateEdit}
        />
      ) : (
        <Has
          key={props.id}
          onChange={props.onEditChange}
          id={props.id}
          chk={props.ele.chk}
          checkBox={checkBox}
          setCheckFun={setCheckFun}
          ajaira={ajaira}
          value={props.value}
          ele={props.ele}
          del={props.del}
          editClick={props.editClick}
          onEditChange={props.onEditChange}
          updateEdit={props.updateEdit}
        />
      )}
    </>
  );
}
