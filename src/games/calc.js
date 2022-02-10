import game from '../index.js';
import getRandom from '../utils.js';

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return false;
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const indexOfOperators = getRandom(0, 2);

  const num1 = getRandom(0, 10);
  const num2 = getRandom(0, 10);

  const randomOperator = operators[indexOfOperators];

  const trueAnswer = String(calculate(num1, randomOperator, num2));
  const question = `Question: ${num1} ${operators[indexOfOperators]} ${num2}`;
  return [question, trueAnswer];
};

const startCalc = () => {
  const gameDescription = 'What is the result of expression?';

  game(generateRound, gameDescription);
};

export default startCalc;
