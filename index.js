const compChoiceDisplay = document.getElementById('comp-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let yourChoice
let compChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = yourChoice
    generateComputerChoice()
    getResult()
    
}
))
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)+1 

    if(randomNumber === 1){
        compChoice = "--ROCK--"
    }else if(randomNumber === 2){
        compChoice = "--PAPER--"
    }else{
        compChoice = "--SCISSORS--"
    }
    compChoiceDisplay.innerHTML = compChoice
    
}
function getResult(){
    if(compChoice === yourChoice){
        result="ITS A DRAW"
    }else if(compChoice === "--ROCK--" && yourChoice === "--SCISSORS--"){
        result = "YOU LOST"
    }else if(compChoice === "--ROCK--" && yourChoice === "--PAPER--"){
        result = "YOU WIN"
    }else if(compChoice === "--SCISSORS--" && yourChoice === "--ROCK--"){
        result = "YOU WIN"
    }else if(compChoice === "--SCISSORS--" && yourChoice === "--PAPER--"){
        result = "YOU LOST"
    }else if(compChoice === "--PAPER--" && yourChoice === "--ROCK--"){
        result = "YOU LOST"
    }else{
        result= "YOU WIN"
    }
    resultDisplay.innerHTML = result
}