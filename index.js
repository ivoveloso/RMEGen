// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    `What is your GitHub username?`, //0
    `What is your email address?`,//1
    `What is your project's name?`,//2
    `Please write a short description of your project:`,//3
    `What kind of license should your project have?`,//4
    `What command should be run to install dependencies?`,//5
    `What command should be run to run tests?`,//6
    `What does the user need to know about using the repo?`,//7
    `What does the user need to know about contributing to the repo?`//8
];

const licenses = [
    `MIT`,
    `Mozzila`,
    'Apache',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {    
fs.writeFile(`${fileName}.md`,`${generateMarkdown(data)}\n`,
 (err) => err ? console.error(err) : console.log('README ready!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        message: questions[0],
        name: 'username',
      },
      {
        type: 'input',
        message: questions[1],
        name: 'email',
      },
      {
        type: 'input',
        message: questions[2],
        name: 'title',
      },
      {
        type: 'input',
        message: questions[3],
        name: 'description',
      },
      {
        type: 'list',
        message: questions[4],
        choices: licenses,
        name: 'license',
      },
      {
        type: 'input',
        message: questions[5],
        name: 'install',
      },
      {
        type: 'input',
        message: questions[6],
        name: 'test',
      },
      {
        type: 'input',
        message: questions[7],
        name: 'usage',
      },
      {
        type: 'input',
        message: questions[8],
        name: 'contribute',
      },
    ])
    .then((data) => writeToFile(`README`, data));}

// Function call to initialize app
init();



