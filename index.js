// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "author",
    message: "What is the name of the author?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "repo",
    message: "What is the name of your GitHub repository?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project?",
  },
  {
    type: "input",
    name: "github",
    message: "What kind of license should you project have?",
  },
  {
    type: "list",
    message: "Please select type of License ",
    name: "license",
    choices: [
      {
        name: "None",
        value: "a free license",
      },
      {
        name: "MIT",
        value: "MIT",
      },
      {
        name: "APACHE 2.0",
        value: "APACHE 2.0",
      },
      {
        name: "GPL 3.0",
        value: "GPL 3.0",
      },
      {
        name: "BSD 3",
        value: "BSD 3",
      },
    ],
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be used to install dependencies?",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be used to run tests?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("README file created successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("READMEv2.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
