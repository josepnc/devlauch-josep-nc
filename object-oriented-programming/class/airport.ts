type TrafficLevel = 'low' | 'middle' | 'high'

class Airport {
  private _name: string
  private _location: string
  private _runwayStatus: boolean
  private _trafficLevel: TrafficLevel

  constructor(name: string, location: string) {
    this._name = name
    this._location = location
    this._runwayStatus = true
    this._trafficLevel = 'low'
  }

  get runwayStatus(): boolean {
    return this._runwayStatus
  }

  set runwayStatus(status: boolean) {
    this._runwayStatus = status
  }

  get trafficLevel(): TrafficLevel {
    return this._trafficLevel
  }

  set trafficLevel(level: TrafficLevel) {
    this._trafficLevel = level
  }

  changeTrafficLevel(level: TrafficLevel): void {
    this.trafficLevel = level
    console.log(`El nivel de tráfico se ha cambiado a ${level} en el aeropuerto ${this._name}`)
  }

  emergencyLanding(): void {
    this.runwayStatus = false
    this.trafficLevel = 'high'
    console.log(`Aterrizaje de emergencia en el aeropuerto ${this._name}. La pista esta cerrada y el nivel trafico aumento a alto`)
  }

  displayInfo(): void {
    console.log(`Nombre: ${this._name}`)
    console.log(`Ubicación: ${this._location}`)
    console.log(`Estado de la pista: ${this.runwayStatus}`)
    console.log(this.trafficLevel)
  }
}

const myAirport = new Airport('SJO', 'SJ,Costa Rica')

myAirport.displayInfo()
myAirport.changeTrafficLevel('middle')
myAirport.displayInfo()
myAirport.emergencyLanding()
myAirport.displayInfo()