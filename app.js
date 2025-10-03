// Dados iniciais do sistema
let transactions = [
    {
        id: 1,
        tipo: "receita",
        descricao: "Salário",
        valor: 5000,
        categoria: "Salário",
        vencimento: "2025-01-05",
        recorrente: true,
        status: "pago",
        created: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 2,
        tipo: "despesa", 
        descricao: "Aluguel",
        valor: 1500,
        categoria: "Moradia",
        vencimento: "2025-01-10", 
        recorrente: true,
        status: "pendente",
        created: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 3,
        tipo: "receita",
        descricao: "Venda #001",
        valor: 299.90,
        categoria: "Vendas",
        vencimento: "2025-01-03",
        recorrente: false,
        status: "pago",
        created: "2025-01-03T10:30:00.000Z",
        vendaId: 1
    }
];

let clientes = [
    {
        id: 1,
        nome: "João Silva",
        email: "joao@email.com",
        telefone: "(11) 99999-1234",
        endereco: "Rua das Flores, 123 - São Paulo/SP",
        documento: "123.456.789-00",
        status: "ativo",
        cadastro: "2024-12-01T00:00:00.000Z",
        totalGasto: 299.90
    },
    {
        id: 2,
        nome: "Maria Santos",
        email: "maria@email.com", 
        telefone: "(11) 88888-5678",
        endereco: "Av. Principal, 456 - São Paulo/SP",
        documento: "987.654.321-00",
        status: "ativo",
        cadastro: "2024-11-15T00:00:00.000Z",
        totalGasto: 0
    }
];

let produtos = [
    {
        id: 1,
        nome: "Smartphone Galaxy",
        descricao: "Smartphone Android com 128GB",
        precoCusto: 200,
        precoVenda: 299.90,
        categoria: "Eletrônicos",
        estoque: 15,
        status: "ativo",
        cadastro: "2024-12-01T00:00:00.000Z"
    },
    {
        id: 2,
        nome: "Camiseta Básica",
        descricao: "Camiseta 100% algodão",
        precoCusto: 15,
        precoVenda: 39.90,
        categoria: "Roupas", 
        estoque: 50,
        status: "ativo",
        cadastro: "2024-12-01T00:00:00.000Z"
    },
    {
        id: 3,
        nome: "Café Premium",
        descricao: "Café torrado especial 500g",
        precoCusto: 12,
        precoVenda: 24.90,
        categoria: "Alimentação",
        estoque: 3,
        status: "ativo", 
        cadastro: "2024-12-01T00:00:00.000Z"
    }
];

let vendas = [
    {
        id: 1,
        clienteId: 1,
        items: [
            {
                produtoId: 1,
                quantidade: 1,
                precoUnitario: 299.90,
                subtotal: 299.90
            }
        ],
        subtotal: 299.90,
        desconto: 0,
        total: 299.90,
        pagamento: "PIX",
        parcelas: 1,
        data: "2025-01-03T10:30:00.000Z",
        status: "finalizada"
    }
];

const categories = {
    receita: ["Salário", "Freelances", "Investimentos", "Vendas", "Outros"],
    despesa: ["Moradia", "Alimentação", "Transporte", "Saúde", "Educação", "Lazer", "Outros"]
};

const productCategories = ["Eletrônicos", "Roupas", "Casa", "Alimentação", "Serviços", "Outros"];

// Variáveis de controle
let nextTransactionId = 4;
let nextClienteId = 3;
let nextProdutoId = 4;
let nextVendaId = 2;
let currentEditingId = null;
let currentEditingType = null;
let carrinho = [];

// Charts
let financeiroChart = null;
let produtosVendidosChart = null;
let vendasMesChart = null;
let topProdutosChart = null;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    populateSelects();
    showSection('dashboard');
    updateAllData();
});

function initializeApp() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('transaction-date').value = today;
    
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);
    document.getElementById('filtro-data-inicio').value = startDate.toISOString().split('T')[0];
    document.getElementById('filtro-data-fim').value = today;
}

function setupEventListeners() {
    // Navegação
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            showSection(section);
            updateActiveNav(this);
        });
    });

    // Modais - Transação
    document.getElementById('nova-transacao-btn').addEventListener('click', openNewTransactionModal);
    document.getElementById('close-transaction-modal').addEventListener('click', () => closeModal('transaction'));
    document.getElementById('cancel-transaction').addEventListener('click', () => closeModal('transaction'));
    
    // Modais - Cliente
    document.getElementById('novo-cliente-btn').addEventListener('click', openNewClienteModal);
    document.getElementById('close-cliente-modal').addEventListener('click', () => closeModal('cliente'));
    document.getElementById('cancel-cliente').addEventListener('click', () => closeModal('cliente'));
    
    // Modais - Produto
    document.getElementById('novo-produto-btn').addEventListener('click', openNewProdutoModal);
    document.getElementById('close-produto-modal').addEventListener('click', () => closeModal('produto'));
    document.getElementById('cancel-produto').addEventListener('click', () => closeModal('produto'));
    
    // Modal - Histórico vendas
    document.getElementById('historico-vendas-btn').addEventListener('click', openHistoricoVendas);
    document.getElementById('close-historico-modal').addEventListener('click', () => closeModal('historico-vendas'));

    // Formulários
    document.getElementById('transaction-form').addEventListener('submit', handleTransactionSubmit);
    document.getElementById('cliente-form').addEventListener('submit', handleClienteSubmit);
    document.getElementById('produto-form').addEventListener('submit', handleProdutoSubmit);
    
    // Filtros e busca
    document.getElementById('search-clientes').addEventListener('input', filterClientes);
    document.getElementById('filter-status-clientes').addEventListener('change', filterClientes);
    document.getElementById('search-produtos').addEventListener('input', filterProdutos);
    document.getElementById('filter-categoria-produtos').addEventListener('change', filterProdutos);
    document.getElementById('filter-status-produtos').addEventListener('change', filterProdutos);
    
    // PDV
    document.getElementById('pdv-search-produto').addEventListener('input', searchProdutosPDV);
    document.getElementById('pdv-desconto').addEventListener('input', updateTotals);
    document.getElementById('pdv-pagamento').addEventListener('change', toggleParcelas);
    document.getElementById('finalizar-venda-btn').addEventListener('click', finalizarVenda);
    
    // Relatórios
    document.getElementById('aplicar-filtro-vendas').addEventListener('click', updateRelatoriosVendas);
    
    // Filtros financeiro
    document.getElementById('filter-status-receitas').addEventListener('change', () => filterTransactions('receita'));
    document.getElementById('filter-categoria-receitas').addEventListener('change', () => filterTransactions('receita'));
    document.getElementById('filter-status-despesas').addEventListener('change', () => filterTransactions('despesa'));
    document.getElementById('filter-categoria-despesas').addEventListener('change', () => filterTransactions('despesa'));
    
    // Change handlers
    document.getElementById('transaction-type').addEventListener('change', updateCategoriesSelect);
    
    // Modal clicks
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                const modalId = this.id.replace('-modal', '');
                closeModal(modalId);
            }
        });
    });
}

