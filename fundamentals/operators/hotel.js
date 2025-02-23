const prompt = require('prompt-sync')()

const pricePerNight = 100

const currency = '$'

const discount = 0.05

const nights = parseInt(prompt('Cuantos días desea quedarse? -> '))

const subtotal = pricePerNight * nights
const orderDiscount = subtotal * discount
const total = subtotal - orderDiscount

console.log(`
    HOTEL RECEIPT\n
    Nights: ${nights}\n
    Subtotal: ${currency}${subtotal}\n
    Discount (5%): ${currency}${orderDiscount}\n
    Grand total: ${currency}${total}\n
    `)