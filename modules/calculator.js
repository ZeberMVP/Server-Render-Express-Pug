const calculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    div: (a, b) => a / b
}

console.log(calculator.add(2,2))
console.log(calculator.sub(1,2))
console.log(calculator.div(4,2))

module.exports = calculator