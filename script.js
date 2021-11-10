//declaring the game board, player one and player two variables and objects.//
var gameBoard = document.getElementsByClassName("tile")
var scoreBoard = document.querySelector(".resultsCard")
var result = document.querySelector(".winnerResult2")
var twoPlayer = document.getElementById("vsPlayer")
var compPlayer = document.getElementById("vsComputer")
var playerOne = {
    "value": "Crosses",
    "turn": true,
    "class": "cross" 
}
var playerTwo = {
    "value": "Naughts",
    "turn": false,
    "class": "naught" 
}
var computer = {
    "value": "naughts",
    "turn": "false",
    "class": "naught"

}
var tiles = {
     0:"",
     1: "",
     2:"",
     3:"",
     4:"",
     5:"",
     6:"",
     7:"",
     8:""
}
var winner = "";
//loop through the board and add a click event listener which runs the function takeTurn//
function addListeners() {
     for (let i = 0; i < gameBoard.length; i++ ) {
     gameBoard[i].addEventListener("click", takeTurn)
     gameBoard[i].className = "tile"
     }
}
window.onload = addListeners
//Turn Taking to alternate between player one and two//
function takeTurn (event) {
    if (playerOne.turn === true) {
    event.target.classList.add(playerOne.class)
    playerOne.turn = false;
    playerTwo.turn = true;
    } else if(playerTwo.turn === true) {
    event.target.classList.add(playerTwo.class)
    playerOne.turn = true;
    playerTwo.turn = false;
    }
    updateMatrix()
    event.target.removeEventListener("click", takeTurn)
    checkWin()
    displayResult()
}
//updating board matrix//
function updateMatrix () {
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i].classList.contains(playerOne.class)) {
            tiles[i] = playerOne.value
        } else if (gameBoard[i].classList.contains(playerTwo.class)) {
            tiles[i]= playerTwo.value
        }
    }
}

//Winning scoreboard functions and button event listener//
function displayResult() {
    if (winner !== "") {
    scoreBoard.style.display = "block"
    result.innerHTML = winner
    }
}
var resetGame = document.querySelector(".button")
resetGame.addEventListener("click", reset)

function reset() {
    addListeners();
    scoreBoard.style.display = "none";
    clearMatrix();
    winner = "";
    playerOne.turn = true;
    playerTwo.turn = false;
}
function clearMatrix() {
    tiles[0] = ""
    tiles[1] = ""
    tiles[2] = ""
    tiles[3] = ""
    tiles[4] = ""
    tiles[5] = ""
    tiles[6] = ""
    tiles[7] = ""
    tiles[8] = ""
}

//Win Logic//
function checkWin() {
    if (tiles[0] == tiles[2] && 
        tiles[1] == tiles[2] && 
        tiles[0] != "") {
        winner= tiles[0]      
    } else if (
        tiles[3] == tiles[4] && 
        tiles[4] == tiles[5] && 
        tiles[3] != "") {
        winner= tiles[3] 
    }   else if (
        tiles[6] == tiles[7] && 
        tiles[7] == tiles[8] && 
        tiles[6] != "") {
        winner= tiles[6] 
    }   else if (
        tiles[0] == tiles[3] && 
        tiles[3] == tiles[6] && 
        tiles[0] != "") {
        winner= tiles[0] 
    }   else if (
        tiles[1] == tiles[4] && 
        tiles[4] == tiles[7] && 
        tiles[1] != "") {
        winner= tiles[1]
    }   else if (
        tiles[2] == tiles[5] && 
        tiles[5] == tiles[8] && 
        tiles[2] != "") {
        winner= tiles[2]
    }   else if (
        tiles[0] == tiles[4] && 
        tiles[4] == tiles[8] && 
        tiles[0] != "") {
        winner= tiles[0]
    }   else if (
        tiles[2] == tiles[4] && 
        tiles[4] == tiles[6] && 
        tiles[2] != "") {
        winner= tiles[2]
    } 
}
