const entrada = 'Aqui irei inverter toda a sentença'

const entradaDividida = entrada.split('')

let saida; let array = []

for (i = entradaDividida.length; i >= 0; i--) {
  array.push(entradaDividida[i])
}

console.log(array.join(''))