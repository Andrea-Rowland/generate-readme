// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown');
const licenses = ['None', 'MIT', 'BSD', 'GPL', 'GPLv3', 'Apache']

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide the steps required to install your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions an examples for use.'
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'List the name of your collaborator and link to their GitHub.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the type of license you are using.',
        choices: ['MIT', 'BSD', 'GPLv3', 'GPL', 'Apache', 'None']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'who worked on this?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
 }




// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', generateMarkdown({ ...answers}));
    })
 }

// Function call to initialize app
init();
