const botaoAdicionar = document.getElementById('botaoAdicionar');
const inputTarefa = document.getElementById('novaTarefa');
const listaTarefas = document.getElementById('listaTarefas');
const itensTarefas = document.getElementById('itensTarefas');

let tarefas = [];

function adicionarTarefa() {
    const texto = inputTarefa.value.trim();
    
    if (texto === '') {
        alert('Digite uma tarefa!');
        return;
    }
    
    const tarefa = {
        id: Date.now(),
        texto: texto
    };
    
    tarefas.push(tarefa);
    
    inputTarefa.value = '';
    inputTarefa.focus();
    
    renderizarTarefas();
}


function renderizarTarefas() {
    itensTarefas.innerHTML = '';
    const tarefasExibidas = [...tarefas];

    tarefasExibidas.forEach(tarefa => {
        const li = document.createElement('li');
        li.className = 'tarefa';
        
        li.innerHTML = `
            <span class="tarefa-texto">${tarefa.texto}</span>
        `;
        
        itensTarefas.appendChild(li);
    });
}

botaoAdicionar.addEventListener('click', adicionarTarefa);
