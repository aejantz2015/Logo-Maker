class Triangle {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    render() {
        return `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg"><polygon points="200,10 350,190 50,190" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
};

module.exports = { Triangle };