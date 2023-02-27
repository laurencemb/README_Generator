const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
/* const questions = () =>  */
inquirer.prompt ([
    {
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
    },
    {
        type: 'checkbox',
        name: 'contents',
        message: 'Please select your readme segments',
        choices: ['contents', 'description', 'installation', 'usage', 'license', 'contributions', 'tests', 'questions']
        },
    {
    type: 'input',
    name: 'description',
    message: 'Please write your project description'
        },
  
    {
     type: 'input',
    name: 'installation',
    message: 'Please advise installation required'
     },
     {
    type: 'input',
    name: 'usage',
     message: 'Please advise application usage'
     },
     {
    type: 'checkbox',
    name: 'license',
    message: 'Please select your license',
    choices: ['MIT', 'Academic Free License v3.0', 'Creative Commons license', 'ISC']
    },
    {
    type: 'input',
    name: 'contribution',
    message: 'Please advise on your contributions'
    },
    {
    type: 'input',
    name: 'tests',
    message: 'Please advise on your testing'
    },
    {
    type: 'input',
    name: 'github',
    message: 'What is your github user name and link?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
    },
    {
    type: 'input',
    name: 'linkedIn',
    message: 'What is your linkedIn?'
    },





])
.then((response) => { console.log(response);
    const markdownTemplate = generateMarkdown(response)
fs.writeFile(`${response.title}.md`, /* JSON.stringify(response) */markdownTemplate, (error) => {
    return error
    ? console.error(error)
    : console.log('Your file was written successfully')
});

});

// function to write README file
/* function writeToFile(fileName, data) {
}
 */
// function to initialize program
/* function init() {

}
 */
// function call to initialize program
/* init();
 */