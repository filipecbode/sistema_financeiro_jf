// Credenciais de login
const LOGIN_CREDENTIALS = {
    usuario: "admin",
    senha: "123456"
};

// Dados iniciais do sistema - carregados dos dados fornecidos
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
let nextSupplierId = 18;
let nextClienteId = 1;
let nextProdutoId = 1;
let nextVendaId = 1;
let currentEditingId = null;
let currentEditingType = null;
let isLoggedIn = false;

// Charts
let financeiroChart = null;
let categoriasChart = null;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Carregado - Inicializando aplicação...');
    initializeApp();
    setupEventListeners();
});

function initializeApp() {
    console.log('Inicializando aplicação...');
    // Sistema sempre inicia na tela de login
    showLoginScreen();
    
    // Inicializar datas
    const today = new Date().toISOString().split('T')[0];
    const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];
    
    // Definir datas padrão nos filtros (quando sistema carregar)
    setTimeout(() => {
        const filtroDataDe = document.getElementById('filtro-data-de');
        const filtroDataAte = document.getElementById('filtro-data-ate');
        const relatorioDataInicio = document.getElementById('relatorio-data-inicio');
        const relatorioDataFim = document.getElementById('relatorio-data-fim');
        
        if (filtroDataDe) filtroDataDe.value = startOfMonth;
        if (filtroDataAte) filtroDataAte.value = today;
        if (relatorioDataInicio) relatorioDataInicio.value = startOfMonth;
        if (relatorioDataFim) relatorioDataFim.value = today;
    }, 500);
}

