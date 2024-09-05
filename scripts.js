const gridContainer = document.querySelector("#gridContainer");
const inputGridNumber = document.querySelector("#inputGridNumber");

const containerSize = 960;
const gridNumber = Number(inputGridNumber.value);
gridContainer.style.width = containerSize + "px";
gridContainer.style.height = containerSize + "px";

function createGrids(num) {
  const divSize = containerSize / num - 2;
  for (let i = 0; i < num * num; i++) {
    let div = document.createElement("div");
    div.classList.add("grids");
    div.style.width = divSize + "px";
    div.style.height = divSize + "px";
    gridContainer.appendChild(div);
  }
}

function resetGrids() {
  gridContainer.textContent = ""
}

inputGridNumber.addEventListener("input", () => {
  resetGrids();
  const gridNumber = Number(inputGridNumber.value);
  createGrids(gridNumber);
});
createGrids(gridNumber);