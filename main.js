
// Getting stuff from html.
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const purpleButton = document.getElementById("purple");
const yellowButton = document.getElementById("yellow");
const startButton = document.getElementById("start");
const endButton = document.getElementById("end");


//making array for my 4 buttons.
const buttons = [greenButton,blueButton,purpleButton,yellowButton];

//array to push colour sequences into when pressing buttons.
const inputtedColours = [];

//generates a number between 1 and 4.
function randomNumberGenerator () {
    return Math.floor(Math.random() * 3);
} 

//adds x amount of random numbers (between 1 and 4 using the previous function) to an array called random numbers.
const inputRandomNumbers = (x) => {
    const randomNumbers = [];
    for (let index = 0; index < x; index++) {
        randomNumbers.push(randomNumberGenerator());
    }
    return randomNumbers;
}

// maps the array of numbers to an array of colours.
const randomColourGenerator = (x) => {
    const randomNumbers = inputRandomNumbers(x);
    return randomNumbers.map((randomNumber) => {
        if (randomNumber === 0) {
            return "green";
        }
        else if (randomNumber === 1) {
            return "blue";
        }
        else if (randomNumber === 2) {
            return "purple";
        }
        else if (randomNumber === 3) {
            return "yellow";
        }
    })
}
// adds arrays of random colours of lengths 4 to 20 to a new array.
const makeAllColours = () => {
    const allColourArraysLocal = [];
    for (let index = 4; index <20; index++) {
        allColourArraysLocal.push(randomColourGenerator(index))  
    }
    return allColourArraysLocal;
}





// creates array of radnom colour arrays globally.
const allColourArraysGlobal = makeAllColours();
console.log(allColourArraysGlobal);


// creates random colour array using previous funtion.
const randomColours = randomColourGenerator() ;



//checks to see if the array inputted matches the random array of colours.  
const arraysMatch = function (arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return alert("incorrect");
	}
	return alert("correct");
};



// adds colour of button pressed to array
const colourInput = (button) => {
    if (button === greenButton) {
        inputtedColours.push("green");
        console.log(inputtedColours);
        arraysMatch(inputtedColours, allColourArraysGlobal[0])
    } else if (button === blueButton) {
        inputtedColours.push("blue");
        console.log(inputtedColours);
        arraysMatch(inputtedColours, allColourArraysGlobal[0])
    } else if (button === purpleButton) {
        inputtedColours.push("purple");
        console.log(inputtedColours);
        arraysMatch(inputtedColours, allColourArraysGlobal[0])
    } else if (button === yellowButton) {
        inputtedColours.push("yellow");
        console.log(inputtedColours);
        arraysMatch(inputtedColours, allColourArraysGlobal[0]);
    }
}
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        colourInput(button);
    });
})
// end of process


const makeGame = () => {

}




















;







