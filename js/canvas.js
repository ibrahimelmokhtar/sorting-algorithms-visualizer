// Global variables:
let sliderValue = 0;
let randomArray = [];
let columnHeight = 500;
let algorithms = ["Insertion Sort", "Selection Sort", "Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"];

// Set default values on page load:
function setValue(){
    // Get slider value:
    document.getElementById("array-size").innerHTML = document.getElementById("slider").value;
    sliderValue = document.getElementById("slider").value;

    // Display available algorithms:
    displayAlgorithms();

    // Generate random numbers:
    generateArray();
}

// Set array-size value & Generate random numbers on slider value change:
function sliderChange(value){
    setValue();
    document.getElementById("array-size").innerHTML = sliderValue;
    generateArray();
}

function generateArray(){
    // Clear numbers' array:
    randomArray = [];

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
        element.style.color = "#f1fbff";
        element.style.width = String(300/(sliderValue)) + "px";
        element.style.height = String(randomArray[i]*columnHeight/200) + "px";
        element.style.margin = "1px";
        element.style.padding = "2px";
        element.style.textAlign = "center";
        if (sliderValue <= 10){
            element.innerHTML = randomArray[i];
        }
        else{
            element.innerHTML = "";
        }

        // Add new element into (visualizer) element:
        visualizer.appendChild(element);
    }
}

function displayAlgorithms(){
    // Get (ul) element from HTML:
    let ulAlgorithms = document.getElementsByTagName("ul")[0];

    // Clear its (li) elements:
    ulAlgorithms.innerHTML = "";

    // Display (li) elements based on algorithms' list:
    for (let i=0; i<algorithms.length; i++){
        let element = document.createElement("li");
        element.id = String(algorithms[i]).toLowerCase().replace(' ', '-');
        element.onclick = insertionSort;
        element.innerHTML = algorithms[i];
        ulAlgorithms.appendChild(element);
    }
}

/* **************************************************************************************** */
/**
 * Pseudocode:
 * 1. set a marker for the sorted section after the first element.
 * 2. repeat the following until unsorted section is empty:
 *      a. select the first unsorted element.
 *      b. swap the other elements to the right to create the correct position
 *          and shift the unsorted element.
 *      c. advance the marker to the right one element.
 */

/**
 * insertionSort(array)
 *      mark first element as sorted
 *      for each unsorted element X
 *          'extract' the element X
 *          for j <- lastSortedIndex down to 0
 *              if current element j > X
 *                  move sorted element to the right by 1
 *          break loop and insert X here
 * end insertionSort
 */

function insertionSort(){
    // randomArray = [9, 5, 1, 4, 3];
    console.log(`Unsorted:\t${randomArray}`);
    for (let i=1; i<randomArray.length; i++){
        let lastSortedIndex = i;
        let key = Number(randomArray[i]);
        for (let j=i-1; j>=0; j--){
            if (key < Number(randomArray[j])){
                // Swap them:
                let temp = randomArray[j];
                randomArray[j] = key;
                randomArray[lastSortedIndex] = temp;
                lastSortedIndex = j;
            }
            else{
                break;
            }
        }
    }
    console.log(`Sorted\t:\t${randomArray}`);
}
