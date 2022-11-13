// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Answer the follow questions to generate a README.md for your project. Please use complete sentences. \n What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is your GitHub user name?',
    name: 'gitusername',
  },
  {
    type: 'input',
    message: 'Please give a brief description of your project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What features does your project have?',
    name: 'features',
  },
  {
    type: 'input',
    message: 'Please provide instructions for installing your project',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'How will other developers use this project?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What license do you want to add to your project?',
    name: 'license',
    choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
  },
  {
    type: 'input',
    message: 'How can others contribute to your project?',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'What testing would be applicable for this project?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Are there any other developers that need to be credited for contributions on this project?',
    name: 'credits',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    console.log(response)
    fs.appendFile('README.md', generateMarkdown(response), (err) =>
    err ? console.error(err) : console.log('We have your information now!')
  );
}
  );
}
// Function call to initialize app
init();
