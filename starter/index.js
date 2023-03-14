const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'what',
        message: 'What is your project about? (write a short description of your project)',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please describe what your project is about!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?',
        
    },

    {
        type: 'input',
        name: 'how',
        message: 'How will someone use this?',
    },

    {
        type: 'input',
        name: 'table of content',
        message: 'Kindly list the table of contents for this project',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation steps and instructions for your project.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please provide your installation steps instructions!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usageM',
        message: 'How will someone use this?',
      
    },

    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },

    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other developers to contribute?',
        default: true
    },

    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributing.',
    },

    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test the app.',
    },

    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username? (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'credits',
        message: 'Who and Where have you gotten resources for your project?',
       
    },
];

// // // function to write README file

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./My-README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


// function to prompt questions and store user inputs
const init = () => {

    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}
// // function call to initialize program
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})