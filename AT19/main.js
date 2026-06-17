// 1. Seleção dos elementos do DOM (Mantido igual)
const nomeCliente = document.getElementById('nomeCliente');
const nomeProduto = document.getElementById('nomeProduto');
const precoProduto = document.getElementById('precoProduto');
const quantidadeProduto = document.getElementById('quantidadeProduto');
const botaoCalcular = document.getElementById('calcular');
const listaResultados = document.getElementById('listaResultados');

// 2. Funções utilitárias (Declaradas fora do evento para não serem recriadas a cada clique)
const calcularTotal = (valorUnitario, quantidade) => valorUnitario * quantidade;
const formatarMoeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// 3. Evento principal
botaoCalcular.addEventListener('click', () => {
    // Captura dos valores e remoção de espaços em branco (.trim())
    const cliente = nomeCliente.value.trim();
    const produto = nomeProduto.value.trim();
    const custoUni = parseFloat(precoProduto.value) || 0;
    const qtd = parseInt(quantidadeProduto.value) || 0;

    // Validação mais completa
    if (!cliente || !produto || custoUni <= 0 || qtd <= 0) {
        alert("Por favor, preencha todos os campos corretamente (valores devem ser maiores que zero).");
        return;
    }

    // Cálculos Unitários
    const lucroUnitario = custoUni * 0.3;
    const impostoUnitario = custoUni * 0.25;
    const valorVendaUnitario = custoUni + lucroUnitario + impostoUnitario;

    // Cálculos Totais (Usando a função genérica que criamos lá em cima)
    const custo = calcularTotal(custoUni, qtd);
    const lucro = calcularTotal(lucroUnitario, qtd);
    const imposto = calcularTotal(impostoUnitario, qtd);
    const valorVenda = calcularTotal(valorVendaUnitario, qtd);

    // Renderização do HTML
    listaResultados.innerHTML = `
        <li><strong>Cliente:</strong> ${cliente}</li>
        <li><strong>Produto:</strong> ${produto}</li>
        <li><strong>Quantidade:</strong> ${qtd}</li>
        
        <hr>
        <h3>Valores por Unidade</h3>
        <li><strong>Custo Unitário:</strong> ${formatarMoeda(custoUni)}</li>
        <li><strong>Lucro Unitário (30%):</strong> ${formatarMoeda(lucroUnitario)}</li>
        <li><strong>Imposto Unitário (25%):</strong> ${formatarMoeda(impostoUnitario)}</li>
        <li><strong>Valor de Venda Unitário:</strong> ${formatarMoeda(valorVendaUnitario)}</li>
        
        <hr>
        <h3>Totais da Quantidade Informada</h3>
        <li><strong>Custo Total:</strong> ${formatarMoeda(custo)}</li>
        <li><strong>Lucro Total Esperado:</strong> ${formatarMoeda(lucro)}</li>
        <li><strong>Impostos Totais:</strong> ${formatarMoeda(imposto)}</li>
        
        <hr>
        <li><strong>Valor Total de Revenda:</strong> ${formatarMoeda(valorVenda)}</li>

        <hr>
        <div class="destaque-final">
            <li>Lucro Total Esperado: ${formatarMoeda(lucro)}</li>
        </div>
    `;
});