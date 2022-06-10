const sum = (num1, num2) => console.log(`${num1} + ${num2} = ${num1 + num2}`);
const sub = (num1, num2) => console.log(`${num1} - ${num2} = ${num1 - num2}`);
const div = (num1, num2) => console.log(`${num1} / ${num2} = ${num1 / num2}`);
const mult = (num1, num2) => console.log(`${num1} x ${num2} = ${num1 * num2}`);


module.exports = {
    sum,
    sub,
    div,
    mult
}