function populateSelects() {
    // Categorias financeiras
    const receitasSelect = document.getElementById('filter-categoria-receitas');
    receitasSelect.innerHTML = '<option value="todas">Todas as categorias</option>';
    categories.receita.forEach(cat => {
        receitasSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
    });

    const despesasSelect = document.getElementById('filter-categoria-despesas');
    despesasSelect.innerHTML = '<option value="todas">Todas as categorias</option>';
    categories.despesa.forEach(cat => {
        despesasSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
    
    // Categorias de produtos
    const produtoCategoriaSelect = document.getElementById('filter-categoria-produtos');
    produtoCategoriaSelect.innerHTML = '<option value="todas">Todas as categorias</option>';
    productCategories.forEach(cat => {
        produtoCategoriaSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
    
    const produtoModalCategoriaSelect = document.getElementById('produto-categoria');
    produtoModalCategoriaSelect.innerHTML = '';
    productCategories.forEach(cat => {
        produtoModalCategoriaSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
    
    // Inicializar clientes para PDV
    updateClientesSelect();
}

function updateClientesSelect() {
    const clientesSelect = document.getElementById('pdv-cliente');
    if (!clientesSelect) return;
    
    try {
        clientesSelect.innerHTML = '<option value="">Selecione um cliente...</option>';
        
        const clientesAtivos = clientes.filter(c => c.status === 'ativo');
        
        if (clientesAtivos.length === 0) {
            clientesSelect.innerHTML += '<option value="" disabled>Nenhum cliente ativo encontrado</option>';
            return;
        }
        
        clientesAtivos.forEach(cliente => {
            clientesSelect.innerHTML += `<option value="${cliente.id}">${cliente.nome}</option>`;
        });
        
        console.log(`Clientes carregados: ${clientesAtivos.length}`);
    } catch (error) {
        console.error('Erro ao atualizar select de clientes:', error);
        if (clientesSelect) {
            clientesSelect.innerHTML = '<option value="">Erro ao carregar clientes</option>';
        }
    }
}

function showSection(sectionName) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    document.getElementById(sectionName).classList.add('active');

    // Usar setTimeout para garantir que o DOM esteja pronto
    setTimeout(() => {
        switch(sectionName) {
            case 'dashboard':
                updateDashboard();
                renderDashboardCharts();
                renderAtividadesRecentes();
                break;
            case 'clientes':
                renderClientesTable();
                break;
            case 'produtos':
                renderProdutosTable();
                break;
            case 'vendas':
                initializePDV();
                break;
            case 'relatorios-vendas':
                updateRelatoriosVendas();
                break;
            case 'receitas':
                renderTransactionsTable('receita');
                break;
            case 'despesas':
                renderTransactionsTable('despesa');
                break;
            case 'relatorios':
                updateReports();
                break;
        }
    }, 100);
}

function initializePDV() {
    // Inicializar PDV com dados atualizados
    updateClientesSelect();
    searchProdutosPDV();
    renderCarrinho();
    updateTotals();
    toggleParcelas();
    
    // Limpar busca de produtos se necessário
    const searchInput = document.getElementById('pdv-search-produto');
    if (searchInput && searchInput.value === '') {
        document.getElementById('pdv-produtos-list').innerHTML = '<div style="padding: 20px; text-align: center; color: #888;">Digite para buscar produtos...</div>';
    }
}

function updateActiveNav(activeItem) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    activeItem.classList.add('active');
}

// DASHBOARD
function updateDashboard() {
    updateDashboardCards();
    updateDashboardAlerts();
}

function updateDashboardCards() {
    // Saldo financeiro
    const receitasPagas = transactions.filter(t => t.tipo === 'receita' && t.status === 'pago');
    const despesasPagas = transactions.filter(t => t.tipo === 'despesa' && t.status === 'pago');
    const totalReceitas = receitasPagas.reduce((sum, t) => sum + t.valor, 0);
    const totalDespesas = despesasPagas.reduce((sum, t) => sum + t.valor, 0);
    const saldoAtual = totalReceitas - totalDespesas;
    
    // Vendas do mês
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const vendasDoMes = vendas
        .filter(v => {
            const date = new Date(v.data);
            return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
        })
        .reduce((sum, v) => sum + v.total, 0);
    
    // Clientes ativos
    const clientesAtivos = clientes.filter(c => c.status === 'ativo').length;
    
    // Produtos em estoque
    const produtosEstoque = produtos.filter(p => p.status === 'ativo' && p.estoque > 0).length;
    
    document.getElementById('saldo-atual').textContent = formatCurrency(saldoAtual);
    document.getElementById('vendas-mes').textContent = formatCurrency(vendasDoMes);
    document.getElementById('clientes-ativos').textContent = clientesAtivos;
    document.getElementById('produtos-estoque').textContent = produtosEstoque;
    
    // Cores dos valores
    const saldoElement = document.getElementById('saldo-atual');
    saldoElement.className = saldoAtual >= 0 ? 'card-value receitas' : 'card-value despesas';
}

function updateDashboardAlerts() {
    const alertsContainer = document.getElementById('dashboard-alerts');
    const alerts = [];
    
    // Produtos com estoque baixo
    const produtosEstoqueBaixo = produtos.filter(p => p.status === 'ativo' && p.estoque < 5);
    if (produtosEstoqueBaixo.length > 0) {
        alerts.push({
            type: 'warning',
            message: `⚠️ ${produtosEstoqueBaixo.length} produto(s) com estoque baixo`
        });
    }
    
    // Contas vencendo
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const contasVencendo = transactions.filter(t => {
        const vencimento = new Date(t.vencimento);
        return t.status === 'pendente' && vencimento <= nextWeek;
    });
    
    if (contasVencendo.length > 0) {
        alerts.push({
            type: 'info',
            message: `📅 ${contasVencendo.length} conta(s) vencendo nos próximos 7 dias`
        });
    }
    
    alertsContainer.innerHTML = alerts.map(alert => `
        <div class="alert ${alert.type}">
            ${alert.message}
        </div>
    `).join('');
}

function renderDashboardCharts() {
    renderFinanceiroChart();
    renderProdutosVendidosChart();
}

function renderFinanceiroChart() {
    const ctx = document.getElementById('financeiro-chart');
    if (!ctx) return;

    if (financeiroChart) {
        financeiroChart.destroy();
    }

    // Últimos 6 meses
    const currentDate = new Date();
    const months = [];
    const receitas = [];
    const despesas = [];

    for (let i = 5; i >= 0; i--) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        const monthName = date.toLocaleDateString('pt-BR', { month: 'short' });
        months.push(monthName);

        const receitasDoMes = transactions
            .filter(t => {
                const tDate = new Date(t.vencimento);
                return t.tipo === 'receita' && t.status === 'pago' &&
                       tDate.getMonth() === date.getMonth() && 
                       tDate.getFullYear() === date.getFullYear();
            })
            .reduce((sum, t) => sum + t.valor, 0);

        const despesasDoMes = transactions
            .filter(t => {
                const tDate = new Date(t.vencimento);
                return t.tipo === 'despesa' && t.status === 'pago' &&
                       tDate.getMonth() === date.getMonth() && 
                       tDate.getFullYear() === date.getFullYear();
            })
            .reduce((sum, t) => sum + t.valor, 0);

        receitas.push(receitasDoMes);
        despesas.push(despesasDoMes);
    }

    financeiroChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Receitas',
                    data: receitas,
                    backgroundColor: '#1FB8CD'
                },
                {
                    label: 'Despesas',
                    data: despesas,
                    backgroundColor: '#B4413C'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value.toLocaleString('pt-BR');
                        }
                    }
                }
            }
        }
    });
}

