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
  const repoSsh = chalk.blue(success.ssh_url);

  console.log('\n');
  console.log(`\t${successIntro} ${chalk.green('created:')} ${repoName}`);
  console.log(`\t${chalk.green('Here\'s url:')} ${repoUrl}`);
  console.log(`\t${chalk.green('Here\'s ssh:')} ${repoSsh}`);
  console.log('\n');
};
