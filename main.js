

const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const purpleButton = document.getElementById("purple");
const yellowButton = document.getElementById("yellow");

const buttons = [greenButton,blueButton,purpleButton,yellowButton];

const inputtedColours = [];


function colourInput(button) {
   
    if (button === greenButton) {
        inputtedColours.push("green");
        console.log(inputtedColours);
    } else if (button === blueButton) {
        inputtedColours.push("blue");
        console.log(inputtedColours);
    } else if (button === purpleButton) {
        inputtedColours.push("purple");
        console.log(inputtedColours);
    } else if (button === yellowButton) {
        inputtedColours.push("yellow");
        console.log(inputtedColours);
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        colourInput(button);
    });
})


console.log(greenButton);

