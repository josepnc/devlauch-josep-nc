const prompt = require('prompt-sync')()

const REGULAR_TIME = 8
const overtimeMultiplier = 1.5

const calculateSalary = (hourlyRate, startTime, endTime) => {
  const [startHour] = startTime.split(':')
  const [endHour] = endTime.split(':')

  const workedHours = endHour - startHour
 
  let salary = 0
  
  if (workedHours <= 8) {
    salary = hourlyRate * workedHours
  } else {
    const overtime = workedHours - REGULAR_TIME
    salary = (REGULAR_TIME * hourlyRate) + ((overtime* hourlyRate) * overtimeMultiplier)

  }

  return salary
}

const main = () => {
  const hourlyRate = parseFloat(prompt('HOURLY RATE: $ '))
  const startTime = prompt(`START AT: `)
  const endTime = prompt('END AT: ')

  const salary = calculateSalary(hourlyRate, startTime, endTime)

  console.log(`SALARY: $${salary}`)
}

main()