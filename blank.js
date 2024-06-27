let gridContainer = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
    let newBoxContainer = document.createElement("div");
    newBoxContainer.classList.add("box-container")

    for (let v = 0; v < 16; v++) {
        let newBox = document.createElement("div");
        newBox.classList.add("box")
        newBox.setAttribute("data-value", 0);
        newBoxContainer.appendChild(newBox);
    }

    gridContainer.appendChild(newBoxContainer);
}


gridContainer.addEventListener("mouseover", (event) => {
    let box = event.target
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    let opacity = Number(box.getAttribute("data-value"));
    opacity = opacity + 0.1;
    console.log(opacity);
    box.setAttribute("data-value", opacity);

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
});

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    let userInput;
    
    do {
        userInput = prompt("Enter a grid size between 1 - 100");
    } while (userInput < 1 || userInput > 100);

    let gridToBeRemoved = document.querySelector(".grid")
    document.querySelector("body").removeChild(gridToBeRemoved);

    let newGrid = document.createElement("div");
    newGrid.classList.add("grid");
    document.querySelector("body").appendChild(newGrid);

    for (let i = 0; i < userInput; i++) {
        let newBoxContainer = document.createElement("div");
        newBoxContainer.classList.add("box-container")
    
        for (let v = 0; v < userInput; v++) {
            let newBox = document.createElement("div");
            newBox.classList.add("box")
            newBoxContainer.appendChild(newBox);
        }
    
        newGrid.appendChild(newBoxContainer);
    }

    let opacity = 0;
    
    newGrid.addEventListener("mouseover", (event) => {
        let box = event.target
        let red = Math.random() * 255;
        let green = Math.random() * 255;
        let blue = Math.random() * 255;
        let opacity = Number(box.getAttribute("data-value"));
        opacity = opacity + 0.1;
        console.log(opacity);
        box.setAttribute("data-value", opacity);

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
    });

});