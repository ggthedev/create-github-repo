import chalk from 'chalk';
import random from 'random-item';

const errorMessages = {
  '400': 'you need to provide name for the repo!',
  '422': 'repo with that name already exists!'
};

const errorIntros = [
  'Damn :(',
  'Oops :(',
  'Sorry, but'
];

export const errorHandler = error => {
  const errorIntro = chalk.red(random(errorIntros));
  const errorMessage = chalk.red(errorMessages[error.code]);

  console.error(`${errorIntro} ${errorMessage}`);
};
