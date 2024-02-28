const {Triangle} = require('./shapes')

describe('Triangle', () => {
    test('a Triangle is created with matching parameters', () => {
        let test = '<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg"><polygon points="200,10 350,190 50,190"fill="${this.shapeColor}"/><text x="150" y="175" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>'
        let newsvg = new Triangle ('white', 'QWE', 'yellow')
        expect(newsvg.render()).toEqual(testsvg)
    }) 
});