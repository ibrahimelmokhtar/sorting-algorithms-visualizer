let sliderValue = 0;
let randomArray = [];

function setValue(){
    document.getElementById("array-size").innerHTML = document.getElementById("slider").value;
    sliderValue = document.getElementById("slider").value;
}

function sliderChange(value){
    sliderValue = value;
    document.getElementById("array-size").innerHTML = sliderValue;
    generateArray();
}

function generateArray(){
    // Generate random numbers between 1 and 200:
    for (let i=0; i<sliderValue; i++){
        let number = Math.floor((Math.random() * 200) + 1);
        randomArray.push(number);
    }
    console.log(randomArray);
    randomArray = [];
}
