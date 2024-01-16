const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: `input`,
    name: `title`,
    message: `What is your Title?`,
  },
  {
    type: `input`,
    name: `description`,
    message: `What is your Description?`,
  },
  {
    type: `input`,
    name: `install`,
    message: `How do you install your project?`,
  },
  {
    type: `input`,
    name: `description`,
    message: `How do you use your project?`,
  },
  {
    type: `list`,
    name: `license`,
    message: `What License would you like to use?`,
    choices: [`MIT`, `Apache`, `GNU`],
  },
  {
    type: `input`,
    name: `contributing`,
    message: `Who worked on thid project?`,
  },
  {
    type: `input`,
    name: `tests`,
    message: `How do you test your project?`,
  },
  {
    type: `input`,
    name: `questions`,
    message: `What are the frequently asked questions?`,
  },
];

// function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log("Success!")
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
        writeToFile(data);

    });

}

// function call to initialize program
init();
