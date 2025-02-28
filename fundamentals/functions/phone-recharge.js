const prompt = require('prompt-sync')()

const MIN_MONTH_DURATION = 12
const MIN_RECHARGE = 20
const MAX_RECHARGE = 80

const SUPER_PROMO_MIN_AMOUNT = 38
const SUPER_MULTIPLIER = 2

const MEGARECHARGE = 36
const MEGA_MULTIPLIER = 3


function calculateRecharge(amount, duration) {
  if  (duration < MIN_MONTH_DURATION) return amount

  let multiplier = 1

  if (amount > MIN_RECHARGE) {
    if (duration > MEGARECHARGE) {
      multiplier = MEGA_MULTIPLIER
    } else if (
      amount >= SUPER_PROMO_MIN_AMOUNT &&
      amount <= MAX_RECHARGE
    ) {
      multiplier = SUPER_MULTIPLIER
    }
  }

  return amount * multiplier 
}


function main() {
  const name = prompt('What is your name? ')
  const amount = parseInt(prompt(`How much you would like to recharge? $`))
  const duration = parseInt(prompt('How long have you been subscribed?'))

  const recharge = calculateRecharge(amount, duration)
  const promo = recharge - amount

  console.log(`
    Thanks ${name}
    Recharge: $${recharge}
    Promo: $${promo}
    `)
  
}

main()