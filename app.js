'use strict';

{/* <label class="todo__item">
<input type="checkbox">
<div>teste de item 1</div>
<input type="button" value="X"> 
</label> */}

// Criando uma função para criar os itens da lista

let criarItem = (tarefa,status) => {
    let item = document.createElement("label"); // nesta linha estou direcionando o código para criar um elemento do tipo label no documento HTML
    item.classList.add("todo__item"); // adicionando a classe todo-item ao label
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${tarefa}</div>
        <input type="button" value="X">
    
    `
    document.getElementById("todoList").appendChild(item); //Aqui estou pegando o elemento do html por ID e estou adicionando o elemento item a ele
}


