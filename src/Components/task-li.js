import React from "react";

function CheckIcon(props) {
  if (props.done) {
    return <img src="./done 1.png" alt="Concluído" />;
  } else {
    return <img src="./check 1.png" alt="Marcar como concluído" />;
  }
}

function TaskLi(props) {
  return (
    <li
      key={props.item.id}
      className={props.item.done ? "done item taskli" : "item taskli"}
    >
      {props.item.text}
      <div className="buttons">
        <button onClick={() => props.check(props.item)}>
          <CheckIcon done={props.item.done}></CheckIcon>
        </button>
        <button>
          <img
            src="./delete.png"
            alt="Excluir"
            onClick={() => props.delete(props.item)}
          />
        </button>
      </div>
    </li>
  );
}

export default TaskLi;
