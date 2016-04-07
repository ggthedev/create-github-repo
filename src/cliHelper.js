import commander from 'commander';

commander
  .version('0.0.1')
  .option('-n, --name [name]', 'Repository name', '')
  .option('-d, --desc [desc]', 'Repository description', '')
  .option('-H, --homepage [homepage]', 'Repository homepage', '')
  .option('-p, --private', 'Should repository be private?', false)
  .option('-i, --issues', 'Should repository have issues?', true)
  .option('-w, --wiki', 'Should repository have wiki?', true)
  .option('-d, --downloads', 'Should repository have downloads?', true)
  .option('-a, --auto-init', 'Should repository have initial commit?', false)
  .option('-g, --gitignore', 'Should repository have wiki?', '')
  .parse(process.argv);

export default commander;
