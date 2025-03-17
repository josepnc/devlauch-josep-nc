class Animal {
  constructor(
    protected name: string,
    protected species: string,
    protected age: number
  ) {
    this.name = name
    this.species = species
    this.age = age
  }

  makeSound() {
    return ''
  }

  toString() {
    return `Name: ${this.name}\nspecies: ${this.species}\nAge: ${this.age}`
  }
}

class Lion extends Animal {

  constructor(
    name: string,
    species: string,
    age: number
  ) {
    super(name, species, age)
  }

  makeSound(): string {
    return 'Roar...'
  }

  lionToString(): string {
    const info = this.toString()

    return `🦁:\n${info}`
  }
}

type ElephantSize = 'small' | 'medium' | 'large'
class Elephant extends Animal {

  constructor(
    name: string,
    species: string,
    age: number,
    private size: ElephantSize
  ) {
    super(name, species, age)
  }

  makeSound(): string {
    return 'Phhrr...'
  }

  elephantToString(): string {
    const info = this.toString()

    return `🐘:\n${info}\nSize: ${this.size}`
  }

}

const l1 = new Lion('Max', 'King', 8)
console.log(l1.makeSound())
console.log(l1.lionToString())

const el1 = new Elephant('Dumbo', 'Fly', 5, 'medium')
console.log(el1.makeSound())
console.log(el1.elephantToString())