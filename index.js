// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPLv3', 'MPL 2.0', 'Apache 2.0', 'Boost Software 1.0', 'The Unlicense', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFileSync(fileName, data, err => {

        if (err) {

            return console.log(err);

        }

        console.log('Success! Your README.md file has been generated')

    });

}

// TODO: Create a function to initialize app
async function init() {

    try {

        // Prompt the user questions to populate the README.md
        const answers = await inquirer.prompt(questions);

        // Generate Markdown
        const markdown = generateMarkdown(answers);

        // Write new README.md to dist directory
        writeToFile('../Develop/README.md', markdown);

    }

    catch (error) {

        console.log('error');

    }

};

// Function call to initialize app
init();
