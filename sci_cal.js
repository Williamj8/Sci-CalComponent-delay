//calculator class
var Calculator = function (a, b) {

    this.add = function (a, b) {
        return a + b;
    };

    this.subtract = function (a, b) {
        return a - b;
    };

    this.multiply = function (a, b) {
        return a * b;
    };

    this.divide = function (a, b) {
        if (a / b === Infinity) {
            return Infinity - Infinity;
        } else {
            return a / b;
        }
    };

};

var calculator = new Calculator();



//Continue writing the following code from the previous class as we need the Calculator class to be extended to write Scientific calculator.

function scientificCalculator() {};

scientificCalculator.prototype = Object.create(Calculator.prototype);
scientificCalculator.prototype.constructor = Calculator;


scientificCalculator.prototype.sin = function (a) {
    return Math.sin(a);
};

scientificCalculator.prototype.cos = function (a) {
    return Math.cos(a);
};

scientificCalculator.prototype.tan = function (a) {
    return Math.tan(a);
};

scientificCalculator.prototype.log = function (a) {
    return Math.log(a);
};



//Again given we have Calculator class available with component.

var withExponents = function () {
        this.pow = function (x, y) {
            return Math.pow(x, y);
        };
        this.multiplyExp = function (x, y) {
                return (Math.pow(x[0], x[1]) * Math.pow(y[0, y[1]))
                };
                this.divideExp = function (x, y) {
                    return (Math.pow(x[0], x[1]) / Math.pow(y[0, y[1]))
                    };
                    return this;
                };

                var calculator = new Calculator();

                withExponents.call(calculator.prototype);

                //Delay

                var delay = function (timeout, method, property, params) {
                    return setTimeout(function () {
                        method.property(params[0], params[1]);
                    }, timeout)
                };