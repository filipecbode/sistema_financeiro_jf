// --- Dados do sistema (atualizados conforme instrução do usuário) ---
const initialTransactions = [
    { id: 1, tipo: "receita", descricao: "Salário", valor: 5000, categoria: "Salário", vencimento: "2025-01-05", recorrente: true, status: "pago", created: "2025-01-01T00:00:00.000Z" },
    { id: 2, tipo: "despesa", descricao: "Aluguel", valor: 1500, categoria: "Moradia", vencimento: "2025-01-10", recorrente: true, status: "pendente", created: "2025-01-01T00:00:00.000Z" },
    { id: 3, tipo: "receita", descricao: "Venda #001", valor: 299.90, categoria: "Vendas", vencimento: "2025-01-03", recorrente: false, status: "pago", created: "2025-01-03T10:30:00.000Z", vendaId: 1 },
    { id: 4, tipo: "despesa", descricao: "Conta de Luz", valor: 250, categoria: "Moradia", vencimento: "2025-01-15", recorrente: true, status: "pendente", created: "2025-01-01T00:00:00.000Z" }
];

const initialClients = [
    {id: 1, nome: "João Silva", email: "joao@email.com", telefone: "(11) 99999-1234", endereco: "Rua das Flores, 123 - São Paulo/SP", documento: "123.456.789-00", status: "ativo", cadastro: "2024-12-01T00:00:00.000Z", totalGasto: 299.90 },
    {id: 2, nome: "Maria Santos", email: "maria@email.com", telefone: "(11) 88888-5678", endereco: "Av. Principal, 456 - São Paulo/SP", documento: "987.654.321-00", status: "ativo", cadastro: "2024-11-15T00:00:00.000Z", totalGasto: 0 },
    {id: 3, nome: "Pedro Costa", email: "pedro@email.com", telefone: "(11) 77777-9999", endereco: "Rua do Comércio, 789 - São Paulo/SP", documento: "456.789.123-00", status: "ativo", cadastro: "2024-10-20T00:00:00.000Z", totalGasto: 0 }
];

const initialProducts = [
    { id: 1, nome: "Smartphone Galaxy", descricao: "Smartphone Android com 128GB", precoCusto: 200, precoVenda: 299.90, categoria: "Produto", estoque: 15, status: "ativo", cadastro: "2024-12-01T00:00:00.000Z" },
    { id: 2, nome: "Consultoria em TI", descricao: "Serviço de consultoria em tecnologia", precoCusto: 0, precoVenda: 150.00, categoria: "Serviço", estoque: 999, status: "ativo", cadastro: "2024-12-01T00:00:00.000Z" },
    { id: 3, nome: "Café Premium", descricao: "Café torrado especial 500g", precoCusto: 12, precoVenda: 24.90, categoria: "Produto", estoque: 3, status: "ativo", cadastro: "2024-12-01T00:00:00.000Z" },
    { id: 4, nome: "Licença de Software", descricao: "Licença anual de software", precoCusto: 50, precoVenda: 120.00, categoria: "Outros", estoque: 999, status: "ativo", cadastro: "2024-11-15T00:00:00.000Z" }
];

const initialSales = [
    { 
        id: 1, 
        clienteId: 1, 
        items: [{ produtoId: 1, quantidade: 1, precoUnitario: 299.90, subtotal: 299.90 }], 
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

const productCategories = ["Produto", "Serviço", "Outros"];

// Variáveis globais
let sessionActive = false;
let transactions = [...initialTransactions];
let clientes = [...initialClients];
let produtos = [...initialProducts];
let vendas = [...initialSales];
let nextTransactionId = 5;
let nextClienteId = 4;
let nextProdutoId = 5;
let nextVendaId = 2;
let carrinho = [];
let currentEditingId = null;
let currentEditingType = null;

// Charts
let financeiroChart = null;
let produtosVendidosChart = null;
let vendasMesChart = null;
let topProdutosChart = null;

// --- UTILITÁRIOS ---
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
    if (mainContent) {
        mainContent.insertBefore(message, mainContent.firstChild);
        setTimeout(() => { if (message.parentNode) message.remove(); }, 3500);
    }
}

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    populateSelects();
    
    // Foco no campo usuário
    const loginUsuario = document.getElementById('login-usuario');
    if (loginUsuario) loginUsuario.focus();
    
    // Inicia relógio
    updateDatetime();
    setInterval(updateDatetime, 1000);
});

function updateDatetime() {
    const now = new Date();
    const output = now.toLocaleDateString('pt-BR') + ' ' + now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    const el = document.getElementById('current-datetime');
    if (el) el.textContent = output;
}

function initializeApp() {
    const today = new Date().toISOString().split('T')[0];
    
    // Definir datas padrão
    const transactionDate = document.getElementById('transaction-date');
    if (transactionDate) transactionDate.value = today;
    
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);
    
    const filtroInicio = document.getElementById('filtro-data-inicio');
    const filtroFim = document.getElementById('filtro-data-fim');
    
    if (filtroInicio) filtroInicio.value = startDate.toISOString().split('T')[0];
    if (filtroFim) filtroFim.value = today;
}

