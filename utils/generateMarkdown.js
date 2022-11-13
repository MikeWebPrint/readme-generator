// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Author
  
  The author for this project is ${data.name}. View GitHub repository here: [https://github.com/${data.name}](https://github.com/${data.name})
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  
  ## Installation
  
  ${data.installation}
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${data.license}
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  
  ## Features
  
  ${data.features}
  
  ## How to Contribute
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}

`;
}

module.exports = generateMarkdown;
