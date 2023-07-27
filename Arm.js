let sum = 0;
const prompt = require("prompt-sync")();
const number = prompt('Enter a three-digit positive integer: ');

let temp = number;
while (temp > 0) {
    let r = temp % 10;
    sum += r * r * r;
    temp = parseInt(temp / 10);
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}