function setupEventListeners() {
    // Sistema de login
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);

    // Navegação
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            showSection(section);
            updateActiveNav(this);
        });
    });

    // Botões nova transação contextuais
    const novaTransacaoBtn = document.getElementById('nova-transacao-btn');
    const novaReceitaBtn = document.getElementById('nova-receita-btn');
    const novaDespesaBtn = document.getElementById('nova-despesa-btn');
    
    if (novaTransacaoBtn) novaTransacaoBtn.addEventListener('click', () => openNewTransactionModal('general'));
    if (novaReceitaBtn) novaReceitaBtn.addEventListener('click', () => openNewTransactionModal('receita'));
    if (novaDespesaBtn) novaDespesaBtn.addEventListener('click', () => openNewTransactionModal('despesa'));

    // Modais
    const closeTransactionModal = document.getElementById('close-transaction-modal');
    const cancelTransaction = document.getElementById('cancel-transaction');
    
    if (closeTransactionModal) closeTransactionModal.addEventListener('click', () => closeModal('transaction'));
    if (cancelTransaction) cancelTransaction.addEventListener('click', () => closeModal('transaction'));

    // Cliente modal
    const novoClienteBtn = document.getElementById('novo-cliente-btn');
    const closeClienteModal = document.getElementById('close-cliente-modal');
    const cancelCliente = document.getElementById('cancel-cliente');
    
    if (novoClienteBtn) novoClienteBtn.addEventListener('click', openNewClienteModal);
    if (closeClienteModal) closeClienteModal.addEventListener('click', () => closeModal('cliente'));
    if (cancelCliente) cancelCliente.addEventListener('click', () => closeModal('cliente'));

    // Produto modal
    const novoProdutoBtn = document.getElementById('novo-produto-btn');
    const closeProdutoModal = document.getElementById('close-produto-modal');
    const cancelProduto = document.getElementById('cancel-produto');
    
    if (novoProdutoBtn) novoProdutoBtn.addEventListener('click', openNewProdutoModal);
    if (closeProdutoModal) closeProdutoModal.addEventListener('click', () => closeModal('produto'));
    if (cancelProduto) cancelProduto.addEventListener('click', () => closeModal('produto'));

    // Histórico vendas
    const historicoVendasBtn = document.getElementById('historico-vendas-btn');
    const closeHistoricoModal = document.getElementById('close-historico-modal');
    
    if (historicoVendasBtn) historicoVendasBtn.addEventListener('click', openHistoricoVendas);
    if (closeHistoricoModal) closeHistoricoModal.addEventListener('click', () => closeModal('historico-vendas'));

    // Formulários
    const transactionForm = document.getElementById('transaction-form');
    const clienteForm = document.getElementById('cliente-form');
    const produtoForm = document.getElementById('produto-form');
    
    if (transactionForm) transactionForm.addEventListener('submit', handleTransactionSubmit);
    if (clienteForm) clienteForm.addEventListener('submit', handleClienteSubmit);
    if (produtoForm) produtoForm.addEventListener('submit', handleProdutoSubmit);

    // Filtros
    const searchClientes = document.getElementById('search-clientes');
    const filterStatusClientes = document.getElementById('filter-status-clientes');
    
    if (searchClientes) searchClientes.addEventListener('input', filterClientes);
    if (filterStatusClientes) filterStatusClientes.addEventListener('change', filterClientes);

    const searchProdutos = document.getElementById('search-produtos');
    const filterCategoriaProdutos = document.getElementById('filter-categoria-produtos');
    const filterStatusProdutos = document.getElementById('filter-status-produtos');
    
    if (searchProdutos) searchProdutos.addEventListener('input', filterProdutos);
    if (filterCategoriaProdutos) filterCategoriaProdutos.addEventListener('change', filterProdutos);
    if (filterStatusProdutos) filterStatusProdutos.addEventListener('change', filterProdutos);

    // PDV
    const pdvSearchProduto = document.getElementById('pdv-search-produto');
    const pdvDesconto = document.getElementById('pdv-desconto');
    const pdvPagamento = document.getElementById('pdv-pagamento');
    const finalizarVendaBtn = document.getElementById('finalizar-venda-btn');
    
    if (pdvSearchProduto) pdvSearchProduto.addEventListener('input', searchProdutosPDV);
    if (pdvDesconto) pdvDesconto.addEventListener('input', updateTotals);
    if (pdvPagamento) pdvPagamento.addEventListener('change', toggleParcelas);
    if (finalizarVendaBtn) finalizarVendaBtn.addEventListener('click', finalizarVenda);

    // Relatórios
    const aplicarFiltroVendas = document.getElementById('aplicar-filtro-vendas');
    if (aplicarFiltroVendas) aplicarFiltroVendas.addEventListener('change', updateRelatoriosVendas);

    // Filtros financeiros
    const filterStatusReceitas = document.getElementById('filter-status-receitas');
    const filterCategoriaReceitas = document.getElementById('filter-categoria-receitas');
    const filterStatusDespesas = document.getElementById('filter-status-despesas');
    const filterCategoriaDespesas = document.getElementById('filter-categoria-despesas');
    
    if (filterStatusReceitas) filterStatusReceitas.addEventListener('change', () => filterTransactions('receita'));
    if (filterCategoriaReceitas) filterCategoriaReceitas.addEventListener('change', () => filterTransactions('receita'));
    if (filterStatusDespesas) filterStatusDespesas.addEventListener('change', () => filterTransactions('despesa'));
    if (filterCategoriaDespesas) filterCategoriaDespesas.addEventListener('change', () => filterTransactions('despesa'));

    // Filtros de data
    const filterDataInicioReceitas = document.getElementById('filter-data-inicio-receitas');
    const filterDataFimReceitas = document.getElementById('filter-data-fim-receitas');
    const filterDataInicioDespesas = document.getElementById('filter-data-inicio-despesas');
    const filterDataFimDespesas = document.getElementById('filter-data-fim-despesas');
    
    if (filterDataInicioReceitas) filterDataInicioReceitas.addEventListener('change', () => filterTransactions('receita'));
    if (filterDataFimReceitas) filterDataFimReceitas.addEventListener('change', () => filterTransactions('receita'));
    if (filterDataInicioDespesas) filterDataInicioDespesas.addEventListener('change', () => filterTransactions('despesa'));
    if (filterDataFimDespesas) filterDataFimDespesas.addEventListener('change', () => filterTransactions('despesa'));

    // Limpar filtros
    const limparFiltrosReceitas = document.getElementById('limpar-filtros-receitas');
    const limparFiltrosDespesas = document.getElementById('limpar-filtros-despesas');
    
    if (limparFiltrosReceitas) limparFiltrosReceitas.addEventListener('click', () => resetTransactionFilters('receita'));
    if (limparFiltrosDespesas) limparFiltrosDespesas.addEventListener('click', () => resetTransactionFilters('despesa'));

    // Outros
    const transactionType = document.getElementById('transaction-type');
    if (transactionType) transactionType.addEventListener('change', updateCategoriesSelect);

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

