function adicionarTarefa() {
    // recebe valor do input do usuário
    const inputTarefa = document.getElementById("inputTarefa")

    //cria uma variável para guardar o valor que o usuário guardou no input
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

        if (tarefa == "") {
            //mostre uma mensagem de erro
            let mensagemErro = "Digite uma tarefa para adiciona-la na sua lista!"
            mensagem.textContent = mensagemErro
            mensagem.style.color = "#A34743"
        } else {
            //mensagem de tarefa adicionada com sucesso
            let mensagemSucesso = "Tarefa adicionada com sucesso!";
            mensagem.textContent = mensagemSucesso;
            mensagem.style.color = "#28A745"

            //cria um novo item (li) e insere na (lista ul) 
            const listaTarefas = document.getElementById("listaTarefas")
            let novaTarefa = document.createElement("li")
            novaTarefa.textContent = tarefa
            listaTarefas.appendChild(novaTarefa)
         }
}

//  