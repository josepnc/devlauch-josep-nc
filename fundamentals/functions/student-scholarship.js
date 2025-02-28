const prompt = require('prompt-sync')()

const REJECT_ASSISTANT_GRADE = 'C'
const AMOUNT_OF_GRADES = 4
const MIN_GRADE = 8
const MIN_AVERAGE_GRADE = 8.5
const FAST_FORWARD_GRADE = 9

function validateScholarship(grade1, grade2, grade3, grade4, assistantGrade){
  if (assistantGrade === REJECT_ASSISTANT_GRADE) return false

  if (grade1 < MIN_GRADE || grade2 < MIN_GRADE || grade3 < MIN_GRADE || grade4 < MIN_GRADE) {
    return false
  }

  const average = (grade1 + grade2 + grade3 + grade4) / AMOUNT_OF_GRADES

  if (average < MIN_AVERAGE_GRADE) {
    return false
  } else {
    if (average < FAST_FORWARD_GRADE && !(assistantGrade === 'A' || assistantGrade === 'B')) {
      return false
    }
  }

  return true
}


function main() {
  const grade1 = parseFloat(prompt('Grade #1: '))
  const grade2 = parseFloat(prompt('Grade #2: '))
  const grade3 = parseFloat(prompt('Grade #3: '))
  const grade4 = parseFloat(prompt('Grade #4: '))

  const assistantGrade = prompt('Assistant Grade (A, B, C): ').toUpperCase()

  const isEligible = validateScholarship(grade1, grade2, grade3, grade4, assistantGrade)
  
  if (isEligible) {
    console.log('Congrats! You are eligible for the scholarship')
  } else {
    console.log('Sorry! You are not eligible for the scholarship')
  }
}

main()
