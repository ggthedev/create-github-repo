import chalk from 'chalk';
import random from 'random-item';

const successIntros = [
  'Yii-ha :)',
  'Yo,',
  'Hurray :)'
];

export const successHandler = success => {
  const successIntro = chalk.green(random(successIntros));
  const repoName = chalk.yellow(success.full_name);
  const repoUrl = chalk.blue(success.html_url);

  console.log(`${successIntro} ${chalk.green('created:')} ${repoName}`);
  console.log(`${chalk.green('Here\'s it\'s url sir:')} ${repoUrl}`);
};
