import game from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 0 || number === 1) {
    return 'no';
  }
  const count = Math.sqrt(number);
  const countRound = Math.round(count);
  for (let i = 2; i < countRound;) {
    if (number % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const generateRound = () => {
  const randomNum = getRandom(0, 50);
  const trueAnswer = isPrime(randomNum);
  const question = `Question: ${randomNum}`;
  return [trueAnswer, question];
};

const startPrime = () => game(generateRound, gameDescription);

export default startPrime;
