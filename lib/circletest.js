const {Circle} = require('./shapes')

describe('Circle', () => {
    test('a Circle is created with matching parameters', () => {
        let test = ''
        let newsvg = new Circle ('Green', 'ZXC', 'purple')
        expect(newsvg.render()).toEqual(testsvg)
    }) 
});