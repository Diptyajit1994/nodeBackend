# nodeBackend
A simple node based server app to calculate patient BMI data and return BMI CATEGORY and HEALTH RISK information

## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.17.5

    $ npm --version
    6.14.14

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
## Install

    $ git clone https://github.com/Diptyajit1994/nodeBackend
    $ cd nodeBackend
    $ npm install


## Running the  server project Compiles and hot-reloads for development

    $ npm run dev

## Compiles and minifies for production

    $ npm run build
    
## Run your tests

    $ npm run test
