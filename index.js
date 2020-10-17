// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const axios = require('axios');

//questions with inquirer:
//project name --> title of readme
//repo name
//github username
//project description
//installation instructions
//usage info
//how to contribute
//test instructions
//email
//each in respective area

const questions = [
    {
        type: 'input',
        message: 'what is your Github username? @',
        name: 'username',
        default: 'Mitchellcq',
        validate: function (answer) {
            if (answer.length < 1 || typeOf(answer) !== 'string') {
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
            if (answer.length < 1 || typeOf(answer) !== 'string') {
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
            if (answer.length < 1 || typeOf(answer) !== 'string') {
                return console.log("Please enter a breif description of your Project.");
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

//async function awaiting all info inputs and api calls
async function init() {
    try {
        //prompt user with questions
        const answers = await inquirer.prompt(questions);
        console.log("You entered: ", answers);
        console.log("Please wait while we load your github data");

        //Github api call
        const github = await api.getuser(answers);
    }
}


//make this function external?
function generateReadme() {

};