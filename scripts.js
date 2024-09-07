let isGridOn = false;
const gridBorderButton = document.querySelector(".gridBorderButton");

function activateButton(anyButton) {
  anyButton.setAttribute(
    "style",
    "background-color: #4caf50; color: white; border: 2px solid #4caf50;"
  );
}

function defaultButton(anyButton) {
  anyButton.setAttribute(
    "style",
    "background-color: #607d8b; color: #white; border: 2px solid #607d8b"
  );
}

function deactivateButton(anyButton) {
  anyButton.setAttribute(
    "style",
    "background-color: #b0b0b0; color: #666666; border: 2px solid #b0b0b0; cursor: not-allowed; opacity: 0.7; "
  );
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function convertToRGBA(color, opacity) {
  let rgba;
  if (color.startsWith("#")) {
    let r = parseInt(color.slice(1, 3), 16);
    let g = parseInt(color.slice(3, 5), 16);
    let b = parseInt(color.slice(5, 7), 16);
    rgba = `rgb(${r}, ${g}, ${b}, ${opacity})`;
  } else if (color.startsWith("rgb")) {
    rgba = color.replace("rgb", "rgba").replace(")", `, ${opacity})`);
  }
  return rgba;
}

gridBorderButton.addEventListener("mousedown", () => {
  if (isGridOn === false) {
    isGridOn = true;
    activateButton(gridBorderButton);
    toggleBorder();
  } else if (isGridOn === true) {
    isGridOn = false;
    defaultButton(gridBorderButton);
    toggleBorder();
  }
});

let borderColor = getRandomColor();
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

let penColor = getRandomColor();
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

let penMode = "mousemove";
const penModeButton = document.querySelector(".penModeButton");
penModeButton.addEventListener("mousedown", togglePenMode);
function togglePenMode() {
  if (penMode === "mousemove") {
    penMode = "click";
    activateButton(penModeButton);
    sketch();
  } else if (penMode === "click") {
    penMode = "mousemove";
    defaultButton(penModeButton);
    sketch();
  }
}

const gridContainer = document.querySelector("#gridContainer");
const inputGridNumber = document.querySelector("#inputGridNumber");
const rangeSliderValue = document.querySelector(".rangeSliderValue");

let isRandomColor = false;
const randomColorButton = document.querySelector(".randomColorButton");
randomColorButton.addEventListener("click", () => {
  if (isRandomColor === false) {
    isRandomColor = true;
    penColorButton.disabled = true;
    deactivateButton(penColorButton);
    activateButton(randomColorButton);
    penColor = getRandomColor();
    sketch();
  } else if (isRandomColor === true) {
    isRandomColor = false;
    penColorButton.disabled = false;
    defaultButton(randomColorButton);
    defaultButton(penColorButton);
    sketch();
  }
});

let isProgressive = false;
const progressiveEffectButton = document.querySelector(
  ".progressiveEffectButton"
);
progressiveEffectButton.addEventListener("mousedown", () => {
  if (isProgressive === false) {
    isProgressive = true;
    isRandomColor = false;
    penColorButton.disabled = false;
    defaultButton(penColorButton);
    activateButton(progressiveEffectButton);
    randomColorButton.disabled = true;
    deactivateButton(randomColorButton);
    sketch();
  } else if (isProgressive === true) {
    isProgressive = false;
    defaultButton(progressiveEffectButton);
    defaultButton(randomColorButton);
    randomColorButton.disabled = false;
    sketch();
  }
});

let isErase = false;
const eraserButton = document.querySelector(".eraserButton");
eraserButton.addEventListener("mousedown", () => {
  if (isErase === false) {
    isErase = true;
    isRandomColor = false;
    isProgressive = false;
    activateButton(eraserButton);

    randomColorButton.disabled = true;
    progressiveEffectButton.disabled = true;
    penColorButton.disabled = true;

    deactivateButton(randomColorButton);
    deactivateButton(progressiveEffectButton);
    deactivateButton(penColorButton);

    penColor = "#f9f9f9";
    sketch();
  } else if (isErase === true) {
    isErase = false;

    randomColorButton.disabled = false;
    progressiveEffectButton.disabled = false;
    penColorButton.disabled = false;

    defaultButton(eraserButton);
    defaultButton(randomColorButton);
    defaultButton(progressiveEffectButton);
    defaultButton(penColorButton);

    penColor = getRandomColor();
    sketch();
  }
});

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
  let opacityValue = 0.1;
  // Remove existing event listeners by replacing grid elements with clones
  grids.forEach((grid) => {
    grid.replaceWith(grid.cloneNode(true)); // This removes all current listeners
  });

  // Re-query grids after cloning, as they are technically new elements
  const updatedGrids = document.querySelectorAll(".grids");

  // Add event listeners based on the current mode
  updatedGrids.forEach((grid) => {
    grid.addEventListener(mode, (e) => {
      if (isRandomColor) {
        pen = getRandomColor();
        e.target.style.backgroundColor = pen;
      } else if (isProgressive) {
        e.target.style.backgroundColor = convertToRGBA(pen, opacityValue);
        if (opacityValue < 1) {
          opacityValue += 1;
        }
      } else {
        e.target.style.backgroundColor = pen;
      }
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
