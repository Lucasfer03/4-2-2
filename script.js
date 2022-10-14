//Equilatero: Todos os lados iguais (ladoA == ladoB == ladoC)
//Isosceles: Dois lados iguais e um diferente (Caso especifico[else])
//Escaleno: Todos os lados diferentes (ladoA != ladoB != ladoC)

//Comparadores em JS: igual(==) * estritamente igual (===) * diferente (!=) * ou (||) * e (&&)

//a + b > c; b + c > a; a + c > b;

let ladoA, ladoB, ladoC;

ladoA = Number(prompt("Insira a medida de A: "))
ladoB = Number(prompt("Insira a medida de B: "))
ladoC = Number(prompt("Insira a medida de C: "))

if (ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoC + ladoA > ladoB) {
  alert("Os lados fornecidos sao compativeis com um triangulo!")
  if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
    alert("É um triângulo equilatero")
  } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
    alert("É um triângulo escaleno")
  } else {
    alert("É um triangulo isosceles")
  }
} else {
  alert("Os lados fornecidos nao sao compativeis com um triangulo!");
}

alert(`As medidas fornecidas foram:\nLado A: ${ladoA}\nLado B: ${ladoB}\nLado C: ${ladoC}`)