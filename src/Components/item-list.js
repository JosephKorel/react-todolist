import React from "react";
import TaskLi from "./task-li";

function ItemList(props) {
  return (
    <ul>
      {props.itemli.map((item) => (
        <TaskLi item={item} check={props.check} delete={props.delete}></TaskLi>
      ))}
    </ul>
  );
}

export default ItemList;
