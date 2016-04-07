import commander from 'commander';

export const cliHelper = commander
  .version('0.0.1')
  .option('-n, --name [name]', 'Repository name', '')
  .option('-d, --desc [desc]', 'Repository description', '')
  .option('-H, --homepage [homepage]', 'Repository homepage', '')
  .option('-p, --private', 'Repository should be private', false)
  .option('-i, --no-issues', 'Repository shouldn\'t have issues', false)
  .option('-w, --no-wiki', 'Repository shouldn\'t have wiki', false)
  .option('-d, --no-downloads', 'Repository shouldn\'t have downloads', false)
  .option('-a, --auto-init', 'Should repository have initial commit?', false)
  .option('-g, --gitignore', 'Should repository have wiki?', '')
  .parse(process.argv);