function renderProdutosVendidosChart() {
    const ctx = document.getElementById('produtos-vendidos-chart');
    if (!ctx) return;

    if (produtosVendidosChart) {
        produtosVendidosChart.destroy();
    }

    // Calcular produtos mais vendidos
    const produtoVendas = {};
    vendas.forEach(venda => {
        venda.items.forEach(item => {
            const produto = produtos.find(p => p.id === item.produtoId);
            if (produto) {
                produtoVendas[produto.nome] = (produtoVendas[produto.nome] || 0) + item.quantidade;
            }
        });
    });

    const labels = Object.keys(produtoVendas).slice(0, 5);
    const data = Object.values(produtoVendas).slice(0, 5);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];

    if (labels.length === 0) {
        produtosVendidosChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Nenhuma venda registrada'],
                datasets: [{
                    data: [1],
                    backgroundColor: ['#ECEBD5'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
        return;
    }

    produtosVendidosChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors.slice(0, labels.length),
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

function renderAtividadesRecentes() {
    const container = document.getElementById('atividades-recentes');
    
    // Combinar atividades recentes (vendas e transações)
    const atividades = [];
    
    // Vendas recentes
    vendas.slice(-5).forEach(venda => {
        const cliente = clientes.find(c => c.id === venda.clienteId);
        atividades.push({
            tipo: 'venda',
            descricao: `Venda para ${cliente ? cliente.nome : 'Cliente'}`,
            valor: venda.total,
            data: venda.data
        });
    });
    
    // Transações recentes
    transactions.slice(-3).forEach(trans => {
        atividades.push({
            tipo: trans.tipo,
            descricao: trans.descricao,
            valor: trans.valor,
            data: trans.created
        });
    });
    
    // Ordenar por data (mais recente primeiro)
    atividades.sort((a, b) => new Date(b.data) - new Date(a.data));
    
    if (atividades.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhuma atividade recente</h3></div>';
        return;
    }

    container.innerHTML = atividades.slice(0, 5).map(atividade => `
        <div class="atividade-item">
            <div class="atividade-info">
                <h4>${atividade.descricao}</h4>
                <p>${formatDate(atividade.data)} • ${atividade.tipo}</p>
            </div>
            <div class="atividade-valor ${atividade.tipo === 'despesa' ? 'despesas' : 'receitas'}">
                ${formatCurrency(atividade.valor)}
            </div>
        </div>
    `).join('');
}

// CLIENTES
function renderClientesTable() {
    const container = document.getElementById('clientes-table');
    const filteredClientes = getFilteredClientes();

    if (filteredClientes.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhum cliente encontrado</h3></div>';
        return;
    }

    const tableHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Total Gasto</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${filteredClientes.map(cliente => `
                    <tr>
                        <td>${cliente.nome}</td>
                        <td>${cliente.email}</td>
                        <td>${cliente.telefone}</td>
                        <td>${formatCurrency(cliente.totalGasto)}</td>
                        <td><span class="status-badge ${cliente.status}">${cliente.status}</span></td>
                        <td>
                            <div class="action-buttons">
                                <button class="action-btn edit" onclick="editCliente(${cliente.id})" title="Editar">✏️</button>
                                <button class="action-btn delete" onclick="deleteCliente(${cliente.id})" title="Excluir">🗑️</button>
                                <button class="action-btn" onclick="viewClienteHistory(${cliente.id})" title="Histórico">📋</button>
                            </div>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    container.innerHTML = tableHTML;
}

function getFilteredClientes() {
    const searchTerm = document.getElementById('search-clientes').value.toLowerCase();
    const statusFilter = document.getElementById('filter-status-clientes').value;

    return clientes.filter(cliente => {
        const matchesSearch = cliente.nome.toLowerCase().includes(searchTerm) ||
                            cliente.email.toLowerCase().includes(searchTerm) ||
                            cliente.telefone.includes(searchTerm);
        const matchesStatus = statusFilter === 'todos' || cliente.status === statusFilter;
        
        return matchesSearch && matchesStatus;
    });
}

function filterClientes() {
    renderClientesTable();
}

function openNewClienteModal() {
    currentEditingType = 'cliente';
    currentEditingId = null;
    document.getElementById('cliente-modal-title').textContent = 'Novo Cliente';
    document.getElementById('cliente-form').reset();
    document.getElementById('cliente-modal').classList.remove('hidden');
}

function editCliente(id) {
    const cliente = clientes.find(c => c.id === id);
    if (!cliente) return;

    currentEditingType = 'cliente';
    currentEditingId = id;
    document.getElementById('cliente-modal-title').textContent = 'Editar Cliente';
    
    document.getElementById('cliente-nome').value = cliente.nome;
    document.getElementById('cliente-email').value = cliente.email;
    document.getElementById('cliente-telefone').value = cliente.telefone;
    document.getElementById('cliente-endereco').value = cliente.endereco;
    document.getElementById('cliente-documento').value = cliente.documento;
    document.getElementById('cliente-status').value = cliente.status;
    
    document.getElementById('cliente-modal').classList.remove('hidden');
}

function deleteCliente(id) {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
        clientes = clientes.filter(c => c.id !== id);
        renderClientesTable();
        updateClientesSelect();
        showMessage('Cliente excluído com sucesso!', 'success');
    }
}

function viewClienteHistory(id) {
    const cliente = clientes.find(c => c.id === id);
    if (!cliente) return;
    
    const vendasCliente = vendas.filter(v => v.clienteId === id);
    
    alert(`Histórico de ${cliente.nome}:\n\nTotal de compras: ${vendasCliente.length}\nValor total gasto: ${formatCurrency(cliente.totalGasto)}`);
}

function handleClienteSubmit(e) {
    e.preventDefault();

    const formData = {
        nome: document.getElementById('cliente-nome').value,
        email: document.getElementById('cliente-email').value,
        telefone: document.getElementById('cliente-telefone').value,
        endereco: document.getElementById('cliente-endereco').value,
        documento: document.getElementById('cliente-documento').value,
        status: document.getElementById('cliente-status').value
    };

    if (currentEditingId) {
        const cliente = clientes.find(c => c.id === currentEditingId);
        Object.assign(cliente, formData);
        showMessage('Cliente atualizado com sucesso!', 'success');
    } else {
        const newCliente = {
            id: nextClienteId++,
            ...formData,
            cadastro: new Date().toISOString(),
            totalGasto: 0
        };
        clientes.push(newCliente);
        showMessage('Cliente cadastrado com sucesso!', 'success');
    }

    closeModal('cliente');
    renderClientesTable();
    updateClientesSelect();
}

// PRODUTOS
function renderProdutosTable() {
    const container = document.getElementById('produtos-table');
    const filteredProdutos = getFilteredProdutos();

    if (filteredProdutos.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhum produto encontrado</h3></div>';
        return;
    }

    const tableHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço Venda</th>
                    <th>Estoque</th>
                    <th>Margem</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${filteredProdutos.map(produto => {
                    const margem = ((produto.precoVenda - produto.precoCusto) / produto.precoCusto * 100);
                    const estoqueClass = produto.estoque < 5 ? 'estoque-baixo' : 'estoque-ok';
                    return `
                        <tr>
                            <td>${produto.nome}</td>
                            <td>${produto.categoria}</td>
                            <td>${formatCurrency(produto.precoVenda)}</td>
                            <td><span class="${estoqueClass}">${produto.estoque}</span></td>
                            <td>
                                <span class="margem-lucro ${margem >= 0 ? 'margem-positiva' : 'margem-negativa'}">
                                    ${margem.toFixed(1)}%
                                </span>
                            </td>
                            <td><span class="status-badge ${produto.status}">${produto.status}</span></td>
                            <td>
                                <div class="action-buttons">
                                    <button class="action-btn edit" onclick="editProduto(${produto.id})" title="Editar">✏️</button>
                                    <button class="action-btn delete" onclick="deleteProduto(${produto.id})" title="Excluir">🗑️</button>
                                </div>
                            </td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
    `;

    container.innerHTML = tableHTML;
}

function getFilteredProdutos() {
    const searchTerm = document.getElementById('search-produtos').value.toLowerCase();
    const categoryFilter = document.getElementById('filter-categoria-produtos').value;
    const statusFilter = document.getElementById('filter-status-produtos').value;

    return produtos.filter(produto => {
        const matchesSearch = produto.nome.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryFilter === 'todas' || produto.categoria === categoryFilter;
        const matchesStatus = statusFilter === 'todos' || produto.status === statusFilter;
        
        return matchesSearch && matchesCategory && matchesStatus;
    });
}

function filterProdutos() {
    renderProdutosTable();
}

function openNewProdutoModal() {
    currentEditingType = 'produto';
    currentEditingId = null;
    document.getElementById('produto-modal-title').textContent = 'Novo Produto';
    document.getElementById('produto-form').reset();
    document.getElementById('produto-modal').classList.remove('hidden');
}

function editProduto(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;

    currentEditingType = 'produto';
    currentEditingId = id;
    document.getElementById('produto-modal-title').textContent = 'Editar Produto';
    
    document.getElementById('produto-nome').value = produto.nome;
    document.getElementById('produto-descricao').value = produto.descricao;
    document.getElementById('produto-preco-custo').value = produto.precoCusto;
    document.getElementById('produto-preco-venda').value = produto.precoVenda;
    document.getElementById('produto-categoria').value = produto.categoria;
    document.getElementById('produto-estoque').value = produto.estoque;
    document.getElementById('produto-status').value = produto.status;
    
    document.getElementById('produto-modal').classList.remove('hidden');
}

function deleteProduto(id) {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        produtos = produtos.filter(p => p.id !== id);
        renderProdutosTable();
        showMessage('Produto excluído com sucesso!', 'success');
    }
}

function handleProdutoSubmit(e) {
    e.preventDefault();

    const formData = {
        nome: document.getElementById('produto-nome').value,
        descricao: document.getElementById('produto-descricao').value,
        precoCusto: parseFloat(document.getElementById('produto-preco-custo').value),
        precoVenda: parseFloat(document.getElementById('produto-preco-venda').value),
        categoria: document.getElementById('produto-categoria').value,
        estoque: parseInt(document.getElementById('produto-estoque').value),
        status: document.getElementById('produto-status').value
    };

    if (currentEditingId) {
        const produto = produtos.find(p => p.id === currentEditingId);
        Object.assign(produto, formData);
        showMessage('Produto atualizado com sucesso!', 'success');
    } else {
        const newProduto = {
            id: nextProdutoId++,
            ...formData,
            cadastro: new Date().toISOString()
        };
        produtos.push(newProduto);
        showMessage('Produto cadastrado com sucesso!', 'success');
    }

    closeModal('produto');
    renderProdutosTable();
}

// PDV (Ponto de Venda)
function searchProdutosPDV() {
    const searchTerm = document.getElementById('pdv-search-produto').value.toLowerCase();
    const container = document.getElementById('pdv-produtos-list');
    
    if (!container) return;
    
    const produtosAtivos = produtos.filter(p => 
        p.status === 'ativo' && 
        p.estoque > 0 && 
        p.nome.toLowerCase().includes(searchTerm)
    );

    if (searchTerm === '') {
        container.innerHTML = '<div style="padding: 20px; text-align: center; color: #888;">Digite para buscar produtos...</div>';
        return;
    }

    if (produtosAtivos.length === 0) {
        container.innerHTML = '<div class="empty-state">Nenhum produto encontrado</div>';
        return;
    }

    container.innerHTML = produtosAtivos.map(produto => `
        <div class="produto-item" onclick="addToCart(${produto.id})">
            <div class="produto-nome">${produto.nome}</div>
            <div class="produto-info">
                ${produto.categoria} • Estoque: ${produto.estoque}
                <span class="produto-preco">${formatCurrency(produto.precoVenda)}</span>
            </div>
        </div>
    `).join('');
}

function addToCart(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    if (!produto) return;

    const existingItem = carrinho.find(item => item.produtoId === produtoId);
    
    if (existingItem) {
        if (existingItem.quantidade < produto.estoque) {
            existingItem.quantidade++;
            existingItem.subtotal = existingItem.quantidade * existingItem.precoUnitario;
        } else {
            showMessage('Estoque insuficiente!', 'error');
            return;
        }
    } else {
        carrinho.push({
            produtoId: produtoId,
            nome: produto.nome,
            precoUnitario: produto.precoVenda,
            quantidade: 1,
            subtotal: produto.precoVenda
        });
    }

    renderCarrinho();
    updateTotals();
}

function renderCarrinho() {
    const container = document.getElementById('pdv-carrinho');
    
    if (!container) return;
    
    if (carrinho.length === 0) {
        container.innerHTML = '<div class="carrinho-empty">Carrinho vazio</div>';
        return;
    }

    container.innerHTML = carrinho.map((item, index) => `
        <div class="carrinho-item">
            <div class="carrinho-produto">
                <div class="carrinho-produto-nome">${item.nome}</div>
                <div class="carrinho-produto-preco">${formatCurrency(item.precoUnitario)} cada</div>
            </div>
            <div class="carrinho-quantidade">
                <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                <input type="number" class="qty-input" value="${item.quantidade}" 
                       onchange="setQuantity(${index}, this.value)" min="1">
                <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
            </div>
            <div class="carrinho-subtotal">${formatCurrency(item.subtotal)}</div>
            <button class="carrinho-remove" onclick="removeFromCart(${index})">🗑️</button>
        </div>
    `).join('');
}

function changeQuantity(index, delta) {
    const item = carrinho[index];
    const produto = produtos.find(p => p.id === item.produtoId);
    
    const newQuantity = item.quantidade + delta;
    
    if (newQuantity <= 0) {
        removeFromCart(index);
        return;
    }
    
    if (newQuantity > produto.estoque) {
        showMessage('Estoque insuficiente!', 'error');
        return;
    }
    
    item.quantidade = newQuantity;
    item.subtotal = item.quantidade * item.precoUnitario;
    
    renderCarrinho();
    updateTotals();
}

function setQuantity(index, quantity) {
    const item = carrinho[index];
    const produto = produtos.find(p => p.id === item.produtoId);
    const qty = parseInt(quantity);
    
    if (qty <= 0) {
        removeFromCart(index);
        return;
    }
    
    if (qty > produto.estoque) {
        showMessage('Estoque insuficiente!', 'error');
        return;
    }
    
    item.quantidade = qty;
    item.subtotal = item.quantidade * item.precoUnitario;
    
    renderCarrinho();
    updateTotals();
}

function removeFromCart(index) {
    carrinho.splice(index, 1);
    renderCarrinho();
    updateTotals();
}

function updateTotals() {
    const subtotal = carrinho.reduce((sum, item) => sum + item.subtotal, 0);
    const desconto = parseFloat(document.getElementById('pdv-desconto').value) || 0;
    const total = subtotal - desconto;
    
    const subtotalEl = document.getElementById('pdv-subtotal');
    const totalEl = document.getElementById('pdv-total');
    
    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
    if (totalEl) totalEl.textContent = formatCurrency(Math.max(0, total));
}

function toggleParcelas() {
    const pagamento = document.getElementById('pdv-pagamento').value;
    const parcelasContainer = document.getElementById('pdv-parcelas-container');
    
    if (parcelasContainer) {
        if (pagamento === 'cartao') {
            parcelasContainer.classList.remove('hidden');
        } else {
            parcelasContainer.classList.add('hidden');
        }
    }
}

function finalizarVenda() {
    const clienteId = document.getElementById('pdv-cliente').value;
    
    if (!clienteId) {
        showMessage('Selecione um cliente!', 'error');
        return;
    }
    
    if (carrinho.length === 0) {
        showMessage('Adicione produtos ao carrinho!', 'error');
        return;
    }
    
    const subtotal = carrinho.reduce((sum, item) => sum + item.subtotal, 0);
    const desconto = parseFloat(document.getElementById('pdv-desconto').value) || 0;
    const total = subtotal - desconto;
    const pagamento = document.getElementById('pdv-pagamento').value;
    const parcelas = document.getElementById('pdv-parcelas').value;
    
    if (total <= 0) {
        showMessage('Total deve ser maior que zero!', 'error');
        return;
    }
    
    // Criar venda
    const novaVenda = {
        id: nextVendaId++,
        clienteId: parseInt(clienteId),
        items: [...carrinho],
        subtotal: subtotal,
        desconto: desconto,
        total: total,
        pagamento: pagamento,
        parcelas: parseInt(parcelas),
        data: new Date().toISOString(),
        status: 'finalizada'
    };
    
    vendas.push(novaVenda);
    
    // Atualizar estoque
    carrinho.forEach(item => {
        const produto = produtos.find(p => p.id === item.produtoId);
        if (produto) {
            produto.estoque -= item.quantidade;
        }
    });
    
    // Atualizar total gasto do cliente
    const cliente = clientes.find(c => c.id === parseInt(clienteId));
    if (cliente) {
        cliente.totalGasto += total;
    }
    
    // Criar transação financeira
    const novaTransacao = {
        id: nextTransactionId++,
        tipo: 'receita',
        descricao: `Venda #${novaVenda.id.toString().padStart(3, '0')}`,
        valor: total,
        categoria: 'Vendas',
        vencimento: new Date().toISOString().split('T')[0],
        recorrente: false,
        status: pagamento === 'boleto' ? 'pendente' : 'pago',
        created: new Date().toISOString(),
        vendaId: novaVenda.id
    };
    
    transactions.push(novaTransacao);
    
    // Limpar carrinho
    carrinho = [];
    renderCarrinho();
    updateTotals();
    
    // Reset form
    document.getElementById('pdv-cliente').value = '';
    document.getElementById('pdv-search-produto').value = '';
    document.getElementById('pdv-desconto').value = '0';
    document.getElementById('pdv-pagamento').value = 'dinheiro';
    document.getElementById('pdv-produtos-list').innerHTML = '<div style="padding: 20px; text-align: center; color: #888;">Digite para buscar produtos...</div>';
    toggleParcelas();
    
    showMessage(`Venda #${novaVenda.id.toString().padStart(3, '0')} finalizada com sucesso!`, 'success');
    
    updateAllData();
}

function openHistoricoVendas() {
    const container = document.getElementById('historico-vendas-content');
    
    if (vendas.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhuma venda registrada</h3></div>';
    } else {
        const tableHTML = `
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Cliente</th>
                        <th>Data</th>
                        <th>Total</th>
                        <th>Pagamento</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${vendas.map(venda => {
                        const cliente = clientes.find(c => c.id === venda.clienteId);
                        return `
                            <tr>
                                <td>#${venda.id.toString().padStart(3, '0')}</td>
                                <td>${cliente ? cliente.nome : 'Cliente removido'}</td>
                                <td>${formatDate(venda.data)}</td>
                                <td>${formatCurrency(venda.total)}</td>
                                <td>${venda.pagamento}</td>
                                <td><span class="status-badge ${venda.status}">${venda.status}</span></td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
        container.innerHTML = tableHTML;
    }
    
    document.getElementById('historico-vendas-modal').classList.remove('hidden');
}

// RELATÓRIOS DE VENDAS
function updateRelatoriosVendas() {
    const dataInicio = new Date(document.getElementById('filtro-data-inicio').value);
    const dataFim = new Date(document.getElementById('filtro-data-fim').value);
    dataFim.setHours(23, 59, 59, 999);
    
    const vendasPeriodo = vendas.filter(v => {
        const dataVenda = new Date(v.data);
        return dataVenda >= dataInicio && dataVenda <= dataFim;
    });
    
    updateVendasPeriodoCards(vendasPeriodo);
    renderVendasCharts();
    renderVendasRecentesTable(vendasPeriodo);
}

function updateVendasPeriodoCards(vendasPeriodo) {
    const totalVendas = vendasPeriodo.reduce((sum, v) => sum + v.total, 0);
    const numeroVendas = vendasPeriodo.length;
    const ticketMedio = numeroVendas > 0 ? totalVendas / numeroVendas : 0;
    
    // Melhor cliente
    const clienteVendas = {};
    vendasPeriodo.forEach(venda => {
        clienteVendas[venda.clienteId] = (clienteVendas[venda.clienteId] || 0) + venda.total;
    });
    
    const melhorClienteId = Object.keys(clienteVendas).reduce((a, b) => 
        clienteVendas[a] > clienteVendas[b] ? a : b, 0
    );
    
    const melhorCliente = clientes.find(c => c.id == melhorClienteId);
    
    document.getElementById('total-vendas-periodo').textContent = formatCurrency(totalVendas);
    document.getElementById('numero-vendas-periodo').textContent = numeroVendas;
    document.getElementById('ticket-medio-periodo').textContent = formatCurrency(ticketMedio);
    document.getElementById('melhor-cliente-periodo').textContent = 
        melhorCliente ? melhorCliente.nome : 'Nenhum';
}

function renderVendasCharts() {
    renderVendasMesChart();
    renderTopProdutosChart();
}

function renderVendasMesChart() {
    const ctx = document.getElementById('vendas-mes-chart');
    if (!ctx) return;

    if (vendasMesChart) {
        vendasMesChart.destroy();
    }

    // Últimos 6 meses
    const currentDate = new Date();
    const months = [];
    const vendas6Meses = [];

    for (let i = 5; i >= 0; i--) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        const monthName = date.toLocaleDateString('pt-BR', { month: 'short' });
        months.push(monthName);

        const vendasDoMes = vendas
            .filter(v => {
                const vDate = new Date(v.data);
                return vDate.getMonth() === date.getMonth() && 
                       vDate.getFullYear() === date.getFullYear();
            })
            .reduce((sum, v) => sum + v.total, 0);

        vendas6Meses.push(vendasDoMes);
    }

    vendasMesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Vendas',
                data: vendas6Meses,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + value.toLocaleString('pt-BR');
                        }
                    }
                }
            }
        }
    });
}

