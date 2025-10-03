// Dados iniciais do sistema baseados nos dados reais fornecidos
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

let fornecedores = [
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

let clientes = [];
let produtos = [];
let vendas = [];

const categories = {
    receita: ["Vendas", "Serviços", "Freelances", "Investimentos", "Outros"],
    despesa: ["Serviços Públicos", "Cartão de Crédito", "Moradia", "Educação", "Tecnologia", "Tributos", "Folha de Pagamento", "Serviços Bancários", "Outros"]
};

const productCategories = ["Produto", "Serviço", "Outros"];

// Variáveis de controle
let nextTransactionId = 24;
let nextClienteId = 1;
let nextProdutoId = 1;
let nextVendaId = 1;
let nextFornecedorId = 18;
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
    checkLoginStatus();
});

function initializeApp() {
    const today = new Date().toISOString().split('T')[0];
    const transactionDateInput = document.getElementById('transaction-date');
    if (transactionDateInput) {
        transactionDateInput.value = today;
    }
    
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);
    const filtroDataInicio = document.getElementById('filtro-data-inicio');
    const filtroDataFim = document.getElementById('filtro-data-fim');
    if (filtroDataInicio) filtroDataInicio.value = startDate.toISOString().split('T')[0];
    if (filtroDataFim) filtroDataFim.value = today;
}

