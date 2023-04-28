let entrada = 4181
let num1 = 0
let num2 = 1
let fibonacci = [0]

while ( num1 < entrada) {
  total = num1 + num2
  num2 = num1
  num1 = total

  fibonacci.push(num1)
}
console.log(fibonacci)

if (entrada == num1) {
  console.log("a entrada " + entrada + " pertence a sequência Fibonnaci")
} else {
  console.log("a entrada " + entrada + " não pertence a sequência Fibonnaci")
}