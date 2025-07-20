const container = document.querySelector(".container");
const buttonSizeGrid = document.querySelector("#gridSize");
const buttonReset = document.querySelector("#reset")

function changeColor(element) {
    element.style.backgroundColor = "red";
}

let currentSize;

function createGrid(size) {
    container.innerHTML ="";

    const squareSize = 960/size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("squareDivs");
        div.style.height = squareSize+"px";
        div.style.width = squareSize+"px";
        container.appendChild(div);
        div.addEventListener("mouseover", () => changeColor(div))
    }
}

function changeSize() {
    let size;
    do {
        size = prompt("Wich size do you want ? (max 100)")
    } while ((size > 100) || (size < 1));

    createGrid(size);
    currentSize = size;
}

buttonSizeGrid.addEventListener("click", changeSize);
buttonReset.addEventListener("click", () => createGrid(currentSize))