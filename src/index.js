import GithubLib from 'github';
import Promise from 'bluebird';

import { cliOptions, cliToken } from './cliHelper';
import { githubFactory } from './githubFactory';
import { githubOptionsParser } from './githubOptionsParser';

import { successHandler } from './successHandler';
import { errorHandler } from './errorHandler';

const githubToken = cliToken || process.env.CREATE_GITHUB_REPO_TOKEN || '';
const github = githubFactory(githubToken);
const createRepo = Promise.promisify(github.repos.create);

createRepo(githubOptionsParser(cliOptions))
  .then(success => successHandler(success))
  .catch(error => errorHandler(error));
