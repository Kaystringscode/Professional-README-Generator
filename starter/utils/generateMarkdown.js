function renderContributingSection(confirmContributers, data) {
  if (!confirmContributers) {
    return `
  Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.
    `;
  } else {
    return `
  ${data}
    `;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
      
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-green)

  ## Description
  ${data.what}

  ${data.why}

  ${data.how}


  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tTests)
  6. [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usageM}

  ## License 
  This project is licensed under the ${data.license} license.



  ## Contributing
  ${data.contribute}

  ## Tests
  To run tests, run the following command:
  ${data.test}
  
  ## Questions
  If you have any questions about this repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.username}](https://www.github.com/${data.username}).



`;
}

module.exports = generateMarkdown;
