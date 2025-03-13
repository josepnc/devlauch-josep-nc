type DogColor = 'black' | 'white'

interface Address {
  city: string
  state: string
}

class Person {
  constructor(public name: string, public address: Address) {
    this.name = name
    this.address = address
  }
}
class BabyDog {
  private age: number

  constructor(private name: string = '', public color: DogColor = 'black', public owner: Person) {
    this.name = name
    this.color = color
    this.age = 0
    this.owner = owner
  }

  public setAge = (age: number): void => {
    this.age++
  }

  public getAge = (): number => {
    return this.age
  }

  private cry = (): void {
    console.log('</3')
  }

  public bark = (): void => {
    console.log('GUAU GUAU!')
    this.cry()
  }

}

const p1 = new Person('Josep', { city: 'Santa Ana', state: 'SJ' })

const bd1 = new BabyDog('Oreo', 'black', p1)
bd1.bark()
bd1.owner.name
const bd2 = new BabyDog('Puppy', 'white', p1)
bd2.bark