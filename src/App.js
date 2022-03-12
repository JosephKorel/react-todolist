import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import "./App.css";
import Main from "./Components/main";

function backgroundChange() {
  const body = document.querySelector("body");
  body.classList.toggle("body");

  const datetext = document.getElementById("date");
  datetext.classList.toggle("dataa");

  const title = document.getElementById("h1");
  title.classList.toggle("h1");

  const button = document.getElementsByClassName("submit-button");
  button[0].classList.toggle("button");
}

function TodayDate() {
  let today = new Date();
  let date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  return <h1 id="date">{date}</h1>;
}

function ToggleSwitch() {
  return (
    <div className="navbar">
      <div className="toggle">
        <img src="./sun.png" alt="claro"></img>
        <label className="switch">
          <input type="checkbox" onClick={backgroundChange} />
          <span className="slider round"></span>
        </label>
        <img src="./moon.png" alt="escuro" width="35px"></img>
      </div>
      <TodayDate />
    </div>
  );
}

function App() {
  return (
    <div>
      <ToggleSwitch></ToggleSwitch>
      <Main></Main>
    </div>
  );
}

export default App;
