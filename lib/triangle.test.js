const {Triangle} = require('./triangle')

describe('Triangle', () => {
    test('a Triangle is created with matching parameters', () => {
        let testsvg = '<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg"><polygon points="200,10 350,190 50,190" fill="yellow"/><text x="190" y="150" font-size="60" text-anchor="middle" fill="white">QWE</text></svg>'
        let newsvg = new Triangle ('yellow', 'white', 'QWE')
        expect(newsvg.render()).toEqual(testsvg)
    }) 
});