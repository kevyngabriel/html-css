/* 
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword

*/

function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + "está andando";
  };
}

const kevyn = new Person("Kévyn");
const joao = new Person("Joao");
console.log(kevyn.walk());
console.log(joao.walk());
