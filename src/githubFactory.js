import GithubLib from 'github';

export const githubFactory = token => {
  const githubInstance = new GithubLib({
    version: '3.0.0'
  });

  githubInstance.authenticate({
    type: 'oauth',
    token: token
  });

  return githubInstance;
};
