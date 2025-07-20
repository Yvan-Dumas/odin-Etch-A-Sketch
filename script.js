function changeColor(element) {
    element.style.backgroundColor = "red";
}

const container = document.querySelector(".container");

for (let i = 0; i<256; i++) {
    const div = document.createElement("div");
    div.classList.add("squareDivs");
    container.appendChild(div);
    div.addEventListener("mouseover", () => changeColor(div))
}