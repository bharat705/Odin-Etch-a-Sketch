let isGridOn = false;

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
    let div = document.createElement("div");
    div.classList.add("grids");
    div.style.width = divSize + "px";
    div.style.height = divSize + "px";
    gridContainer.appendChild(div);
  }
}

function resetGrids() {
  gridContainer.textContent = "";
}

inputGridNumber.addEventListener("input", () => {
  rangeSliderValue.textContent = inputGridNumber.value;
  resetGrids();
  const gridNumber = Number(inputGridNumber.value);
  createGrids(gridNumber);
});

function toggleBorder(color = "#dcdcdc") {
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

const gridBorder = document.querySelector(".gridBorder");
gridBorder.addEventListener("mousedown", () => {
  if (isGridOn === false) {
    isGridOn = true;
    toggleBorder();
  } else if (isGridOn === true) {
    isGridOn = false;
    toggleBorder();
  }
});
