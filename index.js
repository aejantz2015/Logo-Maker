const fs = require('fs');
const inquirer = require('inquirer');
const {circle, square, triangle} = require('./lib/shapes')

// prompts for the users to enter what they want their logo to look like
inquirer
    .prompt ([
        {
        name: 'shape',
        type: 'list',
        message:'Please select a shape for your logo',
        choices: ['Triange', 'Circle', 'Square']
        },
        {
        name: 'shapeColor',
        type: 'input',
        message: 'Please input the color keyword that you would like for your shape color'
        },
        {
        name: 'text',
        type: 'input',
        message: 'Please input up to three letters',
        },
        {
        name: 'textColor',
        type: 'input',
        message: 'Please input the color keyword that you would like for your text color'
        }
    ])