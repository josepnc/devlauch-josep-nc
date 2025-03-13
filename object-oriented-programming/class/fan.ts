type FanSize = 'small' | 'medium' | 'large'
type FanColor = 'white' | 'black' | 'gray'
type FanSpeed = 0 | 1 | 2 | 3
class Fan {
  public speed: FanSpeed

  constructor(
    public type: string,
    public size: FanSize,
    public color: FanColor
  ) {
    this.type = type
    this.size = size
    this.color = color
    this.speed = 0
  }

  public setType(type: string) {
    this.type = type
  }

  public getType () {
    return this.type
  }
  
  public setSize(size: FanSize) {
    this.size = size
  }

  public getSize () {
    return this.size
  }

  public setColor(color: FanColor) {
    this.color = color
  }

  public getColor () {
    return this.color
  }

  public setSpeed(speed: FanSpeed) {
    this.speed = speed
  }

  public getSpeed () {
    return this.speed
  }

}

const fan1 = new Fan('Sony', 'small', 'black')
fan1.setType('Samsung')
fan1.setSize('large')
fan1.setColor('black')
fan1.setSpeed(2)

console.log(fan1.type)
console.log(fan1.size)
console.log(fan1.color)
console.log(fan1.speed)