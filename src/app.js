// import "./style.css";

const sketchBoard = document.querySelector(".etch-area");
const gridColor = "green";

// Function to create the grid elements only
function makeGrid(gridArea) {
  for (let i = 0; i < gridArea; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    sketchBoard.appendChild(gridBox);

    // Apply hover effect
    applyHoverEffect(gridBox, gridColor);
  }
}

// Function to apply hover effect on each grid box
function applyHoverEffect(element, color) {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = color;
  });
}

makeGrid(256);

console.log("connected");
