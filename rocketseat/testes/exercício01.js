// 1. Declare uma variável de nome weight
let weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight);

/* 3. Declare uma variável e atribua valores para cada um dos dados:
    *name 
    *age: Number (Integer)
    *stars: Number (Float)
    *isSubscribed: Boolean
    
*/

let name = "João";
let age = 18;
let stars = 1.6;
let isSubscribed = true;

/* 4. A Variável student abaixo é que tipo de dado?


4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    atenção substitua <name> <age> <weight> pelos valores de cada propriedade do objeto
*/

//4
console.log(typeof student);

//4.1
let student = {
  name: "João",
  age: 18,
  weight: 88,
  isSubscribed: true,
};

//4.2
console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
);

//5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente Array vazio.

let students = [];

//6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4.

students = [student];

console.log(students);

//7. Coloque no console o valor da posição zero do Array acima

console.log(students[0]);

//8. Crie um novo student e coloque na posiação 1 do Array students

const john = {
  name: "John",
  age: 24,
  weight: 75,
  isSubscribed: false,
};

students = [student, john];

console.log(student);

//9. Sem rodar o código, responda qual é a respota do código abaixo e por que? Após sua resposta, rode o código e veja se acertou.

console.log(a);
var a = 1;
