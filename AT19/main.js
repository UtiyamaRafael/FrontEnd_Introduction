const nomeCliente = document.getElementById('nomeCliente');
const nomeProduto = document.getElementById('nomeProduto');
const precoProduto = document.getElementById('precoProduto');
const quantidadeProduto = document.getElementById('quantidadeProduto');
const botaoCalcular = document.getElementById('calcular');
const listaResultados = document.getElementById('listaResultados');


function custoTotal() {
    return precoProduto.value * quantidadeProduto.value;
}

function lucroTotralEsperado() {
    return lucroUnitario * quantidadeProduto.value;
}

function impostoTotal() {
    return impostoUnitario * quantidadeProduto.value;
} 

function valorTotalRevenda() {
    return quantidadeProduto.value * valorVendaUnitario;
}


botaoCalcular.addEventListener('click', () => {
        // Captura e converte os valores atuais dos inputs
        const cliente = nomeCliente.value;
        const produto = nomeProduto.value;
        const custoUni = parseFloat(precoProduto.value) || 0;
        const qtd = parseInt(quantidadeProduto.value) || 0;

        if (custoUni === 0 || qtd === 0) {
            alert("Por favor, preencha os valores de preço e quantidade.");
            return;
        }

        const lucroUnitario = custoUni * 0.3;
        const impostoUnitario = custoUni * 0.25;
        const valorVendaUnitario = custoUni + lucroUnitario + impostoUnitario;

        const custo = custoTotal(custoUni, qtd);
        const lucro = lucroTotalEsperado(lucroUnitario, qtd);
        const imposto = impostoTotal(impostoUnitario, qtd);
        const valorVenda = valorTotalRevenda(valorVendaUnitario, qtd);

        const formatarMoeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

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
            <li class="destaque-final"><strong>Valor Total de Revenda:</strong> ${formatarMoeda(valorVenda)}</li>
    `;

    });



