const prompt = require('prompt-sync')()

const age = parseInt(prompt('How old are you? '))

const message = (
  (age >= 0 && age <= 2)
    ? 'You are a baby'
    : (age >= 3 && age <= 13)
      ? 'You are a child'
      : (age >= 14 && age <= 17)
        ? 'You are a teenager'
        : (age >= 18 && age <= 29)
          ? 'You are a young adult'
          : (age >= 30 && age <= 60)
            ? 'You are an adult'
            : (age > 60)
              ? 'You are an elderly'
              : null
)

console.log(message ? message : 'The institution does not support your age, please try again')