function setupEventListeners() {
    console.log('Configurando event listeners...');
    
    // Login
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        console.log('Event listener de login configurado');
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }

    // Navegação
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            if (!isLoggedIn) return;
            
            const section = this.dataset.section;
            showSection(section);
            updateActiveNav(this);
        });
    });

    // Botões principais (só funcionam após login)
    const addEventListenerIfExists = (id, callback) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', callback);
        }
    };

    addEventListenerIfExists('nova-conta-btn', openNewTransactionModal);
    addEventListenerIfExists('nova-receita-btn', () => openNewTransactionModal('receita'));
    addEventListenerIfExists('nova-despesa-btn', () => openNewTransactionModal('despesa'));
    addEventListenerIfExists('novo-fornecedor-btn', openNewFornecedorModal);
    addEventListenerIfExists('novo-cliente-btn', openNewClienteModal);
    addEventListenerIfExists('novo-produto-btn', openNewProdutoModal);

    // Filtros
    addEventListenerIfExists('aplicar-filtro-data', updateDashboard);
    addEventListenerIfExists('gerar-relatorio', updateReports);

    // Modais - fechar
    addEventListenerIfExists('close-transaction-modal', () => closeModal('transaction'));
    addEventListenerIfExists('close-fornecedor-modal', () => closeModal('fornecedor'));
    addEventListenerIfExists('close-cliente-modal', () => closeModal('cliente'));
    addEventListenerIfExists('close-produto-modal', () => closeModal('produto'));

    // Modais - cancelar
    addEventListenerIfExists('cancel-transaction', () => closeModal('transaction'));
    addEventListenerIfExists('cancel-fornecedor', () => closeModal('fornecedor'));
    addEventListenerIfExists('cancel-cliente', () => closeModal('cliente'));
    addEventListenerIfExists('cancel-produto', () => closeModal('produto'));

    // Formulários
    addEventListenerIfExists('transaction-form', (e) => {
        const form = document.getElementById('transaction-form');
        if (form) form.addEventListener('submit', handleTransactionSubmit);
    });
    addEventListenerIfExists('fornecedor-form', (e) => {
        const form = document.getElementById('fornecedor-form');
        if (form) form.addEventListener('submit', handleFornecedorSubmit);
    });
    addEventListenerIfExists('cliente-form', (e) => {
        const form = document.getElementById('cliente-form');
        if (form) form.addEventListener('submit', handleClienteSubmit);
    });
    addEventListenerIfExists('produto-form', (e) => {
        const form = document.getElementById('produto-form');
        if (form) form.addEventListener('submit', handleProdutoSubmit);
    });

    // Configurar event listeners de formulários
    setTimeout(() => {
        const transactionForm = document.getElementById('transaction-form');
        const fornecedorForm = document.getElementById('fornecedor-form');
        const clienteForm = document.getElementById('cliente-form');
        const produtoForm = document.getElementById('produto-form');

        if (transactionForm) transactionForm.addEventListener('submit', handleTransactionSubmit);
        if (fornecedorForm) fornecedorForm.addEventListener('submit', handleFornecedorSubmit);
        if (clienteForm) clienteForm.addEventListener('submit', handleClienteSubmit);
        if (produtoForm) produtoForm.addEventListener('submit', handleProdutoSubmit);

        // Filtros das tabelas
        const filterStatusReceitas = document.getElementById('filter-status-receitas');
        const filterCategoriaReceitas = document.getElementById('filter-categoria-receitas');
        const filterStatusDespesas = document.getElementById('filter-status-despesas');
        const filterCategoriaDespesas = document.getElementById('filter-categoria-despesas');

        if (filterStatusReceitas) filterStatusReceitas.addEventListener('change', () => filterTransactions('receita'));
        if (filterCategoriaReceitas) filterCategoriaReceitas.addEventListener('change', () => filterTransactions('receita'));
        if (filterStatusDespesas) filterStatusDespesas.addEventListener('change', () => filterTransactions('despesa'));
        if (filterCategoriaDespesas) filterCategoriaDespesas.addEventListener('change', () => filterTransactions('despesa'));

        // Busca fornecedores
        const searchFornecedores = document.getElementById('search-fornecedores');
        const filterStatusFornecedores = document.getElementById('filter-status-fornecedores');
        if (searchFornecedores) searchFornecedores.addEventListener('input', filterFornecedores);
        if (filterStatusFornecedores) filterStatusFornecedores.addEventListener('change', filterFornecedores);

        // Busca clientes
        const searchClientes = document.getElementById('search-clientes');
        const filterStatusClientes = document.getElementById('filter-status-clientes');
        if (searchClientes) searchClientes.addEventListener('input', filterClientes);
        if (filterStatusClientes) filterStatusClientes.addEventListener('change', filterClientes);

        // Busca produtos
        const searchProdutos = document.getElementById('search-produtos');
        const filterCategoriaProdutos = document.getElementById('filter-categoria-produtos');
        if (searchProdutos) searchProdutos.addEventListener('input', filterProdutos);
        if (filterCategoriaProdutos) filterCategoriaProdutos.addEventListener('change', filterProdutos);

        // Change handlers
        const transactionType = document.getElementById('transaction-type');
        const transactionRecurring = document.getElementById('transaction-recurring');
        if (transactionType) transactionType.addEventListener('change', updateCategoriesSelect);
        if (transactionRecurring) transactionRecurring.addEventListener('change', toggleParcelasField);
    }, 500);

    // Modal clicks para fechar
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                const modalId = this.id.replace('-modal', '');
                closeModal(modalId);
            }
        });
    });
}

// LOGIN SYSTEM
function showLoginScreen() {
    console.log('Mostrando tela de login...');
    const loginContainer = document.getElementById('login-container');
    const mainSystem = document.getElementById('main-system');
    
    if (loginContainer && mainSystem) {
        loginContainer.style.display = 'flex';
        mainSystem.style.display = 'none';
        isLoggedIn = false;
        
        // Focar no campo usuário
        setTimeout(() => {
            const usuarioField = document.getElementById('login-usuario');
            if (usuarioField) usuarioField.focus();
        }, 100);
        
        console.log('Tela de login exibida');
    } else {
        console.error('Elementos de login não encontrados');
    }
}

function showMainSystem() {
    console.log('Mostrando sistema principal...');
    const loginContainer = document.getElementById('login-container');
    const mainSystem = document.getElementById('main-system');
    
    if (loginContainer && mainSystem) {
        loginContainer.style.display = 'none';
        mainSystem.style.display = 'flex';
        isLoggedIn = true;
        
        console.log('Sistema principal exibido');
        
        // Inicializar sistema
        setTimeout(() => {
            showSection('dashboard');
            populateSelects();
            updateAllData();
        }, 100);
    } else {
        console.error('Elementos do sistema principal não encontrados');
    }
}

