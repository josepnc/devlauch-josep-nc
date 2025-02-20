const gymName = 'Elite Fitness Center'
const gymType = 'Boutique'

const location = 'Palo Alto, California'

const payment = 150
const renewal = 'Monthly'
const currency = '$'

const scheduleOpen = '06:00'
const sheduleClose = '22:00'

const trainersAmount = 10

const amenety1 = 'Sauna'
const amenety2 = 'Piscina'
const amenity3 = 'Clases grupales'

console.log(`
    Place: ${gymName}(${gymType}). ${location}.\n
    Membership: ${currency}${payment}/${renewal}.\n
    Schedule: ${scheduleOpen} - ${sheduleClose}.\n
    Team: ${trainersAmount}\n
    Amenities: ${amenety1}, ${amenety2} and ${amenity3}.
    `)