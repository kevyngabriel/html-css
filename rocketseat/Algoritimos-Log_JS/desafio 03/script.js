/* 
Solicitar o nome do aluno e as 3 notas do bimestre, calcular a média daquele aluno

A média positiva deve ser igual ou maior que 6

Se o aluno passou no bimestre, dar os parabéns.

Se o aluno n]ao passou no bimesntre, motivar o aluno a dar seu melhor na prova de recuperação

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt('Qual o nome do aluno(a) ?')
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

/* fazer a média
(n1 + n2 + n3) / 3*/

let average = (Number(n1) + Number(n2) + Number(n3)) / 3
average = average.toFixed(2)

if (average => 6) {
    alert("Parabéns, " + student + "! Sua média foi de: " + average)
} else {
    alert(student + " estude para sua prova de recuperação! Sua média foi de: " + average)
}