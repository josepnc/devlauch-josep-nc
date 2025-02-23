const prompt = require('prompt-sync')()

const name = prompt('What is your name? ')
const height = parseFloat(prompt('How tall are you? '))
const weight = parseFloat(prompt('How much do you weight? '))

const bmi = weight / Math.pow(height, 2)

console.log(`Hi ${name}, your BMI is ~${bmi.toFixed(2)}`)