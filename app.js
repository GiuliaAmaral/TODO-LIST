'use strict';

// Criando uma função para criar os itens da lista

let bancoDados = [



];

let getBanco = () => JSON.parse(localStorage.getItem ("todoList")) ?? [];

let criarItem = (descricao, status, indice) => {
    let item = document.createElement("label"); // nesta linha estou direcionando o código para criar um elemento do tipo label no documento HTML
    item.classList.add("todo__item"); // adicionando a classe todo-item ao label
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${descricao}</div>
        <input type="button" value="X" data-indice=${indice}>
    
    `
    document.getElementById("todoList").appendChild(item); //Aqui estou pegando o elemento do html por ID e estou adicionando o elemento item a ele

}



let limparItem = () => {
    let toDoList = document.getElementById("todoList");
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.lastChild);
    }
}

let atualizaLista = () => {
    limparItem();
    bancoDados.forEach((item, indice) => criarItem(item.tarefa, item.status, indice)); //adicionando as tarefas e status ao banco de dados sempre que for criado um novo item
}

let inserirItem = (evento) => {
    let tecla = evento.key;
    let texto = evento.target.value;
    if (tecla === "Enter") {
        bancoDados.push ({ "tarefa": texto, "status": "" }); //adicionando tarefa sempre que teclar o Enter
        atualizaLista();
        evento.target.value = "";
    }

}

let removerItem = (indice) => {
    bancoDados.splice (indice, 1);
        atualizaLista();
    }


let atualizarItem = (indice) => {
    bancoDados[indice].status = bancoDados[indice].status === "" ? "checked" : "";
    atualizaLista();
}

let cliqueItem = (evento) => {
    let elemento = evento.target;
    if (elemento.type === "button") {
        let indice = elemento.dataset.indice;
        removerItem(indice);
         
    } else if (elemento.type ==="checkbox") {
        let indice =elemento.dataset.indice;
        atualizarItem(indice);
    }

}

document.getElementById("newItem").addEventListener("keypress", inserirItem);
document.getElementById('todoList').addEventListener("click", cliqueItem);

atualizaLista();    //atualiza a lista sempre que inserir um novo item