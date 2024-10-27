import "./style.css";

const sketchBoard = document.querySelector(".etch-area");

function makeGrid(gridArea) {
  for (let i = 0; i < gridArea; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    sketchBoard.appendChild(gridBox);
  }
}

makeGrid(256);

console.log("connected");
