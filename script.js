function Calculator(firstValue, secondValue) {
    this.read = function () {

        this.firstValue = firstValue
        this.secondValue = secondValue

        // this.firstValue = +prompt('Enter First Number')
        // this.secondValue = +prompt('Enter Second Number')

        // або

        // this.firstValue = 10
        // this.secondValue = 3
    }

    this.sum = function () {
        return this.firstValue + this.secondValue;
    }

    this.mul = function () {
        return this.firstValue * this.secondValue;
    }
}

const calculator = new Calculator (10, 20);
calculator.read()
console.log('Sum :' + calculator.sum())
console.log('Mul :' + calculator.mul())