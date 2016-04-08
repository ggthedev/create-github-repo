const defaultOptions = {
  name: '',
  description: '',
  homepage: '',
  private: false,
  has_issues: true,
  has_wiki: true,
  has_downloads: true,
  auto_init: false,
  gitignore_template: ''
};

export const githubOptionsParser = options =>
  Object.assign({}, defaultOptions, options);
