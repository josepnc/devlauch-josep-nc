const createFraction = (numerator, denominator) => {
  return {
    numerator,
    denominator
  }
}

const add = (f1, f2) => {
  const numerator = (f1.numerator * f2.denominator) + (f1.denominator * f2.numerator)
  const denominator = f1.denominator * f2.denominator

  return createFraction(numerator, denominator)
}

const subtract = (f1, f2) => {
  const numerator = (f1.numerator * f2.denominator) - (f1.denominator * f2.numerator)
  const denominator = f1.denominator * f2.denominator

  return createFraction(numerator, denominator)
}

const multiply = (f1, f2) => {
  const numerator = f1.numerator * f2.numerator
  const denominator = f1.denominator * f2.denominator

  return createFraction(numerator, denominator)
}

const divide = (f1, f2) => {
  const numerator = f1.numerator * f2.denominator
  const denominator = f1.denominator * f2.numerator

  return createFraction(numerator, denominator)
}

const createFractionWithFunctions = (numerator, denominator) => {
  const f1 = createFraction(numerator, denominator)

  return{
    ...f1,
    add: (f2) => add(f1, f2),
    subtract: (f2) => subtract(f1, f2),
    multiply: (f2) => multiply(f1, f2),
    divide: (f2) => divide(f1, f2),
  }
}

const f1 = createFraction (3, 4)
const f2 = createFraction (2, 3)

console.log(add(f1, f2))
console.log(subtract(f1, f2))
console.log(multiply(f1, f2))
console.log(divide(f1, f2))

const f3 = createFractionWithFunctions(3, 4)
const f4 = createFraction(2, 3)

console.log(f3.add(f4))
console.log(f3.subtract(f4))
console.log(f3.multiply(f4))
console.log(f3.divide(f4))