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
  5. [Tests](#tests)
  6. [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usageM}

  ## License 
  This project is licensed under the ${data.license} license.


  ## Contributing
  ${data.contribute}




`;
}

module.exports = generateMarkdown;
