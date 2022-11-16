// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

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
