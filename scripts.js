let isGridOn = false;
const gridBorderButton = document.querySelector(".gridBorderButton");

gridBorderButton.addEventListener("mousedown", () => {
  if (isGridOn === false) {
    isGridOn = true;
    toggleBorder();
  } else if (isGridOn === true) {
    isGridOn = false;
    toggleBorder();
  }
});

let gridColor = "#dcdcdc";
const gridColorButton = document.querySelector(".gridColorButton");
const gridColorInput = document.querySelector("#gridColorInput");

gridColorButton.addEventListener("click", () => {
  gridColorInput.click();
});

gridColorInput.addEventListener("change", (e) => {
  gridColor = e.target.value;
  toggleBorder();
  gridColorButton.setAttribute(
    "style",
    "background-color: " + gridColor + "; color: white;"
  );
});

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

function toggleBorder(color = gridColor) {
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

createGrids(gridNumber);

function sketch(mode = "mouseenter", pen = "#006ACC") {
  const grids = document.querySelectorAll(".grids");
  grids.forEach((grid) => {
    grid.addEventListener(mode, (e) => {
      e.target.style.backgroundColor = pen;
    });
  });
}
