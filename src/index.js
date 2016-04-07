import GithubLib from 'github';
import Promise from 'bluebird';

const repositoryOptions = {
  name: 'test repo',
  description: 'test description',
  homepage: 'test homepage',
  private: true,
  has_issues: true,
  has_wiki: true,
  has_downloads: true
};

let github = new GithubLib({
  version: '3.0.0'
});

const githubToken = process.env.TEST_GITHUB_TOKEN;
const createRepo = Promise.promisify(github.repos.create);

github.authenticate({
  type: 'oauth',
  token: githubToken
});

createRepo(repositoryOptions)
  .then(msg => console.log(msg))
  .catch(err => console.error(err));