function handleLogin(e) {
    e.preventDefault();
    console.log('Tentativa de login...');
    
    const usuario = document.getElementById('login-usuario').value;
    const senha = document.getElementById('login-senha').value;
    const errorDiv = document.getElementById('login-error');
    
    console.log(`Usuário: ${usuario}, Senha: ${senha ? '[INFORMADA]' : '[VAZIA]'}`);
    
    if (usuario === LOGIN_CREDENTIALS.usuario && senha === LOGIN_CREDENTIALS.senha) {
        console.log('Credenciais válidas - realizando login...');
        if (errorDiv) errorDiv.classList.add('hidden');
        
        // Pequeno delay para dar feedback visual
        setTimeout(() => {
            showMainSystem();
            showMessage('Login realizado com sucesso!', 'success');
        }, 200);
    } else {
        console.log('Credenciais inválidas');
        if (errorDiv) {
            errorDiv.textContent = 'Usuário ou senha incorretos!';
            errorDiv.classList.remove('hidden');
        }
        
        const senhaField = document.getElementById('login-senha');
        if (senhaField) {
            senhaField.value = '';
            senhaField.focus();
        }
    }
}

function handleLogout() {
    if (confirm('Tem certeza que deseja sair do sistema?')) {
        console.log('Realizando logout...');
        document.getElementById('login-form').reset();
        const errorDiv = document.getElementById('login-error');
        if (errorDiv) errorDiv.classList.add('hidden');
        
        showLoginScreen();
        showMessage('Logout realizado com sucesso!', 'success');
    }
}

