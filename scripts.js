//Buttons selectors
const numberBtns = Array.from(document.querySelectorAll('.num'))
const operatorBtns = Array.from(document.querySelectorAll('.operator'))
const clearBtn = document.getElementById('clear-btn')
const deleteBtn = document.getElementById('delete-btn')
const equalBtn = document.getElementById('equal-btn')
const dotBtn = document.getElementById('dot-btn')
const userInputDisplay = document.querySelector('.user-input')
let userInputArr = []

const displayNum = e => {
    userInputArr.push(e.target.textContent)
    userInputDisplay.textContent = userInputArr.join('')
}

numberBtns.forEach(btn => btn.addEventListener('click', displayNum))




const add = (a,b) => a + b;
const substract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

const operate = (operator, num1, num2) => operator(num1,num2);


