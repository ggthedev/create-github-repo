import GithubLib from 'github';
import Promise from 'bluebird';

import { cliOptions, cliToken } from './helpers/cliHelper';
import { githubFactory } from './github/githubFactory';
import { githubOptionsParser } from './github/githubOptionsParser';

import { successHandler } from './responseHandlers/success';
import { errorHandler } from './responseHandlers/error';

const githubToken = cliToken || process.env.CREATE_GITHUB_REPO_TOKEN || '';
const github = githubFactory(githubToken);
const createRepo = Promise.promisify(github.repos.create);

createRepo(githubOptionsParser(cliOptions))
  .then(success => successHandler(success))
  .catch(error => errorHandler(error));
