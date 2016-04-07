import commander from 'commander';

let token = null;

commander
  .version('0.1.0')
  .usage('--name <name> [token] [options]')
  .arguments('<token>')
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

export const cliToken = commander.args[0]; // <token>

export const cliOptions = {
  name: commander.name,
  description: commander.description,
  homepage: commander.homepage,
  private: commander.private,
  has_issues: commander.hasIssues,
  has_wiki: commander.hasWiki,
  has_downloads: commander.hasDownloads,
  auto_init: commander.autoInit,
  gitignore_template: commander.gitignoreTemplate
};
