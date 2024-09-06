let isGridOn = false;
const gridBorderButton = document.querySelector(".gridBorderButton");

gridBorderButton.addEventListener("mousedown", () => {
  if (isGridOn === false) {
    isGridOn = true;
    gridBorderButton.setAttribute(
      "style",
      "background-color: #4caf50; color: white; border: 2px solid #4caf50;"
    );
    toggleBorder();
  } else if (isGridOn === true) {
    isGridOn = false;
    gridBorderButton.setAttribute(
      "style",
      "background-color: #f0f0f0; color: #333; border: 2px solid #ccc"
    );
    toggleBorder();
  }
});

let borderColor = "#dcdcdc";
const borderColorButton = document.querySelector(".borderColorButton");
const borderColorInput = document.querySelector("#borderColorInput");

borderColorButton.addEventListener("click", () => {
  borderColorInput.click();
});

borderColorInput.addEventListener("change", (e) => {
  borderColor = e.target.value;
  toggleBorder();
  borderColorButton.setAttribute(
    "style",
    "background-color: " + borderColor + "; color: white;"
  );
});

let penColor = "#006ACC";
const penColorButton = document.querySelector(".penColorButton");
const penColorInput = document.querySelector("#penColorInput");

penColorButton.addEventListener("click", () => {
  penColorInput.click();
});

penColorInput.addEventListener("change", (e) => {
  penColor = e.target.value;
  sketch();
  penColorButton.setAttribute(
    "style",
    "background-color: " + penColor + "; color: white;"
  );
});

let penMode = "mouseenter";
const penModeButton = document.querySelector(".penModeButton");
penModeButton.addEventListener("mousedown", togglePenMode);
function togglePenMode() {
  if (penMode === "mouseenter") {
    penMode = "click";
    penModeButton.setAttribute(
      "style",
      "background-color: #4caf50; color: white; border: 2px solid #4caf50;"
    );
    sketch();
  } else if (penMode === "click") {
    penMode = "mouseenter";
    penModeButton.setAttribute(
      "style",
      "background-color: #f0f0f0; color: #333; border: 2px solid #ccc"
    );
    sketch();
  }
}

const gridContainer = document.querySelector("#gridContainer");
const inputGridNumber = document.querySelector("#inputGridNumber");
const rangeSliderValue = document.querySelector(".rangeSliderValue");

const containerSize = 960;
const gridNumber = Number(inputGridNumber.value);
gridContainer.style.width = containerSize + "px";
gridContainer.style.height = containerSize + "px";

function createGrids(num) {
  const divSize = containerSize / num;
  for (let i = 0; i < num * num; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grids");
    grid.style.width = divSize + "px";
    grid.style.height = divSize + "px";
    gridContainer.appendChild(grid);
  }
  toggleBorder();
  sketch();
}

function resetGrids() {
  gridContainer.textContent = "";
}

inputGridNumber.addEventListener("input", () => {
  rangeSliderValue.textContent = inputGridNumber.value;
  resetGrids();
  const gridNumber = Number(inputGridNumber.value);
  createGrids(gridNumber);
  toggleBorder();
});

function toggleBorder(color = borderColor) {
  if (isGridOn === true) {
    for (const child of gridContainer.children) {
      child.style.border = "1px solid " + color;
    }
  } else {
    for (const child of gridContainer.children) {
      child.style.border = "none";
    }
  }
}

function sketch(mode = penMode, pen = penColor) {
  const grids = document.querySelectorAll(".grids");

  // Remove existing event listeners by replacing grid elements with clones
  grids.forEach((grid) => {
    grid.replaceWith(grid.cloneNode(true)); // This removes all current listeners
  });

  // Re-query grids after cloning, as they are technically new elements
  const updatedGrids = document.querySelectorAll(".grids");

  // Add event listeners based on the current mode
  updatedGrids.forEach((grid) => {
    grid.addEventListener(mode, (e) => {
      e.target.style.backgroundColor = pen;
    });
  });
}

function resetSketch() {
  const grids = document.querySelectorAll(".grids");
  grids.forEach((grid) => {
    grid.style.backgroundColor = "#f9f9f9";
  });
}

document
  .querySelector(".resetSketchButton")
  .addEventListener("click", resetSketch);

createGrids(gridNumber);
