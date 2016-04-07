import chalk from 'chalk';
import random from 'random-item';

const errorMessages = {
  '400': 'you need to provide name for the repo!',
  '401': 'provided token is invalid!',
  '422': 'repo with that name already exists or no token was provided!'
};

const errorIntros = [
  'Damn :(',
  'Oops :(',
  'Sorry, but'
];

export const errorHandler = error => {
  const errorIntro = chalk.red(random(errorIntros));
  const errorMessage = chalk.red(errorMessages[error.code]);

  console.log('\n');
  console.error(`\t${errorIntro} ${errorMessage}`);
  console.log('\n');
};
