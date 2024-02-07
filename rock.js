const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice') // Corrected typo
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice, computerChoice, result // Corrected typo

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice // Corrected typo
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) // Corrected random number generation
    
    if (randomNumber === 1) { // Corrected indexing
        computerChoice = 'rock'
    } else if (randomNumber === 2) { // Corrected indexing
        computerChoice = 'paper'
    } else if (randomNumber === 0) { // Corrected indexing
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice===userChoice){
        result='its a draw!'
    }
    if(computerChoice==='rock' && userChoice==='paper'){
        result='you win'
    }
    if(computerChoice==='rock' && userChoice==='scissors'){
        result='you lose'
    }
    if(computerChoice==='paper' && userChoice==='scissors'){
        result='you win'
    }
    if(computerChoice==='paper' && userChoice==='rock'){
        result='you lose'
    }
    if(computerChoice==='scissors' && userChoice==='rock'){
        result='you win'
    }
    if(computerChoice==='scissors' && userChoice==='paper'){
        result='you lose'
    }
    resultDisplay.innerHTML=result
}
