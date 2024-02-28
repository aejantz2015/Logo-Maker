const {Circle} = require('./circle')

describe('Circle', () => {
    test('a Circle is created with matching parameters', () => {
        let testsvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">ZXC</text></svg>'
        let newsvg = new Circle ('green', 'purple', 'ZXC')
        expect(newsvg.render()).toEqual(testsvg)
    }) 
});