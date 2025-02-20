const eventName = 'Eliminatorias Sudamericanas'

const day = 22
const month = 11
const year = 2023

const date = `${day}/${month}/${year}`

const hour = 20
const minutes = 30

const time = `${hour}:${minutes}`

const formatHour = hour - 12
const formatTime = `${formatHour}:${minutes}PM`


const localTeam = 'Argentina'
const awayTeam = 'Brasil'

const localTeamScore = 1
const awayTeamScore = 0

const score = `${localTeamScore}-${awayTeamScore}`

console.log(`
    Tournament: ${eventName} - ${time}\n
    Teams: ${localTeam} VS ${awayTeam}\n
    Result: ${score}
    `)