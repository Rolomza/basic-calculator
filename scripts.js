//Buttons selectors
const numberBtnsMobile = document.querySelectorAll('.num')
const operatorBtnsMobile = document.querySelectorAll('.operator')
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
let validCalc
const userInputDisplay = document.querySelector('.user-input')
const resultDisplay = document.querySelector('.result')

//Main functions

const add = (a,b) => a + b;
const substract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const operate = (operator, num1, num2) => (operator(num1,num2));

//Button Functions
const userDataInput = e => {
    let input = e.target.textContent
    if (!userInputArr.length && (input === '+' || input === '-' || input === '*' || input === '÷' || input === '.')) {
        userInputDisplay.textContent = `Enter a number before an operator`
    } else {
        userInputArr.push(input)
        userInputDisplay.textContent = userInputArr.join('')
    }
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
    verifySyntax(userInputArr)
    if (validCalc) {
        calculusLogic(userInputArr)
    } else {
        return
    }
    userInputArr = []
    userInputArr[0] = result
}

const verifySyntax = (arr) => {
    let lastValue = userInputArr[userInputArr.length - 1]
    if (lastValue === '+' || lastValue === '-' || lastValue === '*' || lastValue === '÷' || lastValue === '.') {
        resultDisplay.textContent = 'Syntax Error'
        return validCalc = false
    } else  {
        validCalc = true
    }
}

const calculusLogic = (arr) => {
    arr.forEach(value => {
        if(value === '+' || value === '-' || value === '*' || value === '÷') {
            operator = value
            num1 = Number(arr.slice(0, arr.indexOf(value)).join(''))
            num2 = Number(arr.slice(arr.indexOf(value) + 1).join(''))
        }
    })
    switch (operator) {
        case '+': result = operate(add, num1, num2)
            break;
        case '-': result = operate(substract, num1, num2)
            break;
        case '*':
            if (Number.isInteger(num1 * num2)) {
                result = operate(multiply, num1, num2)
            } else {
                result = operate(multiply, num1, num2).toFixed(4)
            }
            break;
        case '÷':
            if(num2 === 0) {
                result = 'Math Error'
            } else if (num1 % num2 !== 0) {
                result = operate(divide, num1, num2).toFixed(4)
            } else {
                result = operate(divide, num1, num2)
        }
        break;
    }
    resultDisplay.textContent = String(result)
    return result
}

//Event Listeners (Mouse)

numberBtns.forEach(btn => btn.addEventListener('click', userDataInput))
operatorBtns.forEach(btn => btn.addEventListener('click', userDataInput))
dotBtn.addEventListener('click', userDataInput)
deleteBtn.addEventListener('click', deleteInput)
clearBtn.addEventListener('click', clearInput)
equalBtn.addEventListener('click', solve)
