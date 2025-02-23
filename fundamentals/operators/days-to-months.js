const prompt = require('prompt-sync')()

const DAYS_IN_A_MONTH = 30

const days = parseInt(prompt('Days Amount: '))

const months = Math.floor(days / DAYS_IN_A_MONTH)

const daysLeft = days % DAYS_IN_A_MONTH

console.log(`${days} days are ${months} months and ${daysLeft} days`)