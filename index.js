// 1
function calculateAverage(arr) {
  const numbers = arr.filter(item => typeof item === 'number');
  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;
  return average;
}

const array = [1, 'hello', 2, 3, 'world', 4, true];
console.log(calculateAverage(array)); 

// 2

function doMath(x, znak, y) {
  let result;

  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = Math.pow(x, y);
      break;
    default:
      result = 'Непідтримуваний оператор';
  }

  return result;
}

const x = 5;
const y = 3;
const znak = '+';
console.log(doMath(x, znak, y)); 

// 3

function fillArray(rows, columns) {
  const array = [];

  for (let i = 0; i < rows; i++) {
    const innerArray = [];
    for (let j = 0; j < columns; j++) {
      const value = prompt(`Введіть значення для елемента [${i}][${j}]`);
      innerArray.push(value);
    }
    array.push(innerArray);
  }

  return array;
}

const rows = prompt('Введіть кількість рядків');
const columns = prompt('Введіть кількість стовпців');
const userArray = fillArray(parseInt(rows), parseInt(columns));
console.log(userArray);

// 4 

function removeChars(str, charsToRemove) {
  const regex = new RegExp(`[${charsToRemove.join('')}]`, 'g');
  return str.replace(regex, '');
}

const inputString = ' hello world';
const charsToRemove = ['l', 'd'];
console.log(removeChars(inputString, charsToRemove)); 