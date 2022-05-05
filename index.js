// TODO: Include packages needed for this application
const fs = require('fs');

const generatePage = require('./src/page-template');

// TODO: Create an array of questions for user input
const inquirer = require('inquirer');
    inquirer
        .prompt([
    {   type: 'input',
        name: 'description-1',
        message: 'Why did you build this project?'
    },
    {   type: 'input',
        name: 'description-2',
        message: 'What problem does the project solve?'
    },
    {   type: 'input',
        name: 'description-3',
        message: 'What did you learn?'
    },
    {   type: 'checkbox',
        name: 'table',
        message: 'Check the options you would like to include in your table of contents.',
        choices: ['Installation', 'Usage', 'Credits', 'License']
    },
    {   type: 'input',
        name: 'installation',
        message: 'Provide the steps required to install your project.'
    },
    {   type: 'input',
        name: 'usage',
        message: 'Provide instructions an examples for use.'
    },
    {   type: '',
        name: 'usage-image',
        message: 'Insert image here'
    },
    {   type: 'input',
        name: 'collaborators',
        message: 'List the name of your collaborator and link to their GitHub.'
    },
    {   type: 'input',
        name: 'assets',
        message: 'List the sources for any third-party assets used.'
    },
    {   type: 'input',
        name: 'tutorials',
        message: 'Enter link for any tutorials you followed.'
    },
    {   type: 'checkbox',
        name: 'license',
        message: 'Select the type of license you are using.',
        choices: ['MIT', 'GPLv3', 'GPL', 'N/A']
    },
    {   type: 'input',
        name: 'badges',
        message: ''
    },
    {   type: 'input',
        name: 'features',
        message: ''
    },
    {   type: 'input',
        name: 'contribute',
        message: ''
    }
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile('index.html', )



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
