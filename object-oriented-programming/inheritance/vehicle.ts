class Vehicle {
  private isOn: boolean

  constructor(
    protected emoji: string,
    protected brand: string,
    protected model: string,
    protected year: number
  ) {
    this.emoji = emoji
    this.brand = brand
    this.model = model
    this.year = year
    this.isOn = false
  }

  run() {
    this.isOn = true
  }

  toString() {
    return `Emoji: ${this.emoji}\nBrand: ${this.brand}\nModel: ${this.model}\nyear: ${this.year}`
  }
}

class Car extends Vehicle {
  private isAirOn: boolean

  constructor(
    brand: string,
    model: string,
    year: number,
    private numOfDoors: number = 4,
  ) {
    super ('🏎️', brand, model, year)
    this.isAirOn = false
  }

  run(): string {
    return 'Brom'
  }

  airOn(): string {
    this.isAirOn = true
    return `AC On: ${this.isAirOn}`;
  }

  carToString(): string {
    const info = this.toString()

    return `Car:\n${info}\n# of Doors: ${this.numOfDoors}`
  }
}

class Motorcycle extends Vehicle {
  constructor(
    brand: string,
    model: string,
    year: number,
  ) {
    super ('🏍️', brand, model, year)
  }

  wheelie() {
    return '🛞'
  }

  run(): string {
    return 'Rrrum'
  }

  mcToString(): string {
    const info = this.toString()

    return `Motorcycle:\n${info}`
  }
}

const car1 = new Car('RedBull', 'RB19', 2023, 0)
console.log(car1.carToString())
console.log(car1.airOn())
console.log(car1.run())

const mc1 = new Motorcycle('Yamaha', 'YZ', 2025)
console.log(mc1.mcToString())
console.log(mc1.wheelie())
console.log(mc1.run())