interface Triangle {
  a: number
  b: number
  c: number
}

const t1: Triangle = {
  a: 7,
  b: 10,
  c: 5
}

const t2: Triangle = {
  a: 2,
  b: 3,
  c: 6
}

const isValidTriangle = ({ a, b, c }: Triangle) => {
  return (b + c) > a && (a + c) > b && (a + b) > c
}

console.log(isValidTriangle(t1))
console.log(isValidTriangle(t2))