# 2DEVS development setup

This is the setup repository for the 2DEVS segment of the Error Code: Coffee podcast.

## Dependencies
- git (https://git-scm.com/)
- npm (https://www.npmjs.com/)

## Installation

1. Clone the repo
```bash
git clone https://github.com/cursief/2devs-setup.git episode-<number>
cd 2devs-setup
```

2. Change git remote URL
```bash
git remote set-url https://github.com/cursief/episode-<number>.git
```

3. Install NPM packages
```bash
npm i
```

## Run local server

Run the development server with BrowserSync through gulp
```bash
gulp
```