// --- AUTENTICAÇÃO ---
function handleLogin(e) {
    e.preventDefault();
    
    const usuarioInput = document.getElementById('login-usuario');
    const senhaInput = document.getElementById('login-senha');
    const erro = document.getElementById('login-error');
    const loginBtn = document.getElementById('login-btn');
    
    if (!usuarioInput || !senhaInput || !erro || !loginBtn) {
        console.error('Elementos do login não encontrados');
        return;
    }
    
    const usuario = usuarioInput.value.trim();
    const senha = senhaInput.value;
    
    loginBtn.disabled = true;
    loginBtn.textContent = 'Entrando...';
    erro.classList.add('hidden');
    erro.textContent = '';

    setTimeout(() => {
        if (usuario === 'admin' && senha === '123456') {
            sessionActive = true;
            const loginScreen = document.getElementById('login-screen');
            const mainSystem = document.getElementById('main-system');
            const loggedUser = document.getElementById('logged-user');
            
            if (loginScreen) loginScreen.classList.add('hidden');
            if (mainSystem) mainSystem.classList.remove('hidden');
            if (loggedUser) loggedUser.textContent = usuario;
            
            showSection('dashboard');
            updateAllData();
        } else {
            sessionActive = false;
            erro.textContent = 'Usuário ou senha inválidos!';
            erro.classList.remove('hidden');
        }
        
        loginBtn.disabled = false;
        loginBtn.textContent = 'Entrar';
    }, 500);
}

function handleLogout() {
    sessionActive = false;
    
    const loginScreen = document.getElementById('login-screen');
    const mainSystem = document.getElementById('main-system');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const loginUsuario = document.getElementById('login-usuario');
    
    if (mainSystem) mainSystem.classList.add('hidden');
    if (loginScreen) loginScreen.classList.remove('hidden');
    if (loginForm) loginForm.reset();
    if (loginError) loginError.classList.add('hidden');
    if (loginUsuario) loginUsuario.focus();
}

// --- NAVEGAÇÃO ---
function showSection(sectionName) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }

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

function updateActiveNav(activeItem) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    activeItem.classList.add('active');
}

