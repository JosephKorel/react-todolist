import React, { useEffect, useState } from "react";
import ItemList from "./item-list";
import TaskObject from "./task-object";
import InputForm from "./input-form";

function Main() {
  const [itemli, setItemli] = useState([]);

  useEffect(() => {
    let savedTask = JSON.parse(localStorage.getItem("savedItem"));
    if (savedTask) {
      setItemli(savedTask);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedItem", JSON.stringify(itemli));
  }, [itemli]);

  function onAddItem(item) {
    let task = new TaskObject(item);
    setItemli([...itemli, task]);
  }

  function deleteItem(item) {
    let filteredTask = itemli.filter((tasks) => tasks.id != item.id);

    setItemli(filteredTask);
  }

  function checkItem(item) {
    let filteredTask = itemli.map((tasks) => {
      if (tasks.id == item.id) {
        tasks.done = !tasks.done;
      }
      return tasks;
    });
    setItemli(filteredTask);
  }

  return (
    <div>
      <header>
        <h1 id="h1">Minhas tarefas</h1>
        <InputForm onAddItem={onAddItem}></InputForm>
      </header>
      <main>
        <ItemList
          itemli={itemli}
          delete={deleteItem}
          check={checkItem}
        ></ItemList>
      </main>
    </div>
  );
}

export default Main;
