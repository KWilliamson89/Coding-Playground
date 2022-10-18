const phrases = [
  "EAT MORE CHICKEN",
  "HAVE IT YOU WAY",
  "HOLY MOLY DONUT SHOP",
  "VOTE FOR PEDRO",
];
var gameObject = {
  currentWordSolution: "",
  solutionLetters: [],
  lettersLeft: 0,
  pageElements: [],
};
//Step 2 missing

const gameArea = document.querySelector(".gameArea");
const score = document.querySelector(".score");
const puzzle = document.querySelector(".puzzle");
const letters = document.querySelector(".letters");
const btn = document.querySelector("button");
var puzzleArray = [];

function startGame() {
  if (phrases.length > 0) {
    btn.style.display = "none";
  }

  gameObject.currentWordSolution = phrases.shift();
  game.solutionLetters = gameObject.currentWordSolution.split("");
  game.lettersLeft = 0;
  pageElements = [];
  //total = 0;

  for (var i = 0; i < 26; i++) {
    let character = String.fromCharCode(65 + i);
    let alphaElement = generatePageElements("div", letters, character, "box");
    //document.createElement("div");
    //alphaElement.innerText = character;
    //alphaElement.classList.add("box");
    alphaElement.addEventListener("click", checker(this));
    //letters.append(alphaElement);
  }

  //Assuming all the game values are cleared and set here
  builder();
}

btn.addEventListener("click", startGame);

function builder() {
  letters.innerHTML = "";
  puzzle.innerHTML = "";

  for (var i = 0; i < game.solutionLetters; i++) {
    var solutionElement = generatePageElements("div", puzzle, "-", "boxE");

    puzzleArray.push(solutionElement);

    if (game.solutionLetters[i] == " ") {
      solutionElement.style.borderColor = "white";
      solutionElement.textContent = "";
    }
  }

  updateScore();
}

function generatePageElements(
  elementType,
  parentElement,
  outputContent,
  newElementClass
) {
  var temporary = document.createElement(elementType);
  temporary.classList.add(newElementClass);
  parentElement.append(temporary);
  temporary.textContent = outputContent;
  return temporary;
}

function updateScore() {}

function checker(element) {
  //Remove main class
  element.classList.remove("box");
  //add another class
  //remove the event listener
  element.removeEventListener(click, checker(this));
  //update background color
  element.style.backgroundColor = "orange";

  checkLetter(element.textContent); //this function needs the value of the clicked letter;
}

function checkLetter(letter) {
  for (var i = 0; i < game.solutionLetters; i++) {
    if (letter === game.solutionLetters[i]) {
      puzzleArray[i].textContent = game.solutionLetters[i];
    }
  }
}
