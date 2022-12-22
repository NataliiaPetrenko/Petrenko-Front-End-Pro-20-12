let firstNumber = Number(prompt("Kindly enter the first number:","15"));
let secondNumber = Number(prompt("Kindly enter the second number", "17"));

let sum = firstNumber + secondNumber;
let substraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

alert(`User entered ${firstNumber} and ${secondNumber}:
• ${firstNumber} + ${secondNumber} = ${sum};
• ${firstNumber} - ${secondNumber} = ${substraction};
• ${firstNumber} * ${secondNumber} = ${multiplication};
• ${firstNumber} / ${secondNumber} = ${division};
`);