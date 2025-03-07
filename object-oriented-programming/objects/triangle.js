const t1 = {
  a: 7,
  b: 10,
  c: 5
}

const t2 = {
  a: 2,
  b: 3,
  c: 6
}

const isValidTriangle = (triangle) => {
  const { a, b, c } =  triangle

  return (b + c) > a && (a + c) > b && (a + b) > c
}

console.log(isValidTriangle(t1))
console.log(isValidTriangle(t2))