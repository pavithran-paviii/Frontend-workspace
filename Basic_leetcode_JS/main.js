import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const app = document.querySelector("#app");

const questions1 = [
  { heading: "1. Two Sum", acceptance: "49.9%", difficulty: "Easy" },
  { heading: "2. Four Sum", acceptance: "79.9%", difficulty: "Hard" },
  { heading: "3. Six Sum", acceptance: "46%", difficulty: "Medium" },
  { heading: "4. Eight Sum", acceptance: "99.9%", difficulty: "Easy" },
];

const questions2 = [
  { heading: "5. Two Sum", acceptance: "49.9%", difficulty: "Easy" },
  { heading: "6. Four Sum", acceptance: "79.9%", difficulty: "Hard" },
  { heading: "7. Six Sum", acceptance: "46%", difficulty: "Medium" },
  { heading: "8. Eight Sum", acceptance: "99.9%", difficulty: "Easy" },
];

document.getElementById("render1").addEventListener("click", renderElements1);
document.getElementById("render2").addEventListener("click", renderElements2);

function renderElements1() {
  app.innerHTML = "";
  renderElements(questions1);
}
function renderElements2() {
  app.innerHTML = "";
  renderElements(questions2);
}

function renderElements(inputGiven) {
  const table = document.createElement("table");

  for (let i = 0; i < inputGiven?.length; i++) {
    const tableRow = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = inputGiven[i].heading;

    const td2 = document.createElement("td");
    td2.innerText = inputGiven[i].acceptance;

    const td3 = document.createElement("td");
    td3.innerText = inputGiven[i].difficulty;

    tableRow.appendChild(td1);
    tableRow.appendChild(td2);
    tableRow.appendChild(td3);

    table.appendChild(tableRow);
  }
  app.appendChild(table);
}
