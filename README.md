![sloth is life](http://i.imgur.com/4ahrltM.png)

# Create your github repos like a champ!

[![npm version](https://badge.fury.io/js/create-github-repo.svg)](https://badge.fury.io/js/create-github-repo)

That's right! There's no need to open your browser! :zap: It's incredibly fast and easy to use, 
all you need to do is create your own [access token (repo scope)](https://github.com/settings/tokens/new) only once 
and you're ready to go! :raised_hands:

Motivation for this project is to [save your precious time](https://xkcd.com/1205/), I think that the whole process
of changing the window and navigating to Github's website just to create empty project is a pain in the ass.

## Install

```
$ npm i -g create-github-repo
```

## Usage

Depending on your needs / preferences you can either store your access token as a system environment:

  ```bash
  $ export CREATE_GITHUB_REPO_TOKEN=<access_token>
  
  $ create-github-repo --name "My coolest repo yet!"
  ```

or you can just pass it directly when using tool:
  
  ```bash
  $ create-github-repo <access_token> --name "My coolest repo yet!"
  ```
  
## DEMO

#### Success

![Success demo](http://f.cl.ly/items/0I3n161G032n3s2S2U03/Screen%20Recording%202016-04-08%20at%2001.49%20PM.gif)

#### Failure

![Failure demo](http://f.cl.ly/items/0n1R1A2J180P0j1H3m0J/Screen%20Recording%202016-04-08%20at%2001.50%20PM.gif)
  
## Inspiration

My inspiration was [this awesome tool](https://github.com/denis-sokolov/remove-github-forks) 
created by [Denis Sokolov](https://github.com/denis-sokolov)

  
## License

MIT © [Oskar Cieslik](https://tldrlegal.com/license/mit-license)
