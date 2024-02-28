class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return ``
    }
}
class Triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg"><polygon points="200,10 350,190 50,190"
        fill="${this.shapeColor}"/><text x="150" y="175" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}
class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="0" y="0" rx="0" ry="0" 
        fill="${this.text}"/><text x="150" y="175" font-size="60" text-anchor="middle"fill="${this.textColor}">${this.shapeColor}</text></svg>`
    }
}

module.exports = { Circle, Triangle, Square }