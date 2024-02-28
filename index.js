const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes')

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
        message: 'Please input the color keyword that you would like for your shape color.'
        },
        {
        name: 'text',
        type: 'input',
        message: 'Please input up to three letters.',
        },
        {
        name: 'textColor',
        type: 'input',
        message: 'Please input the color keyword that you would like for your text color.'
        },
    ])

    .then((answers) => {

        let svg

        if (answers.shape === 'Square') {
            svg = new Square (answers.shapeColor, answers.textColor, answers.text)
        };

        if (answers.shape === 'Triange') {
            svg = new Triangle (answers.shapeColor, answers.textColor, answers.text)
        };

        if (answers.shape === 'Circle') {
            svg = new Circle (answers.shapeColor, answers.textColor, answers.text)
        };
    
    
    fs.writeFile('./output/logo.svg', svg.render(), (err) =>
        err ? console.log(err) : console.log('There is a new generated logo.svg')
        )
    });