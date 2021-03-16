//Buttons selectors
const numberBtns = Array.from(document.querySelectorAll('.num'))
const operatorBtns = Array.from(document.querySelectorAll('.operator'))
const clearBtn = document.getElementById('clear-btn')
const deleteBtn = document.getElementById('delete-btn')
const equalBtn = document.getElementById('equal-btn')
const dotBtn = document.getElementById('dot-btn')

//Global Values
let userInputArr = []
let num1
let num2
let operator
let result
const userInputDisplay = document.querySelector('.user-input')
const resultDisplay = document.querySelector('.result')

//Button Functions
const userDataInput = e => {
    let input = e.target.textContent
    userInputArr.push(input)
    userInputDisplay.textContent = userInputArr.join('')
}

const deleteInput = () => {
    userInputArr.pop()
    userInputDisplay.textContent = userInputArr.join('')
}

const clearInput = () => {
    userInputArr = []
    userInputDisplay.textContent = ''
    resultDisplay.textContent = ''
}

const solve = () => {
    userInputArr.forEach(value => {
        if(value === '+' || value === '-' || value === '*' || value === '÷') {
            operator = value
            num1 = Number(userInputArr.slice(0, userInputArr.indexOf(value)).join(''))
            num2 = Number(userInputArr.slice(userInputArr.indexOf(value) + 1).join(''))
        }
    })
    switch (operator) {
        case '+': resultDisplay.textContent = String(operate(add, num1, num2))
            break;
        case '-': resultDisplay.textContent = String(operate(substract, num1, num2))
            break;
        case '*': resultDisplay.textContent = String(operate(multiply, num1, num2))
            break;
        case '÷': resultDisplay.textContent = String(operate(divide, num1, num2))
            break;
    }
}

//Event Listeners

numberBtns.forEach(btn => btn.addEventListener('click', userDataInput))
operatorBtns.forEach(btn => btn.addEventListener('click', userDataInput))
deleteBtn.addEventListener('click', deleteInput)
clearBtn.addEventListener('click', clearInput)
equalBtn.addEventListener('click', solve)

//Main functions

const add = (a,b) => a + b;
const substract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

const operate = (operator, num1, num2) => operator(num1,num2);


