const peso1 = 1.4
const peso2 = Number('2.0')
const peso3 = 1.0 // continua sendo 1

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))

const nota1 = 9.871
const nota2 = 6.871

const total = nota1 * peso1 + nota2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())