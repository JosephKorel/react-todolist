import React, { useState } from "react";

function InputForm(props) {
  const [item, setItem] = useState("");

  function inputChange(event) {
    const inputValue = event.target.value;
    setItem(inputValue);
  }

  function addItem(event) {
    event.preventDefault();

    if (item != "") {
      props.onAddItem(item);
      setItem("");
    }
  }
  return (
    <form>
      <input
        type="text"
        onChange={inputChange}
        value={item}
        className="task-input"
      ></input>
      <input
        type="submit"
        onClick={addItem}
        className="submit-button"
        value="Adicionar"
      ></input>
    </form>
  );
}

export default InputForm;
