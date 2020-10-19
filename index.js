// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//internal modules
const api = require('./modules/api.js');
const generateReadme = require('./modules/generateReadme.js');

const questions = [
    {
        type: 'input',
        message: 'what is your Github username? @',
        name: 'username',
        default: 'Mitchellcq',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid Github username.");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'what is the name of your Github Repository?',
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid Project Title.");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: 'Please enter a breif description of your Project.',
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a breif description of your Project.");
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        message: "What do you need to do to install this application?",
        name: 'installation'
    },
    {
        type: 'input',
        message: "What do you need to do to make this application work?",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

function writeNewFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! Your readme.md file has been generated")
    });
}

const writeFileAsync = util.promisify(writeNewFile);

//async function awaiting all info inputs and api calls
async function init() {
    try {
        //prompt user with questions
        const answers = await inquirer.prompt(questions);
        console.log("You entered: ", answers);
        console.log("Please wait while we load your github data");

        //Github api call
        const github = await api.getUser(answers);
        console.log("You're Github account: ", github);

        //send answers and github to readme generator
        console.log("Please wait while we generate your Readme.")
        const readme = generateReadme(answers, github);
        console.log(readme);

        // write to file
        await writeFileAsync('NewReadme.md', readme);

    } catch (error) {
        console.log('error');
    }
};

init();
