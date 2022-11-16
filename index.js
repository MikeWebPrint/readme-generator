// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const renderLicenseBadge = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Answer the follow questions to generate a README.md for your project. \n Questions indicated by (FS) should be answered in full sentences. \n What is your name?',
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
    message: 'Please give a brief description of your project. (FS)',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What features does your project have? (FS)',
    name: 'features',
  },
  {
    type: 'input',
    message: 'Please provide instructions for installing your project. (FS)',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'How will other developers use this project? (FS)',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What license do you want to add to your project?',
    name: 'license',
    choices: ['MIT', 'GNU_AGPLv3', 'GNU_GPLv3', 'GNU_LGPLv3', 'Mozilla_Public_License_2.0', 'Apache_License_2.0', 'Boost_Software_License_1.0', 'The_Unlicense'],
  },
  {
    type: 'input',
    message: 'What testing would be applicable for this project? (FS)',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'Are there any other developers that need to be credited for contributions on this project? (FS)',
    name: 'credits',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(data.license)
  renderLicenseBadge(data.license);
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Open your new README file')
  )
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    writeToFile('README.md', response)
  }
  );
}
// Function call to initialize app
init();
