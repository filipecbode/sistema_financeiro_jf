// === DADOS DO SISTEMA ===
const loginCredentials = { usuario: "admin", senha: "123456" };

// Dados das 23 contas a pagar (dados reais da planilha)
let transactions = [
    {"id": 1, "tipo": "despesa", "descricao": "Conta de luz", "valor": 270.00, "categoria": "Serviços Públicos", "vencimento": "2025-10-03", "recorrente": true, "status": "pendente", "fornecedorId": 1, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 2, "tipo": "despesa", "descricao": "Conta de Gás", "valor": 24.00, "categoria": "Serviços Públicos", "vencimento": "2025-10-03", "recorrente": true, "status": "pendente", "fornecedorId": 2, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 3, "tipo": "despesa", "descricao": "NET - Jose Carlos", "valor": 100.00, "categoria": "Serviços Públicos", "vencimento": "2025-10-05", "recorrente": true, "status": "pendente", "fornecedorId": 3, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 4, "tipo": "despesa", "descricao": "Condomínio IBVS", "valor": 677.00, "categoria": "Moradia", "vencimento": "2025-10-10", "recorrente": true, "status": "pendente", "fornecedorId": 4, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 5, "tipo": "despesa", "descricao": "Faculdade", "valor": 478.00, "categoria": "Educação", "vencimento": "2025-10-10", "recorrente": false, "status": "pendente", "fornecedorId": 5, "parcelasRestantes": 2, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 6, "tipo": "despesa", "descricao": "Cartão ITAU 01", "valor": 830.00, "categoria": "Cartão de Crédito", "vencimento": "2025-10-10", "recorrente": true, "status": "pendente", "fornecedorId": 6, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 7, "tipo": "despesa", "descricao": "Mensalidades DigiSat", "valor": 157.00, "categoria": "Tecnologia", "vencimento": "2025-10-14", "recorrente": true, "status": "pendente", "fornecedorId": 7, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 8, "tipo": "despesa", "descricao": "Cartão Nubank Físico", "valor": 200.00, "categoria": "Cartão de Crédito", "vencimento": "2025-10-16", "recorrente": true, "status": "pendente", "fornecedorId": 8, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 9, "tipo": "despesa", "descricao": "Cartão Nubank PJ", "valor": 100.00, "categoria": "Cartão de Crédito", "vencimento": "2025-10-16", "recorrente": true, "status": "pendente", "fornecedorId": 8, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 10, "tipo": "despesa", "descricao": "Servidor Nuvens", "valor": 400.00, "categoria": "Tecnologia", "vencimento": "2025-10-15", "recorrente": true, "status": "pendente", "fornecedorId": 9, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 11, "tipo": "despesa", "descricao": "Conta de internet", "valor": 70.00, "categoria": "Serviços Públicos", "vencimento": "2025-10-10", "recorrente": true, "status": "pendente", "fornecedorId": 10, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 12, "tipo": "despesa", "descricao": "Impostos", "valor": 82.00, "categoria": "Tributos", "vencimento": "2025-10-10", "recorrente": true, "status": "pendente", "fornecedorId": 11, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 13, "tipo": "despesa", "descricao": "Conta de Celular", "valor": 140.00, "categoria": "Serviços Públicos", "vencimento": "2025-10-17", "recorrente": true, "status": "pendente", "fornecedorId": 12, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 14, "tipo": "despesa", "descricao": "Cartão Will", "valor": 1000.00, "categoria": "Cartão de Crédito", "vencimento": "2025-10-10", "recorrente": false, "status": "pendente", "fornecedorId": 13, "parcelasRestantes": 5, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 15, "tipo": "despesa", "descricao": "Cartão PAN 01", "valor": 250.00, "categoria": "Cartão de Crédito", "vencimento": "2025-10-17", "recorrente": false, "status": "pendente", "fornecedorId": 14, "parcelasRestantes": 4, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 16, "tipo": "despesa", "descricao": "Cartão PAN 02", "valor": 600.00, "categoria": "Cartão de Crédito", "vencimento": "2025-10-17", "recorrente": false, "status": "pendente", "fornecedorId": 14, "parcelasRestantes": 2, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 17, "tipo": "despesa", "descricao": "Cartão PAN 03", "valor": 935.00, "categoria": "Cartão de Crédito", "vencimento": "2025-10-17", "recorrente": false, "status": "pendente", "fornecedorId": 14, "parcelasRestantes": 2, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 18, "tipo": "despesa", "descricao": "Prestação apartamento", "valor": 810.00, "categoria": "Moradia", "vencimento": "2025-10-20", "recorrente": true, "status": "pendente", "fornecedorId": 15, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 19, "tipo": "despesa", "descricao": "Cartão ITAU 02", "valor": 1000.00, "categoria": "Cartão de Crédito", "vencimento": "2025-10-21", "recorrente": false, "status": "pendente", "fornecedorId": 6, "parcelasRestantes": 5, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 20, "tipo": "despesa", "descricao": "Itau dia 21 - nova 3/10", "valor": 800.00, "categoria": "Cartão de Crédito", "vencimento": "2025-10-21", "recorrente": false, "status": "pendente", "fornecedorId": 6, "parcelasRestantes": 8, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 21, "tipo": "despesa", "descricao": "Cartão mercado Pago", "valor": 2200.00, "categoria": "Cartão de Crédito", "vencimento": "2025-10-23", "recorrente": true, "status": "pendente", "fornecedorId": 16, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 22, "tipo": "despesa", "descricao": "Salário Henrique", "valor": 500.00, "categoria": "Folha de Pagamento", "vencimento": "2025-10-30", "recorrente": true, "status": "pendente", "fornecedorId": 17, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"},
    {"id": 23, "tipo": "despesa", "descricao": "PIC ITAU", "valor": 60.00, "categoria": "Serviços Bancários", "vencimento": "2025-10-26", "recorrente": true, "status": "pendente", "fornecedorId": 6, "parcelasRestantes": null, "created": "2025-10-03T00:00:00.000Z"}
];

// 17 fornecedores conforme dados reais
let suppliers = [
    {"id": 1, "nome": "Companhia Elétrica", "email": "atendimento@energia.com", "telefone": "(11) 0800-123-4567", "endereco": "Av. Energia, 123 - São Paulo/SP", "documento": "12.345.678/0001-90", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 2, "nome": "Companhia de Gás", "email": "atendimento@gas.com", "telefone": "(11) 0800-987-6543", "endereco": "Rua do Gás, 456 - São Paulo/SP", "documento": "98.765.432/0001-10", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 3, "nome": "NET - Jose Carlos", "email": "josecarlos@net.com", "telefone": "(11) 99999-1111", "endereco": "Av. Internet, 789 - São Paulo/SP", "documento": "11.111.111/0001-11", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 4, "nome": "Condomínio IBVS", "email": "admin@condominioibvs.com", "telefone": "(11) 3333-4444", "endereco": "Rua do Condomínio, 100 - São Paulo/SP", "documento": "22.222.222/0001-22", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 5, "nome": "Faculdade", "email": "financeiro@faculdade.edu", "telefone": "(11) 5555-6666", "endereco": "Av. Educação, 500 - São Paulo/SP", "documento": "33.333.333/0001-33", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 6, "nome": "Banco ITAU", "email": "atendimento@itau.com.br", "telefone": "(11) 4004-4828", "endereco": "Av. Paulista, 1000 - São Paulo/SP", "documento": "60.701.190/0001-04", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 7, "nome": "DigiSat", "email": "cobranca@digisat.com", "telefone": "(11) 7777-8888", "endereco": "Rua Tecnologia, 200 - São Paulo/SP", "documento": "44.444.444/0001-44", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 8, "nome": "Nubank", "email": "atendimento@nubank.com.br", "telefone": "(11) 0800-608-6068", "endereco": "Rua Nubank, 300 - São Paulo/SP", "documento": "18.236.120/0001-58", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 9, "nome": "Servidor Nuvens", "email": "suporte@servidornuvens.com", "telefone": "(11) 9999-0000", "endereco": "Av. Cloud, 400 - São Paulo/SP", "documento": "55.555.555/0001-55", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 10, "nome": "Operadora Internet", "email": "suporte@internet.com", "telefone": "(11) 1111-2222", "endereco": "Rua Internet, 600 - São Paulo/SP", "documento": "66.666.666/0001-66", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 11, "nome": "Receita Federal", "email": "atendimento@receita.fazenda.gov.br", "telefone": "(11) 146", "endereco": "Av. Tributos, 700 - Brasília/DF", "documento": "00.000.000/0001-91", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 12, "nome": "Operadora Celular", "email": "atendimento@celular.com", "telefone": "(11) 2222-3333", "endereco": "Av. Celular, 800 - São Paulo/SP", "documento": "77.777.777/0001-77", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 13, "nome": "Cartão Will", "email": "atendimento@will.com.br", "telefone": "(11) 3333-4444", "endereco": "Rua Will, 900 - São Paulo/SP", "documento": "88.888.888/0001-88", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 14, "nome": "Banco PAN", "email": "atendimento@bancopan.com.br", "telefone": "(11) 4444-5555", "endereco": "Av. PAN, 1000 - São Paulo/SP", "documento": "99.999.999/0001-99", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 15, "nome": "Imobiliária", "email": "vendas@imobiliaria.com", "telefone": "(11) 5555-6666", "endereco": "Rua Imóveis, 1100 - São Paulo/SP", "documento": "10.101.010/0001-01", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 16, "nome": "Mercado Pago", "email": "atendimento@mercadopago.com.br", "telefone": "(11) 6666-7777", "endereco": "Av. Mercado, 1200 - São Paulo/SP", "documento": "11.222.333/0001-44", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"},
    {"id": 17, "nome": "Henrique", "email": "henrique@email.com", "telefone": "(11) 88888-9999", "endereco": "Rua do Funcionário, 1300 - São Paulo/SP", "documento": "123.456.789-00", "status": "ativo", "cadastro": "2025-10-01T00:00:00.000Z"}
];

// Outros dados
let clientes = [];
let produtos = [];
let vendas = [];

// Categorias
const categories = {
    receita: ["Vendas", "Serviços", "Freelances", "Investimentos", "Outros"],
    despesa: ["Serviços Públicos", "Cartão de Crédito", "Moradia", "Educação", "Tecnologia", "Tributos", "Folha de Pagamento", "Serviços Bancários", "Outros"]
};

// Controles
let nextTransactionId = 24;
let nextSupplierId = 18;
let currentEditingId = null;

// === DASHBOARD ===
function updateDashboard() {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    const receitasDoMes = transactions.filter(t => {
        const date = new Date(t.vencimento);
        return t.tipo === 'receita' && t.status === 'pago' &&
               date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    }).reduce((sum, t) => sum + t.valor, 0);
    
    const despesasDoMes = transactions.filter(t => {
        const date = new Date(t.vencimento);
        return t.tipo === 'despesa' && t.status === 'pago' &&
               date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    }).reduce((sum, t) => sum + t.valor, 0);
    
    const saldo = receitasDoMes - despesasDoMes;
    const contasPendentes = transactions.filter(t => t.status === 'pendente').length;
    
    // Atualizar cards
    const saldoElement = document.getElementById('saldo-atual');
    if (saldoElement) {
        saldoElement.textContent = formatCurrency(saldo);
        saldoElement.className = `card-value ${saldo >= 0 ? 'positive' : 'negative'}`;
    }
    
    const receitasElement = document.getElementById('receitas-mes');
    if (receitasElement) {
        receitasElement.textContent = formatCurrency(receitasDoMes);
    }
    
    const despesasElement = document.getElementById('despesas-mes');
    if (despesasElement) {
        despesasElement.textContent = formatCurrency(despesasDoMes);
    }
    
    const pendentesElement = document.getElementById('contas-pendentes');
    if (pendentesElement) {
        pendentesElement.textContent = contasPendentes;
    }
}

function updateUpcomingBills() {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);
    
    const upcomingBills = transactions.filter(t => {
        const dueDate = new Date(t.vencimento);
        return t.status === 'pendente' && dueDate >= today && dueDate <= nextWeek;
    }).sort((a, b) => new Date(a.vencimento) - new Date(b.vencimento));
    
    const container = document.getElementById('contas-vencendo');
    if (!container) return;
    
    if (upcomingBills.length === 0) {
        container.innerHTML = '<p>✅ Nenhuma conta vencendo nos próximos 7 dias</p>';
        return;
    }
    
    const billsHtml = upcomingBills.map(bill => {
        const supplier = suppliers.find(s => s.id === bill.fornecedorId);
        const supplierName = supplier ? supplier.nome : 'Não informado';
        const isOverdue = new Date(bill.vencimento) < today;
        
        return `
            <div class="upcoming-bill ${isOverdue ? 'overdue' : ''}">
                <div class="bill-info">
                    <strong>${bill.descricao}</strong>
                    <span class="bill-meta">🏢 ${supplierName} | 📅 ${formatDate(bill.vencimento)}</span>
                </div>
                <div class="bill-amount ${bill.tipo}">
                    ${formatCurrency(bill.valor)}
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = billsHtml;
}

function updateCharts() {
    // Placeholder para gráficos Chart.js
    console.log('Gráficos serão implementados com Chart.js');
}

// === FILTROS ===
function populateFilters() {
    // Popular filtros de categoria para despesas
    const despesaCategoriesSelect = document.getElementById('filter-categoria-despesas');
    if (despesaCategoriesSelect) {
        despesaCategoriesSelect.innerHTML = '<option value="">Todas as Categorias</option>';
        categories.despesa.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            despesaCategoriesSelect.appendChild(option);
        });
    }

    // Popular filtros de categoria para receitas
    const receitaCategoriesSelect = document.getElementById('filter-categoria-receitas');
    if (receitaCategoriesSelect) {
        receitaCategoriesSelect.innerHTML = '<option value="">Todas as Categorias</option>';
        categories.receita.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            receitaCategoriesSelect.appendChild(option);
        });
    }
}

// === TRANSAÇÕES ===
function renderTransactions(tipo) {
    const containerId = tipo === 'receita' ? 'lista-receitas' : 'lista-despesas';
    const container = document.getElementById(containerId);
    
    if (!container) return;
    
    // Obter transações filtradas
    let filteredTransactions = transactions.filter(t => t.tipo === tipo);
    
    // Aplicar filtros - FILTROS POR DATA CORRIGIDOS
    const statusFilter = document.getElementById(`filter-status-${tipo === 'receita' ? 'receitas' : 'despesas'}`);
    const categoriaFilter = document.getElementById(`filter-categoria-${tipo === 'receita' ? 'receitas' : 'despesas'}`);
    const dataInicioFilter = document.getElementById(`filter-data-inicio-${tipo === 'receita' ? 'receitas' : 'despesas'}`);
    const dataFimFilter = document.getElementById(`filter-data-fim-${tipo === 'receita' ? 'receitas' : 'despesas'}`);
    
    if (statusFilter && statusFilter.value) {
        filteredTransactions = filteredTransactions.filter(t => t.status === statusFilter.value);
    }
    
    if (categoriaFilter && categoriaFilter.value) {
        filteredTransactions = filteredTransactions.filter(t => t.categoria === categoriaFilter.value);
    }
    
    // FILTROS POR DATA CORRIGIDOS
    if (dataInicioFilter && dataInicioFilter.value) {
        filteredTransactions = filteredTransactions.filter(t => t.vencimento >= dataInicioFilter.value);
    }
    
    if (dataFimFilter && dataFimFilter.value) {
        filteredTransactions = filteredTransactions.filter(t => t.vencimento <= dataFimFilter.value);
    }
    
    // Ordenar por data de vencimento
    filteredTransactions.sort((a, b) => new Date(a.vencimento) - new Date(b.vencimento));
    
    if (filteredTransactions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>Nenhuma ${tipo === 'receita' ? 'conta a receber' : 'conta a pagar'} encontrada</h3>
                <p>Use os filtros ou adicione uma nova ${tipo === 'receita' ? 'receita' : 'despesa'}</p>
            </div>
        `;
        return;
    }
    
    // Renderizar transações
    const transactionsHtml = filteredTransactions.map(transaction => {
        const supplier = suppliers.find(s => s.id === transaction.fornecedorId);
        const supplierName = supplier ? supplier.nome : 'Não informado';
        const isOverdue = new Date(transaction.vencimento) < new Date() && transaction.status === 'pendente';
        
        return `
            <div class="transaction-item ${transaction.status} ${isOverdue ? 'overdue' : ''}">
                <div class="transaction-info">
                    <h4>${transaction.descricao}</h4>
                    <div class="transaction-meta">
                        <span class="transaction-category">📂 ${transaction.categoria}</span>
                        <span class="transaction-supplier">🏢 ${supplierName}</span>
                        ${transaction.recorrente ? '<span class="recurrence-badge">Recorrente</span>' : ''}
                        ${transaction.parcelasRestantes ? `<span class="parcelas-badge">${transaction.parcelasRestantes} parcelas restantes</span>` : ''}
                    </div>
                </div>
                <div class="transaction-amount ${transaction.tipo}">
                    ${transaction.tipo === 'receita' ? '+' : '-'} ${formatCurrency(transaction.valor)}
                </div>
                <div class="transaction-date">
                    ${formatDate(transaction.vencimento)}
                </div>
                <div class="transaction-status">
                    <span class="status-badge ${transaction.status}">${transaction.status.toUpperCase()}</span>
                </div>
                <div class="transaction-actions">
                    ${transaction.status === 'pendente' 
                        ? `<button class="btn btn--sm btn--success" onclick="markAsPaid(${transaction.id})">Pagar</button>` 
                        : `<button class="btn btn--sm btn--warning" onclick="markAsPending(${transaction.id})">Pendente</button>`
                    }
                    <button class="btn btn--sm btn--secondary" onclick="editTransaction(${transaction.id})">Editar</button>
                    <button class="btn btn--sm btn--danger" onclick="deleteTransaction(${transaction.id})">Excluir</button>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = transactionsHtml;
}

// LIMPAR FILTROS CORRIGIDO
function clearFilters(tipo) {
    const statusFilter = document.getElementById(`filter-status-${tipo}`);
    const categoriaFilter = document.getElementById(`filter-categoria-${tipo}`);
    const dataInicioFilter = document.getElementById(`filter-data-inicio-${tipo}`);
    const dataFimFilter = document.getElementById(`filter-data-fim-${tipo}`);
    
    if (statusFilter) statusFilter.value = '';
    if (categoriaFilter) categoriaFilter.value = '';
    if (dataInicioFilter) dataInicioFilter.value = '';
    if (dataFimFilter) dataFimFilter.value = '';
    
    // Re-renderizar transações
    const transactionType = tipo === 'receitas' ? 'receita' : 'despesa';
    renderTransactions(transactionType);
}

// === MODAL DE TRANSAÇÃO ===
function openTransactionModal(tipo = null) {
    const modal = document.getElementById('transaction-modal');
    const title = document.getElementById('transaction-modal-title');
    const tipoSelect = document.getElementById('transaction-tipo');
    
    // Reset form
    document.getElementById('transaction-form').reset();
    currentEditingId = null;
    
    // Definir tipo e título baseado no contexto
    if (tipo) {
        title.textContent = tipo === 'receita' ? 'Nova Conta a Receber' : 'Nova Conta a Pagar';
        tipoSelect.value = tipo;
        tipoSelect.disabled = true;
    } else {
        title.textContent = 'Nova Transação';
        tipoSelect.disabled = false;
    }
    
    // Definir data padrão
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('transaction-vencimento').value = today;
    
    // Atualizar categorias e fornecedores
    updateCategoriesAndSuppliers();
    
    modal.classList.remove('hidden');
    document.getElementById('transaction-descricao').focus();
}

function updateCategoriesAndSuppliers() {
    const tipo = document.getElementById('transaction-tipo').value;
    const categoriaSelect = document.getElementById('transaction-categoria');
    const fornecedorGroup = document.getElementById('fornecedor-group');
    const fornecedorSelect = document.getElementById('transaction-fornecedor');
    
    // Atualizar categorias
    categoriaSelect.innerHTML = '';
    categories[tipo].forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoriaSelect.appendChild(option);
    });
    
    // Popular fornecedores
    fornecedorSelect.innerHTML = '<option value="">Selecione um fornecedor</option>';
    suppliers.filter(s => s.status === 'ativo').forEach(supplier => {
        const option = document.createElement('option');
        option.value = supplier.id;
        option.textContent = supplier.nome;
        fornecedorSelect.appendChild(option);
    });
}

function toggleParcelasRestantes() {
    const recorrenteCheckbox = document.getElementById('transaction-recorrente');
    const parcelasGroup = document.getElementById('parcelas-group');
    
    if (recorrenteCheckbox.checked) {
        parcelasGroup.style.display = 'none';
        document.getElementById('transaction-parcelas').value = '';
    } else {
        parcelasGroup.style.display = 'block';
    }
}

function saveTransaction(event) {
    event.preventDefault();
    
    const form = document.getElementById('transaction-form');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }
    
    const transactionData = {
        tipo: document.getElementById('transaction-tipo').value,
        descricao: document.getElementById('transaction-descricao').value,
        valor: parseFloat(document.getElementById('transaction-valor').value),
        categoria: document.getElementById('transaction-categoria').value,
        vencimento: document.getElementById('transaction-vencimento').value,
        recorrente: document.getElementById('transaction-recorrente').checked,
        status: document.getElementById('transaction-status').value,
        fornecedorId: parseInt(document.getElementById('transaction-fornecedor').value) || null,
        parcelasRestantes: document.getElementById('transaction-recorrente').checked ? null : 
                          (parseInt(document.getElementById('transaction-parcelas').value) || null)
    };
    
    if (currentEditingId) {
        // Atualizar transação existente
        const index = transactions.findIndex(t => t.id === currentEditingId);
        if (index !== -1) {
            transactions[index] = {
                ...transactions[index],
                ...transactionData
            };
        }
    } else {
        // Criar nova transação
        const newTransaction = {
            id: nextTransactionId++,
            ...transactionData,
            created: new Date().toISOString()
        };
        transactions.push(newTransaction);
    }
    
    closeModal('transaction-modal');
    updateDashboard();
    renderTransactions('receita');
    renderTransactions('despesa');
}

function markAsPaid(id) {
    const transaction = transactions.find(t => t.id === id);
    if (!transaction) return;
    
    transaction.status = 'pago';
    
    // Tratar transações recorrentes e parcelas
    if (transaction.recorrente) {
        // Para recorrentes, criar próxima transação do mês seguinte
        const nextDate = new Date(transaction.vencimento);
        nextDate.setMonth(nextDate.getMonth() + 1);
        
        const nextTransaction = {
            ...transaction,
            id: nextTransactionId++,
            vencimento: nextDate.toISOString().split('T')[0],
            status: 'pendente',
            created: new Date().toISOString()
        };
        
        transactions.push(nextTransaction);
    } else if (transaction.parcelasRestantes && transaction.parcelasRestantes > 1) {
        // Para parcelas, criar próxima parcela e diminuir contador
        const nextDate = new Date(transaction.vencimento);
        nextDate.setMonth(nextDate.getMonth() + 1);
        
        const nextTransaction = {
            ...transaction,
            id: nextTransactionId++,
            vencimento: nextDate.toISOString().split('T')[0],
            status: 'pendente',
            parcelasRestantes: transaction.parcelasRestantes - 1,
            created: new Date().toISOString()
        };
        
        transactions.push(nextTransaction);
    }
    
    updateDashboard();
    renderTransactions('receita');
    renderTransactions('despesa');
}

function markAsPending(id) {
    const transaction = transactions.find(t => t.id === id);
    if (!transaction) return;
    
    transaction.status = 'pendente';
    updateDashboard();
    renderTransactions('receita');
    renderTransactions('despesa');
}

function editTransaction(id) {
    // Implementar edição de transação
    console.log('Editar transação:', id);
}

function deleteTransaction(id) {
    if (!confirm('Tem certeza que deseja excluir esta transação?')) return;
    
    transactions = transactions.filter(t => t.id !== id);
    updateDashboard();
    renderTransactions('receita');
    renderTransactions('despesa');
}

// === FUNÇÕES UTILITÁRIAS ===
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('pt-BR');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    currentEditingId = null;
}