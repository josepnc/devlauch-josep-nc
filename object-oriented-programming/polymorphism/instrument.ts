type InstrumentType = 'viento' | 'cuerda' | 'percusión'

abstract class Instrument {
  constructor(public type: InstrumentType) {

  }

  play() {}

}

class Guitar extends Instrument{
  constructor() {
    super('cuerda')
  }

  play(): void {
    console.log('🎸 Strum Strum Strum...')
  }
  
}

class Flute extends Instrument{
  constructor() {
    super('viento')
  }

  play(): void {
    console.log('🪈 Whoosh Whoosh Whoosh...')
  }
}

class Drums extends Instrument{
  constructor() {
    super('percusión')
  }

  play(): void {
    console.log('🥁 Boom Boom Boom...')
  }
}

class Artist {
  constructor() {}

  playInstrument(instrument: Instrument) {
    instrument.play()
    console.log(instrument.type)
  }
}

const guitar1 = new Guitar()
const flute1 = new Flute()
const drums1 = new Drums()
const artist1 = new Artist()

artist1.playInstrument(guitar1)
artist1.playInstrument(flute1)
artist1.playInstrument(drums1)