function setupEventListeners() {
    // Login - SEMPRE configurar, independente do status
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
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
    const novaTransacaoBtn = document.getElementById('nova-transacao-btn');
    const novaReceitaBtn = document.getElementById('nova-receita-btn');
    const novaDespesaBtn = document.getElementById('nova-despesa-btn');
    
    if (novaTransacaoBtn) novaTransacaoBtn.addEventListener('click', openNewTransactionModal);
    if (novaReceitaBtn) novaReceitaBtn.addEventListener('click', () => openNewTransactionModal('receita'));
    if (novaDespesaBtn) novaDespesaBtn.addEventListener('click', () => openNewTransactionModal('despesa'));
    
    const closeTransactionModal = document.getElementById('close-transaction-modal');
    const cancelTransaction = document.getElementById('cancel-transaction');
    if (closeTransactionModal) closeTransactionModal.addEventListener('click', () => closeModal('transaction'));
    if (cancelTransaction) cancelTransaction.addEventListener('click', () => closeModal('transaction'));
    
    // Modais - Cliente
    const novoClienteBtn = document.getElementById('novo-cliente-btn');
    if (novoClienteBtn) novoClienteBtn.addEventListener('click', openNewClienteModal);
    const closeClienteModal = document.getElementById('close-cliente-modal');
    const cancelCliente = document.getElementById('cancel-cliente');
    if (closeClienteModal) closeClienteModal.addEventListener('click', () => closeModal('cliente'));
    if (cancelCliente) cancelCliente.addEventListener('click', () => closeModal('cliente'));
    
    // Modais - Produto
    const novoProdutoBtn = document.getElementById('novo-produto-btn');
    if (novoProdutoBtn) novoProdutoBtn.addEventListener('click', openNewProdutoModal);
    const closeProdutoModal = document.getElementById('close-produto-modal');
    const cancelProduto = document.getElementById('cancel-produto');
    if (closeProdutoModal) closeProdutoModal.addEventListener('click', () => closeModal('produto'));
    if (cancelProduto) cancelProduto.addEventListener('click', () => closeModal('produto'));
    
    // Modais - Fornecedor
    const novoFornecedorBtn = document.getElementById('novo-fornecedor-btn');
    if (novoFornecedorBtn) novoFornecedorBtn.addEventListener('click', openNewFornecedorModal);
    const closeFornecedorModal = document.getElementById('close-fornecedor-modal');
    const cancelFornecedor = document.getElementById('cancel-fornecedor');
    if (closeFornecedorModal) closeFornecedorModal.addEventListener('click', () => closeModal('fornecedor'));
    if (cancelFornecedor) cancelFornecedor.addEventListener('click', () => closeModal('fornecedor'));
    
    // Modal - Histórico vendas
    const historicoVendasBtn = document.getElementById('historico-vendas-btn');
    if (historicoVendasBtn) historicoVendasBtn.addEventListener('click', openHistoricoVendas);
    const closeHistoricoModal = document.getElementById('close-historico-modal');
    if (closeHistoricoModal) closeHistoricoModal.addEventListener('click', () => closeModal('historico-vendas'));

    // Formulários
    const transactionForm = document.getElementById('transaction-form');
    const clienteForm = document.getElementById('cliente-form');
    const produtoForm = document.getElementById('produto-form');
    const fornecedorForm = document.getElementById('fornecedor-form');
    
    if (transactionForm) transactionForm.addEventListener('submit', handleTransactionSubmit);
    if (clienteForm) clienteForm.addEventListener('submit', handleClienteSubmit);
    if (produtoForm) produtoForm.addEventListener('submit', handleProdutoSubmit);
    if (fornecedorForm) fornecedorForm.addEventListener('submit', handleFornecedorSubmit);
    
    // Filtros e busca
    const searchClientes = document.getElementById('search-clientes');
    const filterStatusClientes = document.getElementById('filter-status-clientes');
    const searchProdutos = document.getElementById('search-produtos');
    const filterCategoriaProdutos = document.getElementById('filter-categoria-produtos');
    const filterStatusProdutos = document.getElementById('filter-status-produtos');
    const searchFornecedores = document.getElementById('search-fornecedores');
    const filterStatusFornecedores = document.getElementById('filter-status-fornecedores');
    
    if (searchClientes) searchClientes.addEventListener('input', filterClientes);
    if (filterStatusClientes) filterStatusClientes.addEventListener('change', filterClientes);
    if (searchProdutos) searchProdutos.addEventListener('input', filterProdutos);
    if (filterCategoriaProdutos) filterCategoriaProdutos.addEventListener('change', filterProdutos);
    if (filterStatusProdutos) filterStatusProdutos.addEventListener('change', filterProdutos);
    if (searchFornecedores) searchFornecedores.addEventListener('input', filterFornecedores);
    if (filterStatusFornecedores) filterStatusFornecedores.addEventListener('change', filterFornecedores);
    
    // Filtros por data
    const filterDataInicioReceitas = document.getElementById('filter-data-inicio-receitas');
    const filterDataFimReceitas = document.getElementById('filter-data-fim-receitas');
    const filterStatusReceitas = document.getElementById('filter-status-receitas');
    const filterCategoriaReceitas = document.getElementById('filter-categoria-receitas');
    const limparFiltrosReceitas = document.getElementById('limpar-filtros-receitas');
    
    if (filterDataInicioReceitas) filterDataInicioReceitas.addEventListener('change', () => filterTransactions('receita'));
    if (filterDataFimReceitas) filterDataFimReceitas.addEventListener('change', () => filterTransactions('receita'));
    if (filterStatusReceitas) filterStatusReceitas.addEventListener('change', () => filterTransactions('receita'));
    if (filterCategoriaReceitas) filterCategoriaReceitas.addEventListener('change', () => filterTransactions('receita'));
    if (limparFiltrosReceitas) limparFiltrosReceitas.addEventListener('click', () => clearFilters('receitas'));
    
    const filterDataInicioDespesas = document.getElementById('filter-data-inicio-despesas');
    const filterDataFimDespesas = document.getElementById('filter-data-fim-despesas');
    const filterStatusDespesas = document.getElementById('filter-status-despesas');
    const filterCategoriaDespesas = document.getElementById('filter-categoria-despesas');
    const limparFiltrosDespesas = document.getElementById('limpar-filtros-despesas');
    
    if (filterDataInicioDespesas) filterDataInicioDespesas.addEventListener('change', () => filterTransactions('despesa'));
    if (filterDataFimDespesas) filterDataFimDespesas.addEventListener('change', () => filterTransactions('despesa'));
    if (filterStatusDespesas) filterStatusDespesas.addEventListener('change', () => filterTransactions('despesa'));
    if (filterCategoriaDespesas) filterCategoriaDespesas.addEventListener('change', () => filterTransactions('despesa'));
    if (limparFiltrosDespesas) limparFiltrosDespesas.addEventListener('click', () => clearFilters('despesas'));
    
    // PDV
    const pdvSearchProduto = document.getElementById('pdv-search-produto');
    if (pdvSearchProduto) pdvSearchProduto.addEventListener('input', searchProdutosPDV);
    const pdvDesconto = document.getElementById('pdv-desconto');
    if (pdvDesconto) pdvDesconto.addEventListener('input', updateTotals);
    const pdvPagamento = document.getElementById('pdv-pagamento');
    if (pdvPagamento) pdvPagamento.addEventListener('change', toggleParcelas);
    const finalizarVendaBtn = document.getElementById('finalizar-venda-btn');
    if (finalizarVendaBtn) finalizarVendaBtn.addEventListener('click', finalizarVenda);
    
    // Relatórios
    const aplicarFiltroVendas = document.getElementById('aplicar-filtro-vendas');
    if (aplicarFiltroVendas) aplicarFiltroVendas.addEventListener('click', updateRelatoriosVendas);
    
    // Change handlers
    const transactionType = document.getElementById('transaction-type');
    if (transactionType) transactionType.addEventListener('change', updateCategoriesSelect);
    
    const transactionRecurring = document.getElementById('transaction-recurring');
    if (transactionRecurring) transactionRecurring.addEventListener('change', toggleParcelasGroup);
    
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

function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem('logged_in') === 'true';
    const loginScreen = document.getElementById('login-screen');
    const mainSystem = document.getElementById('main-system');
    
    if (isLoggedIn) {
        if (loginScreen) loginScreen.classList.add('hidden');
        if (mainSystem) mainSystem.classList.remove('hidden');
        populateSelects();
        showSection('dashboard');
        updateAllData();
    } else {
        if (loginScreen) loginScreen.classList.remove('hidden');
        if (mainSystem) mainSystem.classList.add('hidden');
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('login-error');
    
    if (username === 'admin' && password === '123456') {
        sessionStorage.setItem('logged_in', 'true');
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-system').classList.remove('hidden');
        populateSelects();
        showSection('dashboard');
        updateAllData();
    } else {
        if (errorDiv) errorDiv.classList.remove('hidden');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        
        setTimeout(() => {
            if (errorDiv) errorDiv.classList.add('hidden');
        }, 3000);
    }
}

function handleLogout() {
    sessionStorage.removeItem('logged_in');
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('main-system').classList.add('hidden');
}

function populateSelects() {
    // Categorias financeiras
    const receitasSelect = document.getElementById('filter-categoria-receitas');
    if (receitasSelect) {
        receitasSelect.innerHTML = '<option value="todas">Todas as Categorias</option>';
        categories.receita.forEach(cat => {
            receitasSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }

    const despesasSelect = document.getElementById('filter-categoria-despesas');
    if (despesasSelect) {
        despesasSelect.innerHTML = '<option value="todas">Todas as Categorias</option>';
        categories.despesa.forEach(cat => {
            despesasSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }
    
    // Categorias de produtos
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
    
    // Fornecedores
    updateFornecedoresSelect();
    
    // Inicializar clientes para PDV
    updateClientesSelect();
}

function updateFornecedoresSelect() {
    const fornecedorSelect = document.getElementById('transaction-fornecedor');
    if (!fornecedorSelect) return;
    
    fornecedorSelect.innerHTML = '<option value="">Selecione um fornecedor...</option>';
    fornecedores.filter(f => f.status === 'ativo').forEach(fornecedor => {
        fornecedorSelect.innerHTML += `<option value="${fornecedor.id}">${fornecedor.nome}</option>`;
    });
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

    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }

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
            case 'fornecedores':
                renderFornecedoresTable();
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
        const produtosList = document.getElementById('pdv-produtos-list');
        if (produtosList) {
            produtosList.innerHTML = '<div style="padding: 20px; text-align: center; color: #888;">Digite para buscar produtos...</div>';
        }
    }
}

function updateActiveNav(activeItem) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    activeItem.classList.add('active');
}

function clearFilters(tipo) {
    const filterDataInicio = document.getElementById(`filter-data-inicio-${tipo}`);
    const filterDataFim = document.getElementById(`filter-data-fim-${tipo}`);
    const filterStatus = document.getElementById(`filter-status-${tipo}`);
    const filterCategoria = document.getElementById(`filter-categoria-${tipo}`);
    
    if (filterDataInicio) filterDataInicio.value = '';
    if (filterDataFim) filterDataFim.value = '';
    if (filterStatus) filterStatus.value = 'todos';
    if (filterCategoria) filterCategoria.value = 'todas';
    
    const tipoSingular = tipo === 'receitas' ? 'receita' : 'despesa';
    filterTransactions(tipoSingular);
}

function toggleParcelasGroup() {
    const recurring = document.getElementById('transaction-recurring').checked;
    const parcelasGroup = document.getElementById('parcelas-group');
    
    if (parcelasGroup) {
        if (recurring) {
            parcelasGroup.style.display = 'none';
            document.getElementById('transaction-parcelas').value = '1';
        } else {
            parcelasGroup.style.display = 'block';
        }
    }
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
    
    const saldoAtualEl = document.getElementById('saldo-atual');
    const vendasMesEl = document.getElementById('vendas-mes');
    const clientesAtivosEl = document.getElementById('clientes-ativos');
    const produtosEstoqueEl = document.getElementById('produtos-estoque');
    
    if (saldoAtualEl) saldoAtualEl.textContent = formatCurrency(saldoAtual);
    if (vendasMesEl) vendasMesEl.textContent = formatCurrency(vendasDoMes);
    if (clientesAtivosEl) clientesAtivosEl.textContent = clientesAtivos;
    if (produtosEstoqueEl) produtosEstoqueEl.textContent = produtosEstoque;
    
    // Cores dos valores
    if (saldoAtualEl) {
        saldoAtualEl.className = saldoAtual >= 0 ? 'card-value receitas' : 'card-value despesas';
    }
}

function updateDashboardAlerts() {
    const alertsContainer = document.getElementById('dashboard-alerts');
    if (!alertsContainer) return;
    
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
    if (!container) return;
    
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

// SISTEMA FINANCEIRO
function renderTransactionsTable(tipo) {
    const container = document.getElementById(`${tipo === 'receita' ? 'receitas' : 'despesas'}-table`);
    if (!container) return;
    
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
                    <th>Fornecedor</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${filteredTransactions.map(t => {
                    const fornecedor = fornecedores.find(f => f.id === t.fornecedorId);
                    return `
                        <tr>
                            <td>${t.descricao}</td>
                            <td>${t.categoria}</td>
                            <td>${formatCurrency(t.valor)}</td>
                            <td>${formatDate(t.vencimento)}</td>
                            <td>${fornecedor ? fornecedor.nome : '-'}</td>
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
                    `;
                }).join('')}
            </tbody>
        </table>
    `;

    container.innerHTML = tableHTML;
}

function getFilteredTransactions(tipo) {
    const sectionName = tipo === 'receita' ? 'receitas' : 'despesas';
    const dataInicioInput = document.getElementById(`filter-data-inicio-${sectionName}`);
    const dataFimInput = document.getElementById(`filter-data-fim-${sectionName}`);
    const statusFilter = document.getElementById(`filter-status-${sectionName}`);
    const categoryFilter = document.getElementById(`filter-categoria-${sectionName}`);
    
    const dataInicioValue = dataInicioInput ? dataInicioInput.value : '';
    const dataFimValue = dataFimInput ? dataFimInput.value : '';
    const statusValue = statusFilter ? statusFilter.value : 'todos';
    const categoryValue = categoryFilter ? categoryFilter.value : 'todas';

    return transactions.filter(t => {
        const matchesTipo = t.tipo === tipo;
        const matchesStatus = statusValue === 'todos' || t.status === statusValue;
        const matchesCategory = categoryValue === 'todas' || t.categoria === categoryValue;
        
        let matchesDateRange = true;
        if (dataInicioValue || dataFimValue) {
            const transactionDate = new Date(t.vencimento);
            if (dataInicioValue) {
                matchesDateRange = matchesDateRange && transactionDate >= new Date(dataInicioValue);
            }
            if (dataFimValue) {
                matchesDateRange = matchesDateRange && transactionDate <= new Date(dataFimValue);
            }
        }
        
        return matchesTipo && matchesStatus && matchesCategory && matchesDateRange;
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

    const totalReceitasPagasEl = document.getElementById('total-receitas-pagas');
    const totalDespesasPagasEl = document.getElementById('total-despesas-pagas');
    const resultadoTotalEl = document.getElementById('resultado-total');
    
    if (totalReceitasPagasEl) totalReceitasPagasEl.textContent = formatCurrency(totalReceitasPagas);
    if (totalDespesasPagasEl) totalDespesasPagasEl.textContent = formatCurrency(totalDespesasPagas);
    if (resultadoTotalEl) resultadoTotalEl.textContent = formatCurrency(resultado);

    if (resultadoTotalEl) {
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

// TRANSAÇÕES
function openNewTransactionModal(tipoEspecifico = null) {
    currentEditingType = 'transaction';
    currentEditingId = null;
    
    const modalTitle = document.getElementById('transaction-modal-title');
    const transactionForm = document.getElementById('transaction-form');
    const transactionType = document.getElementById('transaction-type');
    const transactionDate = document.getElementById('transaction-date');
    
    if (modalTitle) {
        if (tipoEspecifico === 'receita') {
            modalTitle.textContent = 'Nova Conta a Receber';
        } else if (tipoEspecifico === 'despesa') {
            modalTitle.textContent = 'Nova Conta a Pagar';
        } else {
            modalTitle.textContent = 'Nova Transação';
        }
    }
    
    if (transactionForm) transactionForm.reset();
    
    if (tipoEspecifico && transactionType) {
        transactionType.value = tipoEspecifico;
    }
    
    if (transactionDate) {
        transactionDate.value = new Date().toISOString().split('T')[0];
    }
    
    updateCategoriesSelect();
    updateFornecedoresSelect();
    toggleParcelasGroup();
    
    document.getElementById('transaction-modal').classList.remove('hidden');
}

function editTransaction(id) {
    const transaction = transactions.find(t => t.id === id);
    if (!transaction) return;

    currentEditingType = 'transaction';
    currentEditingId = id;
    
    const modalTitle = document.getElementById('transaction-modal-title');
    if (modalTitle) modalTitle.textContent = 'Editar Transação';
    
    document.getElementById('transaction-type').value = transaction.tipo;
    document.getElementById('transaction-description').value = transaction.descricao;
    document.getElementById('transaction-value').value = transaction.valor;
    document.getElementById('transaction-date').value = transaction.vencimento;
    document.getElementById('transaction-recurring').checked = transaction.recorrente;
    document.getElementById('transaction-status').value = transaction.status;
    
    if (transaction.fornecedorId) {
        document.getElementById('transaction-fornecedor').value = transaction.fornecedorId;
    }
    
    if (transaction.parcelasRestantes) {
        document.getElementById('transaction-parcelas').value = transaction.parcelasRestantes;
    }
    
    updateCategoriesSelect();
    updateFornecedoresSelect();
    toggleParcelasGroup();
    
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
    const transactionType = document.getElementById('transaction-type');
    const categorySelect = document.getElementById('transaction-category');
    
    if (!transactionType || !categorySelect) return;
    
    const tipo = transactionType.value;
    
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
        status: document.getElementById('transaction-status').value,
        fornecedorId: document.getElementById('transaction-fornecedor').value ? parseInt(document.getElementById('transaction-fornecedor').value) : null,
        parcelasRestantes: !document.getElementById('transaction-recurring').checked && parseInt(document.getElementById('transaction-parcelas').value) > 1 ? parseInt(document.getElementById('transaction-parcelas').value) : null
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

// FORNECEDORES
function renderFornecedoresTable() {
    const container = document.getElementById('fornecedores-table');
    if (!container) return;
    
    const filteredFornecedores = getFilteredFornecedores();

    if (filteredFornecedores.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhum fornecedor encontrado</h3></div>';
        return;
    }

    const tableHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Documento</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${filteredFornecedores.map(fornecedor => `
                    <tr>
                        <td>${fornecedor.nome}</td>
                        <td>${fornecedor.email}</td>
                        <td>${fornecedor.telefone}</td>
                        <td>${fornecedor.documento}</td>
                        <td><span class="status-badge ${fornecedor.status}">${fornecedor.status}</span></td>
                        <td>
                            <div class="action-buttons">
                                <button class="action-btn edit" onclick="editFornecedor(${fornecedor.id})" title="Editar">✏️</button>
                                <button class="action-btn delete" onclick="deleteFornecedor(${fornecedor.id})" title="Excluir">🗑️</button>
                            </div>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    container.innerHTML = tableHTML;
}

function getFilteredFornecedores() {
    const searchTerm = document.getElementById('search-fornecedores')?.value.toLowerCase() || '';
    const statusFilter = document.getElementById('filter-status-fornecedores')?.value || 'todos';

    return fornecedores.filter(fornecedor => {
        const matchesSearch = fornecedor.nome.toLowerCase().includes(searchTerm) ||
                            fornecedor.email.toLowerCase().includes(searchTerm) ||
                            fornecedor.telefone.includes(searchTerm);
        const matchesStatus = statusFilter === 'todos' || fornecedor.status === statusFilter;
        
        return matchesSearch && matchesStatus;
    });
}

function filterFornecedores() {
    renderFornecedoresTable();
}

function openNewFornecedorModal() {
    currentEditingType = 'fornecedor';
    currentEditingId = null;
    document.getElementById('fornecedor-modal-title').textContent = 'Novo Fornecedor';
    document.getElementById('fornecedor-form').reset();
    document.getElementById('fornecedor-modal').classList.remove('hidden');
}

function editFornecedor(id) {
    const fornecedor = fornecedores.find(f => f.id === id);
    if (!fornecedor) return;

    currentEditingType = 'fornecedor';
    currentEditingId = id;
    document.getElementById('fornecedor-modal-title').textContent = 'Editar Fornecedor';
    
    document.getElementById('fornecedor-nome').value = fornecedor.nome;
    document.getElementById('fornecedor-email').value = fornecedor.email;
    document.getElementById('fornecedor-telefone').value = fornecedor.telefone;
    document.getElementById('fornecedor-endereco').value = fornecedor.endereco;
    document.getElementById('fornecedor-documento').value = fornecedor.documento;
    document.getElementById('fornecedor-status').value = fornecedor.status;
    
    document.getElementById('fornecedor-modal').classList.remove('hidden');
}

function deleteFornecedor(id) {
    if (confirm('Tem certeza que deseja excluir este fornecedor?')) {
        fornecedores = fornecedores.filter(f => f.id !== id);
        renderFornecedoresTable();
        updateFornecedoresSelect();
        showMessage('Fornecedor excluído com sucesso!', 'success');
    }
}

function handleFornecedorSubmit(e) {
    e.preventDefault();

    const formData = {
        nome: document.getElementById('fornecedor-nome').value,
        email: document.getElementById('fornecedor-email').value,
        telefone: document.getElementById('fornecedor-telefone').value,
        endereco: document.getElementById('fornecedor-endereco').value,
        documento: document.getElementById('fornecedor-documento').value,
        status: document.getElementById('fornecedor-status').value
    };

    if (currentEditingId) {
        const fornecedor = fornecedores.find(f => f.id === currentEditingId);
        Object.assign(fornecedor, formData);
        showMessage('Fornecedor atualizado com sucesso!', 'success');
    } else {
        const newFornecedor = {
            id: nextFornecedorId++,
            ...formData,
            cadastro: new Date().toISOString()
        };
        fornecedores.push(newFornecedor);
        showMessage('Fornecedor cadastrado com sucesso!', 'success');
    }

    closeModal('fornecedor');
    renderFornecedoresTable();
    updateFornecedoresSelect();
}

// CLIENTES (implementação básica)
function renderClientesTable() {
    const container = document.getElementById('clientes-table');
    if (!container) return;
    
    const filteredClientes = getFilteredClientes();

    if (filteredClientes.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhum cliente encontrado</h3><p>Comece cadastrando um novo cliente.</p></div>';
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
                        <td>${formatCurrency(cliente.totalGasto || 0)}</td>
                        <td><span class="status-badge ${cliente.status}">${cliente.status}</span></td>
                        <td>
                            <div class="action-buttons">
                                <button class="action-btn edit" onclick="editCliente(${cliente.id})" title="Editar">✏️</button>
                                <button class="action-btn delete" onclick="deleteCliente(${cliente.id})" title="Excluir">🗑️</button>
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
    const searchTerm = document.getElementById('search-clientes')?.value.toLowerCase() || '';
    const statusFilter = document.getElementById('filter-status-clientes')?.value || 'todos';

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

// PRODUTOS (implementação básica)
function renderProdutosTable() {
    const container = document.getElementById('produtos-table');
    if (!container) return;
    
    const filteredProdutos = getFilteredProdutos();

    if (filteredProdutos.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhum produto encontrado</h3><p>Comece cadastrando um novo produto.</p></div>';
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
    const searchTerm = document.getElementById('search-produtos')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('filter-categoria-produtos')?.value || 'todas';
    const statusFilter = document.getElementById('filter-status-produtos')?.value || 'todos';

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

// PDV (Implementação básica)
function searchProdutosPDV() {
    const searchTerm = document.getElementById('pdv-search-produto')?.value.toLowerCase() || '';
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
    const desconto = parseFloat(document.getElementById('pdv-desconto')?.value || 0) || 0;
    const total = subtotal - desconto;
    
    const subtotalEl = document.getElementById('pdv-subtotal');
    const totalEl = document.getElementById('pdv-total');
    
    if (subtotalEl) subtotalEl.textContent = formatCurrency(subtotal);
    if (totalEl) totalEl.textContent = formatCurrency(Math.max(0, total));
}

function toggleParcelas() {
    const pagamento = document.getElementById('pdv-pagamento')?.value;
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
    const clienteId = document.getElementById('pdv-cliente')?.value;
    
    if (!clienteId) {
        showMessage('Selecione um cliente!', 'error');
        return;
    }
    
    if (carrinho.length === 0) {
        showMessage('Adicione produtos ao carrinho!', 'error');
        return;
    }
    
    const subtotal = carrinho.reduce((sum, item) => sum + item.subtotal, 0);
    const desconto = parseFloat(document.getElementById('pdv-desconto')?.value || 0) || 0;
    const total = subtotal - desconto;
    const pagamento = document.getElementById('pdv-pagamento')?.value || 'dinheiro';
    const parcelas = document.getElementById('pdv-parcelas')?.value || '1';
    
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
        cliente.totalGasto = (cliente.totalGasto || 0) + total;
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
    const pdvCliente = document.getElementById('pdv-cliente');
    const pdvSearchProduto = document.getElementById('pdv-search-produto');
    const pdvDesconto = document.getElementById('pdv-desconto');
    const pdvPagamento = document.getElementById('pdv-pagamento');
    const pdvProdutosList = document.getElementById('pdv-produtos-list');
    
    if (pdvCliente) pdvCliente.value = '';
    if (pdvSearchProduto) pdvSearchProduto.value = '';
    if (pdvDesconto) pdvDesconto.value = '0';
    if (pdvPagamento) pdvPagamento.value = 'dinheiro';
    if (pdvProdutosList) {
        pdvProdutosList.innerHTML = '<div style="padding: 20px; text-align: center; color: #888;">Digite para buscar produtos...</div>';
    }
    toggleParcelas();
    
    showMessage(`Venda #${novaVenda.id.toString().padStart(3, '0')} finalizada com sucesso!`, 'success');
    
    updateAllData();
}

function openHistoricoVendas() {
    const container = document.getElementById('historico-vendas-content');
    if (!container) return;
    
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

// RELATÓRIOS DE VENDAS (implementação básica)
function updateRelatoriosVendas() {
    const dataInicio = new Date(document.getElementById('filtro-data-inicio')?.value || '2025-01-01');
    const dataFim = new Date(document.getElementById('filtro-data-fim')?.value || new Date().toISOString().split('T')[0]);
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
    
    const totalVendasPeriodoEl = document.getElementById('total-vendas-periodo');
    const numeroVendasPeriodoEl = document.getElementById('numero-vendas-periodo');
    const ticketMedioPeriodoEl = document.getElementById('ticket-medio-periodo');
    const melhorClientePeriodoEl = document.getElementById('melhor-cliente-periodo');
    
    if (totalVendasPeriodoEl) totalVendasPeriodoEl.textContent = formatCurrency(totalVendas);
    if (numeroVendasPeriodoEl) numeroVendasPeriodoEl.textContent = numeroVendas;
    if (ticketMedioPeriodoEl) ticketMedioPeriodoEl.textContent = formatCurrency(ticketMedio);
    if (melhorClientePeriodoEl) {
        melhorClientePeriodoEl.textContent = melhorCliente ? melhorCliente.nome : 'Nenhum';
    }
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

// MODAIS
function closeModal(type) {
    const modal = document.getElementById(`${type}-modal`);
    if (modal) {
        modal.classList.add('hidden');
    }
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
    if (mainContent) {
        mainContent.insertBefore(message, mainContent.firstChild);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
}