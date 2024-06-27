createGrid(16);

function changeBox (event) {
    let box = event.target
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    let opacity;

    if (box.classList.contains("box")) {
        opacity = Number(box.getAttribute("data-value"));
        opacity = opacity + 0.1;
        console.log(opacity);
        box.setAttribute("data-value", opacity);
    }

    if (box.classList.contains("box") && (box.classList.contains("filled") == false)) {
        box.classList.add("filled");
        box.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity}`;

    } else if (box.classList.contains("box") && (box.classList.contains("filled") == true)) {
        let colors = box.style.backgroundColor.split(",")
        colors.pop();
        colors.push(opacity + ')');

        let newColors = colors.join();
        box.style.backgroundColor = newColors;
    }
}

function createGrid (gridSize) {
    let newGrid = document.createElement("div");
    newGrid.classList.add("grid");
    document.querySelector("body").appendChild(newGrid);

    for (let i = 0; i < gridSize; i++) {
        let newBoxContainer = document.createElement("div");
        newBoxContainer.classList.add("box-container")
    
        for (let v = 0; v < gridSize; v++) {
            let newBox = document.createElement("div");
            newBox.classList.add("box")
            newBoxContainer.appendChild(newBox);
        }
    
        newGrid.appendChild(newBoxContainer);
    }

    newGrid.addEventListener("mouseover", changeBox);
}

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    let userInput;

    do {
        userInput = prompt("Enter a grid size between 1 - 100");
    } while (userInput < 1 || userInput > 100);

    let gridToBeRemoved = document.querySelector(".grid")
    document.querySelector("body").removeChild(gridToBeRemoved);

    createGrid(userInput);
    
});