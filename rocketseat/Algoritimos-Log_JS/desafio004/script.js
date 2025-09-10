/*
Capture 10 itens para compor a lista de supermercado

Após capturar os 10 itens, imprima-os, separando por virgula
*/

let itens = [];

 for(let item = 0; item < 10; item++) {
    let itemName = prompt("Digite o item " + (item + 1))

    itens[item] = itemName
 }

 alert(itens)