// --- SELECTS ---
function populateSelects() {
    // Categorias receitas
    const receitasSelect = document.getElementById('filter-categoria-receitas');
    if (receitasSelect) {
        receitasSelect.innerHTML = '<option value="todas">Todas as categorias</option>';
        categories.receita.forEach(cat => {
            receitasSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }

    // Categorias despesas
    const despesasSelect = document.getElementById('filter-categoria-despesas');
    if (despesasSelect) {
        despesasSelect.innerHTML = '<option value="todas">Todas as categorias</option>';
        categories.despesa.forEach(cat => {
            despesasSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }

    // Categorias produtos
    const produtoCategoriaSelect = document.getElementById('filter-categoria-produtos');
    if (produtoCategoriaSelect) {
        produtoCategoriaSelect.innerHTML = '<option value="todas">Todas as categorias</option>';
        productCategories.forEach(cat => {
            produtoCategoriaSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }

    const produtoModalCategoriaSelect = document.getElementById('produto-categoria');
    if (produtoModalCategoriaSelect) {
        produtoModalCategoriaSelect.innerHTML = '';
        productCategories.forEach(cat => {
            produtoModalCategoriaSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }

    updateClientesSelect();
}

function updateClientesSelect() {
    const clientesSelect = document.getElementById('pdv-cliente');
    if (!clientesSelect) return;
    
    clientesSelect.innerHTML = '<option value="">Selecione um cliente...</option>';
    clientes.filter(c => c.status === 'ativo').forEach(cliente => {
        clientesSelect.innerHTML += `<option value="${cliente.id}">${cliente.nome}</option>`;
    });
}

// --- TRANSAÇÕES ---
function openNewTransactionModal(contextOrigin) {
    currentEditingType = 'transaction';
    currentEditingId = null;
    
    let tipo = 'receita';
    let titulo = 'Nova Transação';
    
    if (contextOrigin === 'receita') {
        tipo = 'receita';
        titulo = 'Nova Conta a Receber';
    } else if (contextOrigin === 'despesa') {
        tipo = 'despesa';
        titulo = 'Nova Conta a Pagar';
    }
    
    const modalTitle = document.getElementById('transaction-modal-title');
    const transactionForm = document.getElementById('transaction-form');
    const transactionType = document.getElementById('transaction-type');
    const transactionDate = document.getElementById('transaction-date');
    const modal = document.getElementById('transaction-modal');
    
    if (modalTitle) modalTitle.textContent = titulo;
    if (transactionForm) transactionForm.reset();
    if (transactionType) transactionType.value = tipo;
    if (transactionDate) transactionDate.value = new Date().toISOString().split('T')[0];
    
    updateCategoriesSelect();
    
    if (modal) modal.classList.remove('hidden');
}

function updateCategoriesSelect() {
    const transactionType = document.getElementById('transaction-type');
    const categorySelect = document.getElementById('transaction-category');
    
    if (!transactionType || !categorySelect) return;
    
    const tipo = transactionType.value;
    categorySelect.innerHTML = '';
    
    if (categories[tipo]) {
        categories[tipo].forEach(cat => {
            categorySelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }
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
    
    if (!formData.descricao || formData.valor <= 0 || !formData.categoria || !formData.vencimento) {
        showMessage('Preencha todos os campos obrigatórios corretamente.', 'error');
        return;
    }
    
    if (currentEditingId) {
        const transaction = transactions.find(t => t.id === currentEditingId);
        if (transaction) {
            Object.assign(transaction, formData);
            showMessage('Transação atualizada com sucesso!', 'success');
        }
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

function resetTransactionFilters(tipo) {
    if (tipo === 'receita') {
        const filterStatus = document.getElementById('filter-status-receitas');
        const filterCategoria = document.getElementById('filter-categoria-receitas');
        const filterDataInicio = document.getElementById('filter-data-inicio-receitas');
        const filterDataFim = document.getElementById('filter-data-fim-receitas');
        
        if (filterStatus) filterStatus.value = 'todos';
        if (filterCategoria) filterCategoria.value = 'todas';
        if (filterDataInicio) filterDataInicio.value = '';
        if (filterDataFim) filterDataFim.value = '';
    } else {
        const filterStatus = document.getElementById('filter-status-despesas');
        const filterCategoria = document.getElementById('filter-categoria-despesas');
        const filterDataInicio = document.getElementById('filter-data-inicio-despesas');
        const filterDataFim = document.getElementById('filter-data-fim-despesas');
        
        if (filterStatus) filterStatus.value = 'todos';
        if (filterCategoria) filterCategoria.value = 'todas';
        if (filterDataInicio) filterDataInicio.value = '';
        if (filterDataFim) filterDataFim.value = '';
    }
    renderTransactionsTable(tipo);
}

function filterTransactions(tipo) {
    renderTransactionsTable(tipo);
}

function getFilteredTransactions(tipo) {
    const isReceita = tipo === 'receita';
    const statusFilter = document.getElementById(isReceita ? 'filter-status-receitas' : 'filter-status-despesas');
    const categoryFilter = document.getElementById(isReceita ? 'filter-categoria-receitas' : 'filter-categoria-despesas');
    const dtInicio = document.getElementById(isReceita ? 'filter-data-inicio-receitas' : 'filter-data-inicio-despesas');
    const dtFim = document.getElementById(isReceita ? 'filter-data-fim-receitas' : 'filter-data-fim-despesas');
    
    const statusValue = statusFilter ? statusFilter.value : 'todos';
    const categoryValue = categoryFilter ? categoryFilter.value : 'todas';
    const dtInicioValue = dtInicio ? dtInicio.value : '';
    const dtFimValue = dtFim ? dtFim.value : '';
    
    return transactions.filter(t => {
        const matchesTipo = t.tipo === tipo;
        const matchesStatus = statusValue === 'todos' || t.status === statusValue;
        const matchesCategory = categoryValue === 'todas' || t.categoria === categoryValue;
        
        let matchesDate = true;
        if (dtInicioValue) matchesDate = matchesDate && (t.vencimento >= dtInicioValue);
        if (dtFimValue) matchesDate = matchesDate && (t.vencimento <= dtFimValue);
        
        return matchesTipo && matchesStatus && matchesCategory && matchesDate;
    });
}

function renderTransactionsTable(tipo) {
    const tableId = tipo === 'receita' ? 'receitas-table' : 'despesas-table';
    const filteredTransactions = getFilteredTransactions(tipo);
    const container = document.getElementById(tableId);
    
    if (!container) return;
    
    if (filteredTransactions.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhuma transação encontrada</h3></div>';
        return;
    }
    
    container.innerHTML = `
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
                </tr>`).join('')}
            </tbody>
        </table>
    `;
}

function editTransaction(id) {
    const transaction = transactions.find(t => t.id === id);
    if (!transaction) return;
    
    currentEditingType = 'transaction';
    currentEditingId = id;
    
    const modalTitle = document.getElementById('transaction-modal-title');
    const transactionType = document.getElementById('transaction-type');
    const transactionDescription = document.getElementById('transaction-description');
    const transactionValue = document.getElementById('transaction-value');
    const transactionDate = document.getElementById('transaction-date');
    const transactionRecurring = document.getElementById('transaction-recurring');
    const transactionStatus = document.getElementById('transaction-status');
    const modal = document.getElementById('transaction-modal');
    
    if (modalTitle) modalTitle.textContent = 'Editar Transação';
    if (transactionType) transactionType.value = transaction.tipo;
    if (transactionDescription) transactionDescription.value = transaction.descricao;
    if (transactionValue) transactionValue.value = transaction.valor;
    if (transactionDate) transactionDate.value = transaction.vencimento;
    if (transactionRecurring) transactionRecurring.checked = transaction.recorrente;
    if (transactionStatus) transactionStatus.value = transaction.status;
    
    updateCategoriesSelect();
    
    const transactionCategory = document.getElementById('transaction-category');
    if (transactionCategory) transactionCategory.value = transaction.categoria;
    
    if (modal) modal.classList.remove('hidden');
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

// --- DASHBOARD ---
function updateDashboard() {
    updateDashboardCards();
    updateDashboardAlerts();
}

function updateDashboardCards() {
    const receitasPagas = transactions.filter(t => t.tipo === 'receita' && t.status === 'pago');
    const despesasPagas = transactions.filter(t => t.tipo === 'despesa' && t.status === 'pago');
    const totalReceitas = receitasPagas.reduce((sum, t) => sum + t.valor, 0);
    const totalDespesas = despesasPagas.reduce((sum, t) => sum + t.valor, 0);
    const saldoAtual = totalReceitas - totalDespesas;

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const vendasDoMes = vendas
        .filter(v => {
            const date = new Date(v.data);
            return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
        })
        .reduce((sum, v) => sum + v.total, 0);

    const clientesAtivos = clientes.filter(c => c.status === 'ativo').length;
    const produtosEstoque = produtos.filter(p => p.status === 'ativo' && p.estoque > 0).length;

    const saldoAtualEl = document.getElementById('saldo-atual');
    const vendasMesEl = document.getElementById('vendas-mes');
    const clientesAtivosEl = document.getElementById('clientes-ativos');
    const produtosEstoqueEl = document.getElementById('produtos-estoque');

    if (saldoAtualEl) {
        saldoAtualEl.textContent = formatCurrency(saldoAtual);
        saldoAtualEl.className = saldoAtual >= 0 ? 'card-value receitas' : 'card-value despesas';
    }
    if (vendasMesEl) vendasMesEl.textContent = formatCurrency(vendasDoMes);
    if (clientesAtivosEl) clientesAtivosEl.textContent = clientesAtivos;
    if (produtosEstoqueEl) produtosEstoqueEl.textContent = produtosEstoque;
}

function updateDashboardAlerts() {
    const alertsContainer = document.getElementById('dashboard-alerts');
    if (!alertsContainer) return;
    
    const alerts = [];

    const produtosEstoqueBaixo = produtos.filter(p => p.status === 'ativo' && p.estoque < 5);
    if (produtosEstoqueBaixo.length > 0) {
        alerts.push({
            type: 'warning',
            message: `⚠️ ${produtosEstoqueBaixo.length} produto(s) com estoque baixo`
        });
    }

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
    if (!container) return;
    
    const atividades = [];

    vendas.slice(-5).forEach(venda => {
        const cliente = clientes.find(c => c.id === venda.clienteId);
        atividades.push({
            tipo: 'venda',
            descricao: `Venda para ${cliente ? cliente.nome : 'Cliente'}`,
            valor: venda.total,
            data: venda.data
        });
    });

    transactions.slice(-3).forEach(trans => {
        atividades.push({
            tipo: trans.tipo,
            descricao: trans.descricao,
            valor: trans.valor,
            data: trans.created
        });
    });

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

// --- CLIENTES ---
function renderClientesTable() {
    const container = document.getElementById('clientes-table');
    if (!container) return;
    
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
    const searchInput = document.getElementById('search-clientes');
    const statusFilter = document.getElementById('filter-status-clientes');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const statusValue = statusFilter ? statusFilter.value : 'todos';

    return clientes.filter(cliente => {
        const matchesSearch = cliente.nome.toLowerCase().includes(searchTerm) ||
                            cliente.email.toLowerCase().includes(searchTerm) ||
                            cliente.telefone.includes(searchTerm);
        const matchesStatus = statusValue === 'todos' || cliente.status === statusValue;
        
        return matchesSearch && matchesStatus;
    });
}

function filterClientes() {
    renderClientesTable();
}

function openNewClienteModal() {
    currentEditingType = 'cliente';
    currentEditingId = null;
    
    const modalTitle = document.getElementById('cliente-modal-title');
    const clienteForm = document.getElementById('cliente-form');
    const modal = document.getElementById('cliente-modal');
    
    if (modalTitle) modalTitle.textContent = 'Novo Cliente';
    if (clienteForm) clienteForm.reset();
    if (modal) modal.classList.remove('hidden');
}

function editCliente(id) {
    const cliente = clientes.find(c => c.id === id);
    if (!cliente) return;

    currentEditingType = 'cliente';
    currentEditingId = id;
    
    const modalTitle = document.getElementById('cliente-modal-title');
    const clienteNome = document.getElementById('cliente-nome');
    const clienteEmail = document.getElementById('cliente-email');
    const clienteTelefone = document.getElementById('cliente-telefone');
    const clienteEndereco = document.getElementById('cliente-endereco');
    const clienteDocumento = document.getElementById('cliente-documento');
    const clienteStatus = document.getElementById('cliente-status');
    const modal = document.getElementById('cliente-modal');
    
    if (modalTitle) modalTitle.textContent = 'Editar Cliente';
    if (clienteNome) clienteNome.value = cliente.nome;
    if (clienteEmail) clienteEmail.value = cliente.email;
    if (clienteTelefone) clienteTelefone.value = cliente.telefone;
    if (clienteEndereco) clienteEndereco.value = cliente.endereco;
    if (clienteDocumento) clienteDocumento.value = cliente.documento;
    if (clienteStatus) clienteStatus.value = cliente.status;
    if (modal) modal.classList.remove('hidden');
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
        if (cliente) {
            Object.assign(cliente, formData);
            showMessage('Cliente atualizado com sucesso!', 'success');
        }
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

// --- PRODUTOS ---
function renderProdutosTable() {
    const container = document.getElementById('produtos-table');
    if (!container) return;
    
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
                    const margem = produto.precoCusto > 0 ? ((produto.precoVenda - produto.precoCusto) / produto.precoCusto * 100) : 100;
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
    const searchInput = document.getElementById('search-produtos');
    const categoryFilter = document.getElementById('filter-categoria-produtos');
    const statusFilter = document.getElementById('filter-status-produtos');
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const categoryValue = categoryFilter ? categoryFilter.value : 'todas';
    const statusValue = statusFilter ? statusFilter.value : 'todos';

    return produtos.filter(produto => {
        const matchesSearch = produto.nome.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryValue === 'todas' || produto.categoria === categoryValue;
        const matchesStatus = statusValue === 'todos' || produto.status === statusValue;
        
        return matchesSearch && matchesCategory && matchesStatus;
    });
}

function filterProdutos() {
    renderProdutosTable();
}

function openNewProdutoModal() {
    currentEditingType = 'produto';
    currentEditingId = null;
    
    const modalTitle = document.getElementById('produto-modal-title');
    const produtoForm = document.getElementById('produto-form');
    const modal = document.getElementById('produto-modal');
    
    if (modalTitle) modalTitle.textContent = 'Novo Produto';
    if (produtoForm) produtoForm.reset();
    if (modal) modal.classList.remove('hidden');
}

function editProduto(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return;

    currentEditingType = 'produto';
    currentEditingId = id;
    
    const modalTitle = document.getElementById('produto-modal-title');
    const produtoNome = document.getElementById('produto-nome');
    const produtoDescricao = document.getElementById('produto-descricao');
    const produtoPrecoCusto = document.getElementById('produto-preco-custo');
    const produtoPrecoVenda = document.getElementById('produto-preco-venda');
    const produtoCategoria = document.getElementById('produto-categoria');
    const produtoEstoque = document.getElementById('produto-estoque');
    const produtoStatus = document.getElementById('produto-status');
    const modal = document.getElementById('produto-modal');
    
    if (modalTitle) modalTitle.textContent = 'Editar Produto';
    if (produtoNome) produtoNome.value = produto.nome;
    if (produtoDescricao) produtoDescricao.value = produto.descricao;
    if (produtoPrecoCusto) produtoPrecoCusto.value = produto.precoCusto;
    if (produtoPrecoVenda) produtoPrecoVenda.value = produto.precoVenda;
    if (produtoCategoria) produtoCategoria.value = produto.categoria;
    if (produtoEstoque) produtoEstoque.value = produto.estoque;
    if (produtoStatus) produtoStatus.value = produto.status;
    if (modal) modal.classList.remove('hidden');
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
        if (produto) {
            Object.assign(produto, formData);
            showMessage('Produto atualizado com sucesso!', 'success');
        }
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

// --- PDV ---
function initializePDV() {
    updateClientesSelect();
    searchProdutosPDV();
    renderCarrinho();
    updateTotals();
    toggleParcelas();
    
    const searchInput = document.getElementById('pdv-search-produto');
    const produtosList = document.getElementById('pdv-produtos-list');
    
    if (searchInput && produtosList && searchInput.value === '') {
        produtosList.innerHTML = '<div style="padding: 20px; text-align: center; color: #888;">Digite para buscar produtos...</div>';
    }
}

function searchProdutosPDV() {
    const searchInput = document.getElementById('pdv-search-produto');
    const container = document.getElementById('pdv-produtos-list');
    
    if (!searchInput || !container) return;
    
    const searchTerm = searchInput.value.toLowerCase();
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
    const descontoInput = document.getElementById('pdv-desconto');
    const desconto = descontoInput ? parseFloat(descontoInput.value) || 0 : 0;
    const total = subtotal - desconto;
    
    const subtotalEl = document.getElementById('pdv-subtotal');
    const totalEl = document.getElementById('pdv-total');
    
    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
    if (totalEl) totalEl.textContent = formatCurrency(Math.max(0, total));
}

function toggleParcelas() {
    const pagamentoSelect = document.getElementById('pdv-pagamento');
    const parcelasContainer = document.getElementById('pdv-parcelas-container');
    
    if (pagamentoSelect && parcelasContainer) {
        if (pagamentoSelect.value === 'cartao') {
            parcelasContainer.classList.remove('hidden');
        } else {
            parcelasContainer.classList.add('hidden');
        }
    }
}

function finalizarVenda() {
    const clienteSelect = document.getElementById('pdv-cliente');
    const descontoInput = document.getElementById('pdv-desconto');
    const pagamentoSelect = document.getElementById('pdv-pagamento');
    const parcelasSelect = document.getElementById('pdv-parcelas');
    
    if (!clienteSelect) {
        showMessage('Erro: Cliente select não encontrado!', 'error');
        return;
    }
    
    const clienteId = clienteSelect.value;
    
    if (!clienteId) {
        showMessage('Selecione um cliente!', 'error');
        return;
    }
    
    if (carrinho.length === 0) {
        showMessage('Adicione produtos ao carrinho!', 'error');
        return;
    }
    
    const subtotal = carrinho.reduce((sum, item) => sum + item.subtotal, 0);
    const desconto = descontoInput ? parseFloat(descontoInput.value) || 0 : 0;
    const total = subtotal - desconto;
    const pagamento = pagamentoSelect ? pagamentoSelect.value : 'dinheiro';
    const parcelas = parcelasSelect ? parseInt(parcelasSelect.value) : 1;
    
    if (total <= 0) {
        showMessage('Total deve ser maior que zero!', 'error');
        return;
    }
    
    const novaVenda = {
        id: nextVendaId++,
        clienteId: parseInt(clienteId),
        items: [...carrinho],
        subtotal: subtotal,
        desconto: desconto,
        total: total,
        pagamento: pagamento,
        parcelas: parcelas,
        data: new Date().toISOString(),
        status: 'finalizada'
    };
    
    vendas.push(novaVenda);
    
    carrinho.forEach(item => {
        const produto = produtos.find(p => p.id === item.produtoId);
        if (produto) {
            produto.estoque -= item.quantidade;
        }
    });
    
    const cliente = clientes.find(c => c.id === parseInt(clienteId));
    if (cliente) {
        cliente.totalGasto += total;
    }
    
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
    
    carrinho = [];
    renderCarrinho();
    updateTotals();
    
    if (clienteSelect) clienteSelect.value = '';
    const searchProduto = document.getElementById('pdv-search-produto');
    if (searchProduto) searchProduto.value = '';
    if (descontoInput) descontoInput.value = '0';
    if (pagamentoSelect) pagamentoSelect.value = 'dinheiro';
    
    const produtosList = document.getElementById('pdv-produtos-list');
    if (produtosList) {
        produtosList.innerHTML = '<div style="padding: 20px; text-align: center; color: #888;">Digite para buscar produtos...</div>';
    }
    
    toggleParcelas();
    
    showMessage(`Venda #${novaVenda.id.toString().padStart(3, '0')} finalizada com sucesso!`, 'success');
    
    updateAllData();
}

function openHistoricoVendas() {
    const container = document.getElementById('historico-vendas-content');
    const modal = document.getElementById('historico-vendas-modal');
    
    if (!container || !modal) return;
    
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
    
    modal.classList.remove('hidden');
}

// --- RELATÓRIOS ---
function updateRelatoriosVendas() {
    const dataInicioInput = document.getElementById('filtro-data-inicio');
    const dataFimInput = document.getElementById('filtro-data-fim');
    
    if (!dataInicioInput || !dataFimInput) return;
    
    const dataInicio = new Date(dataInicioInput.value);
    const dataFim = new Date(dataFimInput.value);
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
    
    const clienteVendas = {};
    vendasPeriodo.forEach(venda => {
        clienteVendas[venda.clienteId] = (clienteVendas[venda.clienteId] || 0) + venda.total;
    });
    
    const melhorClienteId = Object.keys(clienteVendas).reduce((a, b) => 
        clienteVendas[a] > clienteVendas[b] ? a : b, 0
    );
    
    const melhorCliente = clientes.find(c => c.id == melhorClienteId);
    
    const totalVendasPeriodoEl = document.getElementById('total-vendas-periodo');
    const numeroVendasPeriodoEl = document.getElementById('numero-vendas-periodo');
    const ticketMedioPeriodoEl = document.getElementById('ticket-medio-periodo');
    const melhorClientePeriodoEl = document.getElementById('melhor-cliente-periodo');
    
    if (totalVendasPeriodoEl) totalVendasPeriodoEl.textContent = formatCurrency(totalVendas);
    if (numeroVendasPeriodoEl) numeroVendasPeriodoEl.textContent = numeroVendas;
    if (ticketMedioPeriodoEl) ticketMedioPeriodoEl.textContent = formatCurrency(ticketMedio);
    if (melhorClientePeriodoEl) melhorClientePeriodoEl.textContent = melhorCliente ? melhorCliente.nome : 'Nenhum';
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
    if (!container) return;
    
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

function updateReports() {
    const receitasPagas = transactions.filter(t => t.tipo === 'receita' && t.status === 'pago');
    const despesasPagas = transactions.filter(t => t.tipo === 'despesa' && t.status === 'pago');

    const totalReceitasPagas = receitasPagas.reduce((sum, t) => sum + t.valor, 0);
    const totalDespesasPagas = despesasPagas.reduce((sum, t) => sum + t.valor, 0);
    const resultado = totalReceitasPagas - totalDespesasPagas;

    const totalReceitasPagasEl = document.getElementById('total-receitas-pagas');
    const totalDespesasPagasEl = document.getElementById('total-despesas-pagas');
    const resultadoTotalEl = document.getElementById('resultado-total');

    if (totalReceitasPagasEl) totalReceitasPagasEl.textContent = formatCurrency(totalReceitasPagas);
    if (totalDespesasPagasEl) totalDespesasPagasEl.textContent = formatCurrency(totalDespesasPagas);
    if (resultadoTotalEl) {
        resultadoTotalEl.textContent = formatCurrency(resultado);
        resultadoTotalEl.className = resultado >= 0 ? 'card-value receitas' : 'card-value despesas';
    }

    renderCategorySummary();
}

function renderCategorySummary() {
    const container = document.getElementById('resumo-categorias');
    if (!container) return;
    
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

// --- MODAIS ---
function closeModal(type) {
    const modal = document.getElementById(`${type}-modal`);
    if (modal) modal.classList.add('hidden');
    currentEditingId = null;
    currentEditingType = null;
}

function updateAllData() {
    const activeSection = document.querySelector('.section.active');
    if (activeSection) {
        showSection(activeSection.id);
    }
}

// --- FUNÇÕES GLOBAIS PARA ONCLICK ---
window.editTransaction = editTransaction;
window.deleteTransaction = deleteTransaction;
window.markAsPaid = markAsPaid;
window.markAsPending = markAsPending;
window.editCliente = editCliente;
window.deleteCliente = deleteCliente;
window.viewClienteHistory = viewClienteHistory;
window.editProduto = editProduto;
window.deleteProduto = deleteProduto;
window.addToCart = addToCart;
window.changeQuantity = changeQuantity;
window.setQuantity = setQuantity;
window.removeFromCart = removeFromCart;