# A-FUN to WebAssembly
 A compiler from a statically typed language A-FUN to WebAssembly built in TypeScript.

## Installation instructions
To install the software and use it in your local development environment, you must first set up a local development environment. From the root of the project:

Install WebAssembly Binary Toolkit (Ubuntu command - for other operating systems see [these instructions](https://github.com/WebAssembly/wabt))

```
$ sudo apt install wabt
```
If wabt raises any issues Node.js may need to be updated to latest version follow [these instructions](#npm-install-guide)
Install JavaScript and TypeScript dependencies using npm:

```
$ npm install
```
If npm install raises errors on Ubuntu systems follow [these steps](#npm-install-guide) otherwise for other systems follow [these instructions](https://nodejs.org/en/download)

Run all TypeScript tests with:
```
$ npm test
```

## Sources
The packages used by this application are specified in `package-lock.json`

# Npm install guide
Npm install might not work if you are not using a recent enough version of Node.js. The lowest version of node this project works with is v18.19.1, to get a working version try running:

Installing nvm
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
```
Restarting the shell
```
$ \. "$HOME/.nvm/nvm.sh"
```
Then run 
```
$ nvm install 22
```
To check if the correct version is downloaded
```
$ node -v
```

# Compiling TypeScript files

Once files and dependencies have been installed, you must compile the TypeScript project files to JavaScript through running the command:
```
$ npx tsc
```

# Running project

Once JavaScript files have been created, the project commands can be run from the root directory.

To compile any example program contained in the examples directory (making sure to omit the .fun extension) run the command:
```
$ node ./dist/src/execution.js <name-of-file-in-examples> 
```