// NAVIGATION
function showSection(sectionName) {
    if (!isLoggedIn) {
        console.log('Usuário não logado - bloqueando navegação');
        return;
    }
    
    console.log(`Navegando para seção: ${sectionName}`);
    
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
                renderProximasContas();
                break;
            case 'receitas':
                renderTransactionsTable('receita');
                break;
            case 'despesas':
                renderTransactionsTable('despesa');
                break;
            case 'fornecedores':
                renderFornecedoresTable();
                break;
            case 'clientes':
                renderClientesTable();
                break;
            case 'produtos':
                renderProdutosTable();
                break;
            case 'vendas':
                renderVendasSection();
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

// DASHBOARD
function updateDashboard() {
    updateDashboardCards();
    updateDashboardAlerts();
}

function updateDashboardCards() {
    // Saldo atual baseado em receitas e despesas pagas
    const receitasPagas = transactions.filter(t => t.tipo === 'receita' && t.status === 'pago');
    const despesasPagas = transactions.filter(t => t.tipo === 'despesa' && t.status === 'pago');
    const totalReceitas = receitasPagas.reduce((sum, t) => sum + t.valor, 0);
    const totalDespesas = despesasPagas.reduce((sum, t) => sum + t.valor, 0);
    const saldoAtual = totalReceitas - totalDespesas;

    // Contas a pagar (pendentes)
    const contasPagar = transactions
        .filter(t => t.tipo === 'despesa' && t.status === 'pendente')
        .reduce((sum, t) => sum + t.valor, 0);

    // Contas a receber (pendentes)
    const contasReceber = transactions
        .filter(t => t.tipo === 'receita' && t.status === 'pendente')
        .reduce((sum, t) => sum + t.valor, 0);

    // Fornecedores ativos
    const fornecedoresAtivos = suppliers.filter(s => s.status === 'ativo').length;

    const saldoEl = document.getElementById('saldo-atual');
    const contasPagarEl = document.getElementById('contas-pagar');
    const contasReceberEl = document.getElementById('contas-receber');
    const fornecedoresEl = document.getElementById('fornecedores-ativos');

    if (saldoEl) saldoEl.textContent = formatCurrency(saldoAtual);
    if (contasPagarEl) contasPagarEl.textContent = formatCurrency(contasPagar);
    if (contasReceberEl) contasReceberEl.textContent = formatCurrency(contasReceber);
    if (fornecedoresEl) fornecedoresEl.textContent = fornecedoresAtivos;

    // Aplicar cores aos valores
    if (saldoEl) {
        saldoEl.className = saldoAtual >= 0 ? 'card-value receitas' : 'card-value despesas';
    }
}

function updateDashboardAlerts() {
    const alertsContainer = document.getElementById('dashboard-alerts');
    if (!alertsContainer) return;
    
    const alerts = [];

    // Contas vencendo nos próximos 7 dias
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const contasVencendo = transactions.filter(t => {
        const vencimento = new Date(t.vencimento);
        return t.status === 'pendente' && vencimento <= nextWeek && vencimento >= today;
    });

    if (contasVencendo.length > 0) {
        alerts.push({
            type: 'warning',
            message: `⚠️ ${contasVencendo.length} conta(s) vencendo nos próximos 7 dias`
        });
    }

    // Contas vencidas
    const contasVencidas = transactions.filter(t => {
        const vencimento = new Date(t.vencimento);
        return t.status === 'pendente' && vencimento < today;
    });

    if (contasVencidas.length > 0) {
        alerts.push({
            type: 'error',
            message: `🚨 ${contasVencidas.length} conta(s) vencida(s)`
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
    renderCategoriasChart();
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

function renderCategoriasChart() {
    const ctx = document.getElementById('categorias-chart');
    if (!ctx) return;

    if (categoriasChart) {
        categoriasChart.destroy();
    }

    // Agrupar despesas por categoria
    const categoriasDespesas = {};
    transactions
        .filter(t => t.tipo === 'despesa' && t.status === 'pendente')
        .forEach(t => {
            categoriasDespesas[t.categoria] = (categoriasDespesas[t.categoria] || 0) + t.valor;
        });

    const labels = Object.keys(categoriasDespesas);
    const data = Object.values(categoriasDespesas);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

    if (labels.length === 0) {
        categoriasDespesas['Nenhuma despesa'] = 1;
        labels.push('Nenhuma despesa');
        data.push(1);
    }

    categoriasChart = new Chart(ctx, {
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

function renderProximasContas() {
    const container = document.getElementById('proximas-contas');
    if (!container) return;
    
    // Próximas 5 contas a vencer
    const today = new Date();
    const proximasContas = transactions
        .filter(t => t.status === 'pendente')
        .sort((a, b) => new Date(a.vencimento) - new Date(b.vencimento))
        .slice(0, 5);

    if (proximasContas.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhuma conta pendente</h3></div>';
        return;
    }

    container.innerHTML = proximasContas.map(conta => {
        const vencimento = new Date(conta.vencimento);
        const isVencida = vencimento < today;
        const fornecedor = suppliers.find(s => s.id === conta.fornecedorId);
        
        return `
            <div class="conta-item">
                <div class="conta-info">
                    <h4>${conta.descricao}</h4>
                    <p>${fornecedor ? fornecedor.nome : 'Sem fornecedor'} • ${conta.categoria}</p>
                </div>
                <div>
                    <div class="conta-valor ${conta.tipo}">${formatCurrency(conta.valor)}</div>
                    <div class="conta-vencimento ${isVencida ? 'conta-vencida' : ''}">
                        ${formatDate(conta.vencimento)}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// TRANSAÇÕES
function populateSelects() {
    // Categorias de receitas
    const receitasSelect = document.getElementById('filter-categoria-receitas');
    if (receitasSelect) {
        receitasSelect.innerHTML = '<option value="todas">Todas as categorias</option>';
        categories.receita.forEach(cat => {
            receitasSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }

    // Categorias de despesas
    const despesasSelect = document.getElementById('filter-categoria-despesas');
    if (despesasSelect) {
        despesasSelect.innerHTML = '<option value="todas">Todas as categorias</option>';
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
}

function updateFornecedoresSelect() {
    const fornecedoresSelect = document.getElementById('transaction-fornecedor');
    if (fornecedoresSelect) {
        fornecedoresSelect.innerHTML = '<option value="">Selecione um fornecedor...</option>';
        suppliers.filter(s => s.status === 'ativo').forEach(supplier => {
            fornecedoresSelect.innerHTML += `<option value="${supplier.id}">${supplier.nome}</option>`;
        });
    }
}

function openNewTransactionModal(tipo = null) {
    if (!isLoggedIn) return;
    
    currentEditingType = 'transaction';
    currentEditingId = null;
    document.getElementById('transaction-modal-title').textContent = 'Nova Transação';
    document.getElementById('transaction-form').reset();
    
    if (tipo) {
        document.getElementById('transaction-type').value = tipo;
    }
    
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('transaction-date').value = today;
    
    updateCategoriesSelect();
    toggleParcelasField();
    document.getElementById('transaction-modal').classList.remove('hidden');
}

function editTransaction(id) {
    if (!isLoggedIn) return;
    
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
    document.getElementById('transaction-fornecedor').value = transaction.fornecedorId || '';
    document.getElementById('transaction-parcelas').value = transaction.parcelasRestantes || '';
    
    updateCategoriesSelect();
    document.getElementById('transaction-category').value = transaction.categoria;
    toggleParcelasField();
    
    document.getElementById('transaction-modal').classList.remove('hidden');
}

function deleteTransaction(id) {
    if (!isLoggedIn) return;
    
    if (confirm('Tem certeza que deseja excluir esta transação?')) {
        transactions = transactions.filter(t => t.id !== id);
        updateAllData();
        showMessage('Transação excluída com sucesso!', 'success');
    }
}

function markAsPaid(id) {
    if (!isLoggedIn) return;
    
    const transaction = transactions.find(t => t.id === id);
    if (transaction) {
        transaction.status = 'pago';
        updateAllData();
        showMessage('Transação marcada como paga!', 'success');
    }
}

function markAsPending(id) {
    if (!isLoggedIn) return;
    
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

function toggleParcelasField() {
    const isRecurrent = document.getElementById('transaction-recurring').checked;
    const parcelasGroup = document.getElementById('parcelas-group');
    
    if (isRecurrent) {
        parcelasGroup.style.display = 'none';
    } else {
        parcelasGroup.style.display = 'block';
    }
}

function handleTransactionSubmit(e) {
    e.preventDefault();
    if (!isLoggedIn) return;

    const formData = {
        tipo: document.getElementById('transaction-type').value,
        descricao: document.getElementById('transaction-description').value,
        valor: parseFloat(document.getElementById('transaction-value').value),
        categoria: document.getElementById('transaction-category').value,
        vencimento: document.getElementById('transaction-date').value,
        recorrente: document.getElementById('transaction-recurring').checked,
        status: document.getElementById('transaction-status').value,
        fornecedorId: parseInt(document.getElementById('transaction-fornecedor').value) || null,
        parcelasRestantes: formData.recorrente ? null : (parseInt(document.getElementById('transaction-parcelas').value) || null)
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
                    <th>Fornecedor</th>
                    <th>Categoria</th>
                    <th>Valor</th>
                    <th>Vencimento</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${filteredTransactions.map(t => {
                    const fornecedor = suppliers.find(s => s.id === t.fornecedorId);
                    return `
                        <tr>
                            <td>${t.descricao}</td>
                            <td>${fornecedor ? fornecedor.nome : '-'}</td>
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
                    `;
                }).join('')}
            </tbody>
        </table>
    `;

    container.innerHTML = tableHTML;
}

function getFilteredTransactions(tipo) {
    const sectionName = tipo === 'receita' ? 'receitas' : 'despesas';
    const statusFilter = document.getElementById(`filter-status-${sectionName}`);
    const categoryFilter = document.getElementById(`filter-categoria-${sectionName}`);

    const statusValue = statusFilter ? statusFilter.value : 'todos';
    const categoryValue = categoryFilter ? categoryFilter.value : 'todas';

    return transactions.filter(t => {
        const matchesTipo = t.tipo === tipo;
        const matchesStatus = statusValue === 'todos' || t.status === statusValue;
        const matchesCategory = categoryValue === 'todas' || t.categoria === categoryValue;
        
        return matchesTipo && matchesStatus && matchesCategory;
    });
}

function filterTransactions(tipo) {
    renderTransactionsTable(tipo);
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
    const searchField = document.getElementById('search-fornecedores');
    const statusField = document.getElementById('filter-status-fornecedores');
    
    const searchTerm = searchField ? searchField.value.toLowerCase() : '';
    const statusFilter = statusField ? statusField.value : 'todos';

    return suppliers.filter(fornecedor => {
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
    if (!isLoggedIn) return;
    
    currentEditingType = 'fornecedor';
    currentEditingId = null;
    document.getElementById('fornecedor-modal-title').textContent = 'Novo Fornecedor';
    document.getElementById('fornecedor-form').reset();
    document.getElementById('fornecedor-modal').classList.remove('hidden');
}

function editFornecedor(id) {
    if (!isLoggedIn) return;
    
    const fornecedor = suppliers.find(s => s.id === id);
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
    if (!isLoggedIn) return;
    
    if (confirm('Tem certeza que deseja excluir este fornecedor?')) {
        suppliers = suppliers.filter(s => s.id !== id);
        renderFornecedoresTable();
        updateFornecedoresSelect();
        showMessage('Fornecedor excluído com sucesso!', 'success');
    }
}

function handleFornecedorSubmit(e) {
    e.preventDefault();
    if (!isLoggedIn) return;

    const formData = {
        nome: document.getElementById('fornecedor-nome').value,
        email: document.getElementById('fornecedor-email').value,
        telefone: document.getElementById('fornecedor-telefone').value,
        endereco: document.getElementById('fornecedor-endereco').value,
        documento: document.getElementById('fornecedor-documento').value,
        status: document.getElementById('fornecedor-status').value
    };

    if (currentEditingId) {
        const fornecedor = suppliers.find(s => s.id === currentEditingId);
        Object.assign(fornecedor, formData);
        showMessage('Fornecedor atualizado com sucesso!', 'success');
    } else {
        const newFornecedor = {
            id: nextSupplierId++,
            ...formData,
            cadastro: new Date().toISOString()
        };
        suppliers.push(newFornecedor);
        showMessage('Fornecedor cadastrado com sucesso!', 'success');
    }

    closeModal('fornecedor');
    renderFornecedoresTable();
    updateFornecedoresSelect();
}

// CLIENTES
function renderClientesTable() {
    const container = document.getElementById('clientes-table');
    if (!container) return;
    
    const filteredClientes = getFilteredClientes();

    if (filteredClientes.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhum cliente encontrado</h3><p>Cadastre o primeiro cliente para começar.</p></div>';
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
                ${filteredClientes.map(cliente => `
                    <tr>
                        <td>${cliente.nome}</td>
                        <td>${cliente.email}</td>
                        <td>${cliente.telefone}</td>
                        <td>${cliente.documento}</td>
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
    const searchField = document.getElementById('search-clientes');
    const statusField = document.getElementById('filter-status-clientes');
    
    const searchTerm = searchField ? searchField.value.toLowerCase() : '';
    const statusFilter = statusField ? statusField.value : 'todos';

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
    if (!isLoggedIn) return;
    
    currentEditingType = 'cliente';
    currentEditingId = null;
    document.getElementById('cliente-modal-title').textContent = 'Novo Cliente';
    document.getElementById('cliente-form').reset();
    document.getElementById('cliente-modal').classList.remove('hidden');
}

function editCliente(id) {
    if (!isLoggedIn) return;
    
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
    if (!isLoggedIn) return;
    
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
        clientes = clientes.filter(c => c.id !== id);
        renderClientesTable();
        showMessage('Cliente excluído com sucesso!', 'success');
    }
}

function handleClienteSubmit(e) {
    e.preventDefault();
    if (!isLoggedIn) return;

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
            cadastro: new Date().toISOString()
        };
        clientes.push(newCliente);
        showMessage('Cliente cadastrado com sucesso!', 'success');
    }

    closeModal('cliente');
    renderClientesTable();
}

// PRODUTOS
function renderProdutosTable() {
    const container = document.getElementById('produtos-table');
    if (!container) return;
    
    const filteredProdutos = getFilteredProdutos();

    if (filteredProdutos.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhum produto encontrado</h3><p>Cadastre o primeiro produto para começar.</p></div>';
        return;
    }

    const tableHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço Custo</th>
                    <th>Preço Venda</th>
                    <th>Estoque</th>
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${filteredProdutos.map(produto => `
                    <tr>
                        <td>${produto.nome}</td>
                        <td>${produto.categoria}</td>
                        <td>${formatCurrency(produto.precoCusto)}</td>
                        <td>${formatCurrency(produto.precoVenda)}</td>
                        <td>${produto.estoque}</td>
                        <td><span class="status-badge ${produto.status}">${produto.status}</span></td>
                        <td>
                            <div class="action-buttons">
                                <button class="action-btn edit" onclick="editProduto(${produto.id})" title="Editar">✏️</button>
                                <button class="action-btn delete" onclick="deleteProduto(${produto.id})" title="Excluir">🗑️</button>
                            </div>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    container.innerHTML = tableHTML;
}

function getFilteredProdutos() {
    const searchField = document.getElementById('search-produtos');
    const categoryField = document.getElementById('filter-categoria-produtos');
    
    const searchTerm = searchField ? searchField.value.toLowerCase() : '';
    const categoryFilter = categoryField ? categoryField.value : 'todas';

    return produtos.filter(produto => {
        const matchesSearch = produto.nome.toLowerCase().includes(searchTerm);
        const matchesCategory = categoryFilter === 'todas' || produto.categoria === categoryFilter;
        
        return matchesSearch && matchesCategory;
    });
}

function filterProdutos() {
    renderProdutosTable();
}

function openNewProdutoModal() {
    if (!isLoggedIn) return;
    
    currentEditingType = 'produto';
    currentEditingId = null;
    document.getElementById('produto-modal-title').textContent = 'Novo Produto';
    document.getElementById('produto-form').reset();
    document.getElementById('produto-modal').classList.remove('hidden');
}

function editProduto(id) {
    if (!isLoggedIn) return;
    
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
    if (!isLoggedIn) return;
    
    if (confirm('Tem certeza que deseja excluir este produto?')) {
        produtos = produtos.filter(p => p.id !== id);
        renderProdutosTable();
        showMessage('Produto excluído com sucesso!', 'success');
    }
}

function handleProdutoSubmit(e) {
    e.preventDefault();
    if (!isLoggedIn) return;

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

// VENDAS
function renderVendasSection() {
    const container = document.getElementById('vendas-content');
    if (!container) return;
    
    if (vendas.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>Sistema de Vendas</h3>
                <p>Nenhuma venda registrada ainda.</p>
                <p>Use os botões no cabeçalho para gerenciar vendas.</p>
            </div>
        `;
    } else {
        container.innerHTML = `
            <h4>Vendas Recentes</h4>
            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${vendas.slice(-10).reverse().map(venda => `
                            <tr>
                                <td>#${venda.id.toString().padStart(3, '0')}</td>
                                <td>${formatDateTime(venda.data)}</td>
                                <td>${formatCurrency(venda.total)}</td>
                                <td><span class="status-badge ${venda.status}">${venda.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
}

// RELATÓRIOS
function updateReports() {
    const dataInicioEl = document.getElementById('relatorio-data-inicio');
    const dataFimEl = document.getElementById('relatorio-data-fim');
    
    if (!dataInicioEl || !dataFimEl) return;
    
    const dataInicio = new Date(dataInicioEl.value);
    const dataFim = new Date(dataFimEl.value);
    dataFim.setHours(23, 59, 59, 999);

    const transacoesPeriodo = transactions.filter(t => {
        const dataTransacao = new Date(t.vencimento);
        return dataTransacao >= dataInicio && dataTransacao <= dataFim && t.status === 'pago';
    });

    const totalReceitas = transacoesPeriodo
        .filter(t => t.tipo === 'receita')
        .reduce((sum, t) => sum + t.valor, 0);

    const totalDespesas = transacoesPeriodo
        .filter(t => t.tipo === 'despesa')
        .reduce((sum, t) => sum + t.valor, 0);

    const resultadoLiquido = totalReceitas - totalDespesas;

    const totalReceitasEl = document.getElementById('total-receitas');
    const totalDespesasEl = document.getElementById('total-despesas');
    const resultadoLiquidoEl = document.getElementById('resultado-liquido');

    if (totalReceitasEl) totalReceitasEl.textContent = formatCurrency(totalReceitas);
    if (totalDespesasEl) totalDespesasEl.textContent = formatCurrency(totalDespesas);
    if (resultadoLiquidoEl) {
        resultadoLiquidoEl.textContent = formatCurrency(resultadoLiquido);
        resultadoLiquidoEl.className = resultadoLiquido >= 0 ? 'card-value receitas' : 'card-value despesas';
    }

    renderCategorySummary(transacoesPeriodo);
}

function renderCategorySummary(transacoes) {
    const container = document.getElementById('resumo-categorias');
    if (!container) return;
    
    const categoryTotals = {};

    transacoes.forEach(t => {
        const key = `${t.categoria}-${t.tipo}`;
        categoryTotals[key] = (categoryTotals[key] || 0) + t.valor;
    });

    const summaryHTML = Object.entries(categoryTotals)
        .sort(([,a], [,b]) => b - a)
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

// MODAIS
function closeModal(type) {
    const modal = document.getElementById(`${type}-modal`);
    if (modal) modal.classList.add('hidden');
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
    console.log(`Mensagem: ${text} (${type})`);
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}