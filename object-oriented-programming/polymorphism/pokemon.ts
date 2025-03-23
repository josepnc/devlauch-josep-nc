abstract class Pokemon {
  constructor(
    public emoji: string,
    public name: string,
    public health: number = 100
  ) {
    this.emoji = emoji
    this.name = name
    this.health = health
  }

  isAlive() {
    return this.health > 0
  }

  receiveDamage(damage: number) {
    this.health = Math.max(0, this.health - damage)
  }

  heals(heal: number) {
    this.health = Math.min(100, this.health + heal)
  }

  toString() {
    return `Pokemon { ${this.emoji}, name: ${this.name}, health: ${this.health}}`
  }
}

class Pikachu extends Pokemon {
  private healSparkUsed: boolean = false

  constructor() {
    super('⚡', 'Pikachu')
  }

  thunderShock(opponent: Pokemon) {
    if (this.isAlive()) {
      const damage = 20
      opponent.receiveDamage(damage)
    } else {
      console.log(`${this.name} is dead and cannot attack`)
    }
  }

  quickAttack(opponent: Pokemon) {
    if (this.isAlive()) {
      const damage = 10
      opponent.receiveDamage(damage)
    } else {
      console.log(`${this.name} is dead and cannot attack`)
    }
  }

  healSpark(): void {
    if (this.isAlive() && !this.healSparkUsed) {
      const heal = 20
      this.heals(heal)
      this.healSparkUsed = true
    } else if (!this.isAlive()) {
      console.log(`${this.name} is dead and cannot heal.`)
    } else {
      console.log('Heal Spark can only be used once, use an attack.')
    }
  }
}

class Charizard extends Pokemon {
  private fireBreathBoost: number = 0
  private flamethrowerCooldown: number = 0

  constructor() {
    super('🔥', 'Charizard')
  }

  flamethrower(opponent: Pokemon) {
    if (this.isAlive()) {
      if (this.flamethrowerCooldown === 0) {
        const damage = 30 + this.fireBreathBoost
        opponent.receiveDamage(damage)
        this.fireBreathBoost = 0
        this.flamethrowerCooldown = 2
      } else {
        console.log(`${this.name} must wait ${this.flamethrowerCooldown} turn(s), to be able of use Flamethrower again.`)
      }
    } else {
      console.log(`${this.name} is dead and cannot attack`)
    }
    this.nextTurn()
  }

  scratch(opponent: Pokemon) {
    if (this.isAlive()) {
      const damage = 15 + this.fireBreathBoost
      opponent.receiveDamage(damage)
      this.fireBreathBoost = 0
    } else {
      console.log(`${this.name} is dead and cannot attack`)
    }
    this.nextTurn()
  }

  fireBreath(): void {
    if (this.isAlive()) {
      const heal = 10
      this.heals(heal)
      this.fireBreathBoost = 10
    } else {
      console.log(`${this.name} is dead and cannot heal`)
    }
    this.nextTurn()
  }

  private nextTurn() {
    if (this.flamethrowerCooldown > 0) {
      this.flamethrowerCooldown--
    }
  }
}

const pikachu1 = new Pikachu()
const charizard1 = new Charizard()

pikachu1.thunderShock(charizard1)
charizard1.flamethrower(pikachu1)
pikachu1.quickAttack(charizard1)
charizard1.flamethrower(pikachu1)
pikachu1.healSpark()
charizard1.fireBreath()
pikachu1.healSpark()
pikachu1.quickAttack(charizard1)
charizard1.scratch(pikachu1)
pikachu1.thunderShock(charizard1)
charizard1.flamethrower(pikachu1)
pikachu1.thunderShock(charizard1)
charizard1.scratch(pikachu1)
pikachu1.thunderShock(charizard1)
charizard1.scratch(pikachu1)
pikachu1.quickAttack(charizard1)
charizard1.flamethrower(pikachu1)



console.log(pikachu1.toString())
console.log(charizard1.toString())