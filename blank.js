let gridContainer = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    let newBoxContainer = document.createElement("div");
    newBoxContainer.classList.add("box-container")

    for (let v = 0; v < 16; v++) {
        let newBox = document.createElement("div");
        newBox.classList.add("box")
        newBoxContainer.appendChild(newBox);
    }

    gridContainer.appendChild(newBoxContainer);
}