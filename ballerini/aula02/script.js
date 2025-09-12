function adicionarTarefa() {
    // cria uma mensagem no elemento <p> do HTML
    let mensagem = "Tarefa adicionada com sucesso!";

     //pega o elemento com ID mensagem e atribui o valor da variavel mensagem
    document.getElementById("mensagem").textContent = mensagem;

     //pega o valor do que é escrito pelo usuário no <input>
    let inputTarefa = document.getElementById("inputTarefa")

    //cria uma variável para guardar o valor que o usuário guardou no input
    let tarefa = inputTarefa.value
 
    //essa variavel puxa o valor de <ul id= "listaTarefas">     
    let listaTarefas = document.getElementById("listaTarefas")

    //variável cria elementos <li>
    let novaTarefa = document.createElement("li")

    //o valor da variavel "tarefa" é atribuido ao li
        novaTarefa.textContent = tarefa

     //transforma a variavel listaTarefas em elemento pai do novaTarefa que é um li
        listaTarefas.appendChild(novaTarefa)

        //limpa o input do usuário
        inputTarefa.value = ""
}

