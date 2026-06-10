// Elementos do DOM
const botaoAdicionar = document.getElementById('botaoAdicionar');
const inputTarefa = document.getElementById('novaTarefa');
const selectPrioridade = document.getElementById('opcoes');
const listaTarefas = document.getElementById('listaTarefas');

// Array para armazenar as tarefas
let tarefas = [];
let proximoId = 1;

// Função para adicionar tarefa
function adicionarTarefa() {
    const texto = inputTarefa.value.trim();
    const prioridade = selectPrioridade.value;
    
    if (texto === '') {
        alert('Digite uma tarefa!');
        return;
    }
    
    const tarefa = {
        id: proximoId++,
        texto: texto,
        prioridade: prioridade
    };
    
    tarefas.push(tarefa);
    
    // Limpar input
    inputTarefa.value = '';
    inputTarefa.focus();
    
    // Renderizar tarefas
    renderizarTarefas();
}

// Função para remover tarefa
function removerTarefa(id) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    renderizarTarefas();
}

// Função para renderizar as tarefas
function renderizarTarefas() {
    listaTarefas.innerHTML = '';
    
    tarefas.forEach(tarefa => {
        const div = document.createElement('div');
        div.className = `tarefa ${obterClassePrioridade(tarefa.prioridade)}`;
        
        const nomesPrioridade = {
            '1': 'Baixo',
            '2': 'Médio',
            '3': 'Alto'
        };
        
        div.innerHTML = `
            <div class="tarefa-info">
                <div class="tarefa-titulo">${tarefa.texto}</div>
                <span class="tarefa-prioridade ${obterClassePrioridade(tarefa.prioridade)}">
                    ${nomesPrioridade[tarefa.prioridade]}
                </span>
            </div>
            <button class="botao-remover" onclick="removerTarefa(${tarefa.id})">Remover</button>
        `;
        
        listaTarefas.appendChild(div);
    });
}

// Função auxiliar para obter classe de prioridade
function obterClassePrioridade(prioridade) {
    const mapa = {
        '1': 'baixo',
        '2': 'medio',
        '3': 'alto'
    };
    return mapa[prioridade];
}

// Event Listeners
botaoAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarTarefa();
    }
});

// Renderizar inicial
renderizarTarefas();
