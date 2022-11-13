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

  ${data.license}
  
  ![https://img.shields.io/badge/License-${data.license}-blue](https://img.shields.io/badge/License-${data.license}-blue)

  ## Description
  
  ${data.description}
  
  ## Author
  
  The author for this project is [${data.name}](https://github.com/${data.gitusername})
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#contributions)
  - [Tests](#tests)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${data.license}
  
  ## Features
  
  ${data.features}
  
  ## Contributions
  
  Contributions to the project can be offered at the repository here: [https://github.com/${data.gitusername}/${data.title}](https://github.com/${data.gitusername}/${data.title})
  
  ## Tests
  
  ${data.tests}

`;
}

module.exports = generateMarkdown;
