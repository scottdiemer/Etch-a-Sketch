function makeGrid(numRows, numCols) {
  const container = document.querySelector(".container");
  for (let x = 0; x < numRows; x++) {
    for (let y = 0; y < numCols; y++) {
      let createDiv = document.createElement("div");
      createDiv.classList.add("grid-item");
      container.appendChild(createDiv);
    }
  }
}

makeGrid(16, 16);

const gridItems = document.getElementsByClassName("grid-item");
Array.from(gridItems).forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "black";
  });
});