function renderTopProdutosChart() {
    const ctx = document.getElementById('top-produtos-chart');
    if (!ctx) return;

    if (topProdutosChart) {
        topProdutosChart.destroy();
    }

    // Top 5 produtos por quantidade vendida
    const produtoVendas = {};
    vendas.forEach(venda => {
        venda.items.forEach(item => {
            const produto = produtos.find(p => p.id === item.produtoId);
            if (produto) {
                produtoVendas[produto.nome] = (produtoVendas[produto.nome] || 0) + item.quantidade;
            }
        });
    });

    const sortedProdutos = Object.entries(produtoVendas)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5);

    const labels = sortedProdutos.map(([nome]) => nome);
    const data = sortedProdutos.map(([, qtd]) => qtd);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];

    if (labels.length === 0) {
        topProdutosChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Nenhuma venda'],
                datasets: [{
                    data: [1],
                    backgroundColor: ['#ECEBD5']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
        return;
    }

    topProdutosChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantidade',
                data: data,
                backgroundColor: colors.slice(0, labels.length)
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function renderVendasRecentesTable(vendasPeriodo) {
    const container = document.getElementById('vendas-recentes-table');
    
    if (vendasPeriodo.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhuma venda no período</h3></div>';
        return;
    }

    const tableHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Data</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Pagamento</th>
                </tr>
            </thead>
            <tbody>
                ${vendasPeriodo.slice(-10).reverse().map(venda => {
                    const cliente = clientes.find(c => c.id === venda.clienteId);
                    return `
                        <tr>
                            <td>#${venda.id.toString().padStart(3, '0')}</td>
                            <td>${cliente ? cliente.nome : 'Cliente removido'}</td>
                            <td>${formatDateTime(venda.data)}</td>
                            <td>${venda.items.length} item(s)</td>
                            <td>${formatCurrency(venda.total)}</td>
                            <td>${venda.pagamento}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
    `;

    container.innerHTML = tableHTML;
}

// SISTEMA FINANCEIRO (métodos existentes)
function renderTransactionsTable(tipo) {
    const container = document.getElementById(`${tipo === 'receita' ? 'receitas' : 'despesas'}-table`);
    const filteredTransactions = getFilteredTransactions(tipo);

    if (filteredTransactions.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhuma transação encontrada</h3></div>';
        return;
    }

    const tableHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Valor</th>
                    <th>Vencimento</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${filteredTransactions.map(t => `
                    <tr>
                        <td>${t.descricao}</td>
                        <td>${t.categoria}</td>
                        <td>${formatCurrency(t.valor)}</td>
                        <td>${formatDate(t.vencimento)}</td>
                        <td><span class="status-badge ${t.status}">${t.status}</span></td>
                        <td>
                            <div class="transaction-actions">
                                <button class="action-btn edit" onclick="editTransaction(${t.id})" title="Editar">✏️</button>
                                <button class="action-btn delete" onclick="deleteTransaction(${t.id})" title="Excluir">🗑️</button>
                                ${t.status === 'pendente' ? 
                                    `<button class="action-btn pay" onclick="markAsPaid(${t.id})" title="Marcar como pago">✅</button>` : 
                                    `<button class="action-btn" onclick="markAsPending(${t.id})" title="Marcar como pendente">⏳</button>`
                                }
                            </div>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    container.innerHTML = tableHTML;
}

function getFilteredTransactions(tipo) {
    const sectionName = tipo === 'receita' ? 'receitas' : 'despesas';
    const statusFilter = document.getElementById(`filter-status-${sectionName}`).value;
    const categoryFilter = document.getElementById(`filter-categoria-${sectionName}`).value;

    return transactions.filter(t => {
        const matchesTipo = t.tipo === tipo;
        const matchesStatus = statusFilter === 'todos' || t.status === statusFilter;
        const matchesCategory = categoryFilter === 'todas' || t.categoria === categoryFilter;
        
        return matchesTipo && matchesStatus && matchesCategory;
    });
}

function filterTransactions(tipo) {
    renderTransactionsTable(tipo);
}

function updateReports() {
    const receitasPagas = transactions.filter(t => t.tipo === 'receita' && t.status === 'pago');
    const despesasPagas = transactions.filter(t => t.tipo === 'despesa' && t.status === 'pago');

    const totalReceitasPagas = receitasPagas.reduce((sum, t) => sum + t.valor, 0);
    const totalDespesasPagas = despesasPagas.reduce((sum, t) => sum + t.valor, 0);
    const resultado = totalReceitasPagas - totalDespesasPagas;

    document.getElementById('total-receitas-pagas').textContent = formatCurrency(totalReceitasPagas);
    document.getElementById('total-despesas-pagas').textContent = formatCurrency(totalDespesasPagas);
    document.getElementById('resultado-total').textContent = formatCurrency(resultado);

    const resultadoElement = document.getElementById('resultado-total');
    resultadoElement.className = resultado >= 0 ? 'card-value receitas' : 'card-value despesas';

    renderCategorySummary();
}

function renderCategorySummary() {
    const container = document.getElementById('resumo-categorias');
    const categoryTotals = {};

    transactions.filter(t => t.status === 'pago').forEach(t => {
        const key = `${t.categoria}-${t.tipo}`;
        categoryTotals[key] = (categoryTotals[key] || 0) + t.valor;
    });

    const summaryHTML = Object.entries(categoryTotals)
        .map(([key, valor]) => {
            const [categoria, tipo] = key.split('-');
            return `
                <div class="categoria-item">
                    <span class="categoria-nome">${categoria} (${tipo})</span>
                    <span class="categoria-valor ${tipo}">${formatCurrency(valor)}</span>
                </div>
            `;
        })
        .join('');

    container.innerHTML = summaryHTML || '<div class="empty-state"><h3>Nenhum dado disponível</h3></div>';
}

// TRANSAÇÕES
function openNewTransactionModal() {
    currentEditingType = 'transaction';
    currentEditingId = null;
    document.getElementById('transaction-modal-title').textContent = 'Nova Transação';
    document.getElementById('transaction-form').reset();
    document.getElementById('transaction-date').value = new Date().toISOString().split('T')[0];
    updateCategoriesSelect();
    document.getElementById('transaction-modal').classList.remove('hidden');
}

function editTransaction(id) {
    const transaction = transactions.find(t => t.id === id);
    if (!transaction) return;

    currentEditingType = 'transaction';
    currentEditingId = id;
    document.getElementById('transaction-modal-title').textContent = 'Editar Transação';
    
    document.getElementById('transaction-type').value = transaction.tipo;
    document.getElementById('transaction-description').value = transaction.descricao;
    document.getElementById('transaction-value').value = transaction.valor;
    document.getElementById('transaction-date').value = transaction.vencimento;
    document.getElementById('transaction-recurring').checked = transaction.recorrente;
    document.getElementById('transaction-status').value = transaction.status;
    
    updateCategoriesSelect();
    document.getElementById('transaction-category').value = transaction.categoria;
    
    document.getElementById('transaction-modal').classList.remove('hidden');
}

function deleteTransaction(id) {
    if (confirm('Tem certeza que deseja excluir esta transação?')) {
        transactions = transactions.filter(t => t.id !== id);
        updateAllData();
        showMessage('Transação excluída com sucesso!', 'success');
    }
}

function markAsPaid(id) {
    const transaction = transactions.find(t => t.id === id);
    if (transaction) {
        transaction.status = 'pago';
        updateAllData();
        showMessage('Transação marcada como paga!', 'success');
    }
}

function markAsPending(id) {
    const transaction = transactions.find(t => t.id === id);
    if (transaction) {
        transaction.status = 'pendente';
        updateAllData();
        showMessage('Transação marcada como pendente!', 'success');
    }
}

function updateCategoriesSelect() {
    const tipo = document.getElementById('transaction-type').value;
    const categorySelect = document.getElementById('transaction-category');
    
    categorySelect.innerHTML = '';
    categories[tipo].forEach(cat => {
        categorySelect.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
}

function handleTransactionSubmit(e) {
    e.preventDefault();

    const formData = {
        tipo: document.getElementById('transaction-type').value,
        descricao: document.getElementById('transaction-description').value,
        valor: parseFloat(document.getElementById('transaction-value').value),
        categoria: document.getElementById('transaction-category').value,
        vencimento: document.getElementById('transaction-date').value,
        recorrente: document.getElementById('transaction-recurring').checked,
        status: document.getElementById('transaction-status').value
    };

    if (currentEditingId) {
        const transaction = transactions.find(t => t.id === currentEditingId);
        Object.assign(transaction, formData);
        showMessage('Transação atualizada com sucesso!', 'success');
    } else {
        const newTransaction = {
            id: nextTransactionId++,
            ...formData,
            created: new Date().toISOString()
        };
        transactions.push(newTransaction);
        showMessage('Transação criada com sucesso!', 'success');
    }

    closeModal('transaction');
    updateAllData();
}

// MODAIS
function closeModal(type) {
    document.getElementById(`${type}-modal`).classList.add('hidden');
    currentEditingId = null;
    currentEditingType = null;
}

// UTILITÁRIOS
function updateAllData() {
    const activeSection = document.querySelector('.section.active');
    if (activeSection) {
        const sectionId = activeSection.id;
        showSection(sectionId);
    }
}

function formatCurrency(value) {
    return 'R$ ' + value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

function formatDateTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR') + ' ' + date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function showMessage(text, type) {
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    const mainContent = document.querySelector('.main-content');
    mainContent.insertBefore(message, mainContent.firstChild);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}