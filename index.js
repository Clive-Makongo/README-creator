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
  },
  `Who contributed to this project?`,
  `What are the tests for your project?`,
  `Questions?`,
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
