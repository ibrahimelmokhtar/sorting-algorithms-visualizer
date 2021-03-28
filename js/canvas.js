// Global variables:
let sliderValue = 0;
let randomArray = [];
let columnHeight = 500;

// Set default values on page load:
function setValue(){
    document.getElementById("array-size").innerHTML = document.getElementById("slider").value;
    sliderValue = document.getElementById("slider").value;
    generateArray();
}

// Set array-size value & Generate random numbers on slider value change:
function sliderChange(value){
    setValue();
    document.getElementById("array-size").innerHTML = sliderValue;
    generateArray();
}

function generateArray(){
    // Clear visualizer:
    let visualizer = document.getElementById("visualizer");
    visualizer.innerHTML = "";

    // Generate random numbers between 10 and 200:
    for (let i=0; i<sliderValue; i++){
        let number = Math.floor((Math.random() * 190) + 10);
        randomArray.push(number);
    }
    // Display generated numbers:
    visualizeNumbers();

    // Clear numbers' array:
    randomArray = [];
}

function visualizeNumbers(){
    // Modify (visualizer) element:
    let visualizer = document.getElementById("visualizer");
    visualizer.style.height = "device-height";
    visualizer.style.display = "flex";
    visualizer.style.flexDirection = "row";
    visualizer.style.justifyContent = "center";

    // Display generated numbers:
    for (let i=0; i<sliderValue; i++){
        // Create new element of type (div):
        let element = document.createElement("div");

        // Specify new element's attributes:
        element.style.backgroundColor = "#555555";
        element.style.width = "30px";
        element.style.height = String(randomArray[i]*columnHeight/200) + "px";
        element.style.margin = "5px";
        element.style.padding = "5px";
        element.style.textAlign = "center";
        if (sliderValue < 20){
            element.innerHTML = randomArray[i];
        }
        else{
            element.innerHTML = "";
        }

        // Add new element into (visualizer) element:
        visualizer.appendChild(element);
    }
}
