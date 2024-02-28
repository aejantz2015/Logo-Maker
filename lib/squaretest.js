const {Square} = require('./shapes')

describe('Square', () => {
    test('a square is created with matching parameters', () => {
        let test = '<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="0" y="0" rx="0" ry="0" fill="${this.text}"/><text x="150" y="175" font-size="60" text-anchor="middle"fill="${this.textColor}">${this.shapeColor}</text></svg>'
        let newsvg = new Square ('black', 'ASD', 'pink')
        expect(newsvg.render()).toEqual(testsvg)
    }) 
});