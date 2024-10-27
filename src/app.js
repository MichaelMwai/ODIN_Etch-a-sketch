// import "./style.css";

const sketchBoard = document.querySelector(".etch-area");

// Function to create the grid elements only
function makeGrid(gridArea) {
  for (let i = 0; i < gridArea; i++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    sketchBoard.appendChild(gridBox);

    // Apply hover effect
    applyHoverEffect(gridBox);
  }
}

// Function to apply hover effect on each grid box
function applyHoverEffect(element) {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "black";
  });
}

makeGrid(256);

console.log("connected");
