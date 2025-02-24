const prompt = require('prompt-sync')()

const n = parseInt(prompt('Digite un número: '))

if (n > 0) {
    console.log('Positivo')
} else if (n < 0) {
    console.log('Negativo')
} else if (n === 0) {
    console.log('Cero')
} else {
    console.log('Por favor, introduce un número valido')
}