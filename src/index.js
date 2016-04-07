import GithubLib from 'github';
import Promise from 'bluebird';

import { cliOptions } from './cliHelper';
import { githubFactory } from './githubFactory';
import { githubOptionsParser } from './githubOptionsParser';

import { successHandler } from './successHandler';
import { errorHandler } from './errorHandler';

const githubToken = process.env.TEST_GITHUB_TOKEN;
const github = githubFactory(githubToken);
const createRepo = Promise.promisify(github.repos.create);

createRepo(githubOptionsParser(cliOptions))
  .then(success => successHandler(success))
  .catch(error => errorHandler(error));
