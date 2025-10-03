// Dados reais do sistema - todos os dados de teste foram removidos
let transactions = [
    {
        id: 1,
        tipo: "despesa",
        descricao: "Conta de luz",
        valor: 270.00,
        categoria: "Serviços Públicos",
        vencimento: "2025-10-03",
        recorrente: true,
        status: "pendente",
        fornecedorId: 1,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 2,
        tipo: "despesa",
        descricao: "Conta de Gás",
        valor: 24.00,
        categoria: "Serviços Públicos",
        vencimento: "2025-10-03",
        recorrente: true,
        status: "pendente",
        fornecedorId: 2,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 3,
        tipo: "despesa",
        descricao: "NET - Jose Carlos",
        valor: 100.00,
        categoria: "Serviços Públicos",
        vencimento: "2025-10-05",
        recorrente: true,
        status: "pendente",
        fornecedorId: 3,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 4,
        tipo: "despesa",
        descricao: "Condomínio IBVS",
        valor: 677.00,
        categoria: "Moradia",
        vencimento: "2025-10-10",
        recorrente: true,
        status: "pendente",
        fornecedorId: 4,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 5,
        tipo: "despesa",
        descricao: "Faculdade",
        valor: 478.00,
        categoria: "Educação",
        vencimento: "2025-10-10",
        recorrente: false,
        status: "pendente",
        fornecedorId: 5,
        parcelasRestantes: 2,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 6,
        tipo: "despesa",
        descricao: "Cartão ITAU 01",
        valor: 830.00,
        categoria: "Cartão de Crédito",
        vencimento: "2025-10-10",
        recorrente: true,
        status: "pendente",
        fornecedorId: 6,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 7,
        tipo: "despesa",
        descricao: "Mensalidades DigiSat",
        valor: 157.00,
        categoria: "Tecnologia",
        vencimento: "2025-10-14",
        recorrente: true,
        status: "pendente",
        fornecedorId: 7,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 8,
        tipo: "despesa",
        descricao: "Cartão Nubank Físico",
        valor: 200.00,
        categoria: "Cartão de Crédito",
        vencimento: "2025-10-16",
        recorrente: true,
        status: "pendente",
        fornecedorId: 8,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 9,
        tipo: "despesa",
        descricao: "Cartão Nubank PJ",
        valor: 100.00,
        categoria: "Cartão de Crédito",
        vencimento: "2025-10-16",
        recorrente: true,
        status: "pendente",
        fornecedorId: 8,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 10,
        tipo: "despesa",
        descricao: "Servidor Nuvens",
        valor: 400.00,
        categoria: "Tecnologia",
        vencimento: "2025-10-15",
        recorrente: true,
        status: "pendente",
        fornecedorId: 9,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 11,
        tipo: "despesa",
        descricao: "Conta de internet",
        valor: 70.00,
        categoria: "Serviços Públicos",
        vencimento: "2025-10-10",
        recorrente: true,
        status: "pendente",
        fornecedorId: 10,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 12,
        tipo: "despesa",
        descricao: "Impostos",
        valor: 82.00,
        categoria: "Tributos",
        vencimento: "2025-10-10",
        recorrente: true,
        status: "pendente",
        fornecedorId: 11,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 13,
        tipo: "despesa",
        descricao: "Conta de Celular",
        valor: 140.00,
        categoria: "Serviços Públicos",
        vencimento: "2025-10-17",
        recorrente: true,
        status: "pendente",
        fornecedorId: 12,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 14,
        tipo: "despesa",
        descricao: "Cartão Will",
        valor: 1000.00,
        categoria: "Cartão de Crédito",
        vencimento: "2025-10-10",
        recorrente: false,
        status: "pendente",
        fornecedorId: 13,
        parcelasRestantes: 5,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 15,
        tipo: "despesa",
        descricao: "Cartão PAN 01",
        valor: 250.00,
        categoria: "Cartão de Crédito",
        vencimento: "2025-10-17",
        recorrente: false,
        status: "pendente",
        fornecedorId: 14,
        parcelasRestantes: 4,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 16,
        tipo: "despesa",
        descricao: "Cartão PAN 02",
        valor: 600.00,
        categoria: "Cartão de Crédito",
        vencimento: "2025-10-17",
        recorrente: false,
        status: "pendente",
        fornecedorId: 14,
        parcelasRestantes: 2,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 17,
        tipo: "despesa",
        descricao: "Cartão PAN 03",
        valor: 935.00,
        categoria: "Cartão de Crédito",
        vencimento: "2025-10-17",
        recorrente: false,
        status: "pendente",
        fornecedorId: 14,
        parcelasRestantes: 2,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 18,
        tipo: "despesa",
        descricao: "Prestação apartamento",
        valor: 810.00,
        categoria: "Moradia",
        vencimento: "2025-10-20",
        recorrente: true,
        status: "pendente",
        fornecedorId: 15,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 19,
        tipo: "despesa",
        descricao: "Cartão ITAU 02",
        valor: 1000.00,
        categoria: "Cartão de Crédito",
        vencimento: "2025-10-21",
        recorrente: false,
        status: "pendente",
        fornecedorId: 6,
        parcelasRestantes: 5,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 20,
        tipo: "despesa",
        descricao: "Itau dia 21 - nova 3/10",
        valor: 800.00,
        categoria: "Cartão de Crédito",
        vencimento: "2025-10-21",
        recorrente: false,
        status: "pendente",
        fornecedorId: 6,
        parcelasRestantes: 8,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 21,
        tipo: "despesa",
        descricao: "Cartão mercado Pago",
        valor: 2200.00,
        categoria: "Cartão de Crédito",
        vencimento: "2025-10-23",
        recorrente: true,
        status: "pendente",
        fornecedorId: 16,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 22,
        tipo: "despesa",
        descricao: "Salário Henrique",
        valor: 500.00,
        categoria: "Folha de Pagamento",
        vencimento: "2025-10-30",
        recorrente: true,
        status: "pendente",
        fornecedorId: 17,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    },
    {
        id: 23,
        tipo: "despesa",
        descricao: "PIC ITAU",
        valor: 60.00,
        categoria: "Serviços Bancários",
        vencimento: "2025-10-26",
        recorrente: true,
        status: "pendente",
        fornecedorId: 6,
        parcelasRestantes: null,
        created: "2025-10-03T00:00:00.000Z"
    }
];

let fornecedores = [
    {
        id: 1,
        nome: "Companhia Elétrica",
        email: "atendimento@energia.com",
        telefone: "(11) 0800-123-4567",
        endereco: "Av. Energia, 123 - São Paulo/SP",
        documento: "12.345.678/0001-90",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 2,
        nome: "Companhia de Gás",
        email: "atendimento@gas.com",
        telefone: "(11) 0800-987-6543",
        endereco: "Rua do Gás, 456 - São Paulo/SP",
        documento: "98.765.432/0001-10",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 3,
        nome: "NET - Jose Carlos",
        email: "josecarlos@net.com",
        telefone: "(11) 99999-1111",
        endereco: "Av. Internet, 789 - São Paulo/SP",
        documento: "11.111.111/0001-11",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 4,
        nome: "Condomínio IBVS",
        email: "admin@condominioibvs.com",
        telefone: "(11) 3333-4444",
        endereco: "Rua do Condomínio, 100 - São Paulo/SP",
        documento: "22.222.222/0001-22",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 5,
        nome: "Faculdade",
        email: "financeiro@faculdade.edu",
        telefone: "(11) 5555-6666",
        endereco: "Av. Educação, 500 - São Paulo/SP",
        documento: "33.333.333/0001-33",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 6,
        nome: "Banco ITAU",
        email: "atendimento@itau.com.br",
        telefone: "(11) 4004-4828",
        endereco: "Av. Paulista, 1000 - São Paulo/SP",
        documento: "60.701.190/0001-04",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 7,
        nome: "DigiSat",
        email: "cobranca@digisat.com",
        telefone: "(11) 7777-8888",
        endereco: "Rua Tecnologia, 200 - São Paulo/SP",
        documento: "44.444.444/0001-44",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 8,
        nome: "Nubank",
        email: "atendimento@nubank.com.br",
        telefone: "(11) 0800-608-6068",
        endereco: "Rua Nubank, 300 - São Paulo/SP",
        documento: "18.236.120/0001-58",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 9,
        nome: "Servidor Nuvens",
        email: "suporte@servidornuvens.com",
        telefone: "(11) 9999-0000",
        endereco: "Av. Cloud, 400 - São Paulo/SP",
        documento: "55.555.555/0001-55",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 10,
        nome: "Operadora Internet",
        email: "suporte@internet.com",
        telefone: "(11) 1111-2222",
        endereco: "Rua Internet, 600 - São Paulo/SP",
        documento: "66.666.666/0001-66",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 11,
        nome: "Receita Federal",
        email: "atendimento@receita.fazenda.gov.br",
        telefone: "(11) 146",
        endereco: "Av. Tributos, 700 - Brasília/DF",
        documento: "00.000.000/0001-91",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 12,
        nome: "Operadora Celular",
        email: "atendimento@celular.com",
        telefone: "(11) 2222-3333",
        endereco: "Av. Celular, 800 - São Paulo/SP",
        documento: "77.777.777/0001-77",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 13,
        nome: "Cartão Will",
        email: "atendimento@will.com.br",
        telefone: "(11) 3333-4444",
        endereco: "Rua Will, 900 - São Paulo/SP",
        documento: "88.888.888/0001-88",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 14,
        nome: "Banco PAN",
        email: "atendimento@bancopan.com.br",
        telefone: "(11) 4444-5555",
        endereco: "Av. PAN, 1000 - São Paulo/SP",
        documento: "99.999.999/0001-99",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 15,
        nome: "Imobiliária",
        email: "vendas@imobiliaria.com",
        telefone: "(11) 5555-6666",
        endereco: "Rua Imóveis, 1100 - São Paulo/SP",
        documento: "10.101.010/0001-01",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 16,
        nome: "Mercado Pago",
        email: "atendimento@mercadopago.com.br",
        telefone: "(11) 6666-7777",
        endereco: "Av. Mercado, 1200 - São Paulo/SP",
        documento: "11.222.333/0001-44",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    },
    {
        id: 17,
        nome: "Henrique",
        email: "henrique@email.com",
        telefone: "(11) 88888-9999",
        endereco: "Rua do Funcionário, 1300 - São Paulo/SP",
        documento: "123.456.789-00",
        status: "ativo",
        cadastro: "2025-10-01T00:00:00.000Z"
    }
];

// Dados limpos - removendo todos dados de teste
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
let nextFornecedorId = 18;
let nextClienteId = 1;
let nextProdutoId = 1;
let nextVendaId = 1;
let currentEditingId = null;
let currentEditingType = null;
let carrinho = [];

// Charts
let despesasCategoriaChart = null;
let fornecedoresChart = null;
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
    
    // Modais - Fornecedor
    document.getElementById('novo-fornecedor-btn').addEventListener('click', openNewFornecedorModal);
    document.getElementById('close-fornecedor-modal').addEventListener('click', () => closeModal('fornecedor'));
    document.getElementById('cancel-fornecedor').addEventListener('click', () => closeModal('fornecedor'));
    
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
    document.getElementById('fornecedor-form').addEventListener('submit', handleFornecedorSubmit);
    document.getElementById('cliente-form').addEventListener('submit', handleClienteSubmit);
    document.getElementById('produto-form').addEventListener('submit', handleProdutoSubmit);
    
    // Filtros e busca
    document.getElementById('search-fornecedores').addEventListener('input', filterFornecedores);
    document.getElementById('filter-status-fornecedores').addEventListener('change', filterFornecedores);
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
    document.getElementById('filter-fornecedor-despesas').addEventListener('change', () => filterTransactions('despesa'));
    
    // Change handlers
    document.getElementById('transaction-type').addEventListener('change', updateCategoriesSelect);
    document.getElementById('transaction-recurring').addEventListener('change', toggleParcelasField);
    
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
    
    // Fornecedores
    updateFornecedoresSelects();
    updateClientesSelect();
}

function updateFornecedoresSelects() {
    // Filtro de fornecedores
    const fornecedorFilterSelect = document.getElementById('filter-fornecedor-despesas');
    if (fornecedorFilterSelect) {
        fornecedorFilterSelect.innerHTML = '<option value="todos">Todos os fornecedores</option>';
        fornecedores.filter(f => f.status === 'ativo').forEach(fornecedor => {
            fornecedorFilterSelect.innerHTML += `<option value="${fornecedor.id}">${fornecedor.nome}</option>`;
        });
    }
    
    // Select do modal de transação
    const transactionFornecedorSelect = document.getElementById('transaction-fornecedor');
    if (transactionFornecedorSelect) {
        transactionFornecedorSelect.innerHTML = '<option value="">Selecione um fornecedor...</option>';
        fornecedores.filter(f => f.status === 'ativo').forEach(fornecedor => {
            transactionFornecedorSelect.innerHTML += `<option value="${fornecedor.id}">${fornecedor.nome}</option>`;
        });
    }
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

    setTimeout(() => {
        switch(sectionName) {
            case 'dashboard':
                updateDashboard();
                renderDashboardCharts();
                renderProximosVencimentos();
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

// DASHBOARD
function updateDashboard() {
    updateDashboardCards();
    updateDashboardAlerts();
}

function updateDashboardCards() {
    // Despesas pendentes
    const despesasPendentes = transactions.filter(t => t.tipo === 'despesa' && t.status === 'pendente');
    const totalDespesasPendentes = despesasPendentes.reduce((sum, t) => sum + t.valor, 0);
    
    // Maior fornecedor
    const gastosPorFornecedor = {};
    transactions.filter(t => t.tipo === 'despesa' && t.fornecedorId).forEach(t => {
        gastosPorFornecedor[t.fornecedorId] = (gastosPorFornecedor[t.fornecedorId] || 0) + t.valor;
    });
    
    const maiorFornecedorId = Object.keys(gastosPorFornecedor).reduce((a, b) => 
        gastosPorFornecedor[a] > gastosPorFornecedor[b] ? a : b, 0
    );
    const maiorFornecedor = fornecedores.find(f => f.id == maiorFornecedorId);
    
    // Fornecedores ativos
    const fornecedoresAtivos = fornecedores.filter(f => f.status === 'ativo').length;
    
    // Contas vencendo nos próximos 7 dias
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const contasVencendo = despesasPendentes.filter(t => {
        const vencimento = new Date(t.vencimento);
        return vencimento <= nextWeek;
    }).length;
    
    document.getElementById('despesas-pendentes').textContent = formatCurrency(totalDespesasPendentes);
    document.getElementById('maior-fornecedor').textContent = maiorFornecedor ? maiorFornecedor.nome : 'Nenhum';
    document.getElementById('fornecedores-ativos').textContent = fornecedoresAtivos;
    document.getElementById('contas-vencendo').textContent = contasVencendo;
}

function updateDashboardAlerts() {
    const alertsContainer = document.getElementById('dashboard-alerts');
    const alerts = [];
    
    // Contas vencendo
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const contasVencendo = transactions.filter(t => {
        const vencimento = new Date(t.vencimento);
        return t.status === 'pendente' && t.tipo === 'despesa' && vencimento <= nextWeek;
    });
    
    if (contasVencendo.length > 0) {
        alerts.push({
            type: 'warning',
            message: `⚠️ ${contasVencendo.length} conta(s) vencendo nos próximos 7 dias`
        });
    }
    
    // Contas com parcelas finitas
    const contasParcelas = transactions.filter(t => t.parcelasRestantes && t.parcelasRestantes <= 3);
    if (contasParcelas.length > 0) {
        alerts.push({
            type: 'info',
            message: `📅 ${contasParcelas.length} conta(s) com poucas parcelas restantes`
        });
    }
    
    alertsContainer.innerHTML = alerts.map(alert => `
        <div class="alert ${alert.type}">
            ${alert.message}
        </div>
    `).join('');
}

function renderDashboardCharts() {
    renderDespesasCategoriaChart();
    renderFornecedoresChart();
}

function renderDespesasCategoriaChart() {
    const ctx = document.getElementById('despesas-categoria-chart');
    if (!ctx) return;

    if (despesasCategoriaChart) {
        despesasCategoriaChart.destroy();
    }

    const categoriaGastos = {};
    transactions.filter(t => t.tipo === 'despesa').forEach(t => {
        categoriaGastos[t.categoria] = (categoriaGastos[t.categoria] || 0) + t.valor;
    });

    const labels = Object.keys(categoriaGastos);
    const data = Object.values(categoriaGastos);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325'];

    if (labels.length === 0) {
        despesasCategoriaChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Nenhuma despesa registrada'],
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

    despesasCategoriaChart = new Chart(ctx, {
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

function renderFornecedoresChart() {
    const ctx = document.getElementById('fornecedores-chart');
    if (!ctx) return;

    if (fornecedoresChart) {
        fornecedoresChart.destroy();
    }

    const gastosPorFornecedor = {};
    transactions.filter(t => t.tipo === 'despesa' && t.fornecedorId).forEach(t => {
        const fornecedor = fornecedores.find(f => f.id === t.fornecedorId);
        if (fornecedor) {
            gastosPorFornecedor[fornecedor.nome] = (gastosPorFornecedor[fornecedor.nome] || 0) + t.valor;
        }
    });

    const sortedFornecedores = Object.entries(gastosPorFornecedor)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5);

    const labels = sortedFornecedores.map(([nome]) => nome);
    const data = sortedFornecedores.map(([, valor]) => valor);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F'];

    if (labels.length === 0) {
        fornecedoresChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Nenhum fornecedor'],
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

    fornecedoresChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Gastos',
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

function renderProximosVencimentos() {
    const container = document.getElementById('proximos-vencimentos');
    
    const today = new Date();
    const nextMonth = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
    
    const proximosVencimentos = transactions
        .filter(t => {
            const vencimento = new Date(t.vencimento);
            return t.status === 'pendente' && t.tipo === 'despesa' && vencimento <= nextMonth;
        })
        .sort((a, b) => new Date(a.vencimento) - new Date(b.vencimento))
        .slice(0, 10);
    
    if (proximosVencimentos.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhum vencimento próximo</h3></div>';
        return;
    }

    container.innerHTML = proximosVencimentos.map(vencimento => {
        const fornecedor = fornecedores.find(f => f.id === vencimento.fornecedorId);
        const diasRestantes = Math.ceil((new Date(vencimento.vencimento) - today) / (1000 * 60 * 60 * 24));
        
        return `
            <div class="vencimento-item">
                <div class="vencimento-info">
                    <h4>${vencimento.descricao}</h4>
                    <p>${fornecedor ? fornecedor.nome : 'Fornecedor'} • ${vencimento.categoria}</p>
                    ${vencimento.parcelasRestantes ? `<p class="parcelas-info">${vencimento.parcelasRestantes} parcelas restantes</p>` : ''}
                </div>
                <div>
                    <div class="vencimento-valor">${formatCurrency(vencimento.valor)}</div>
                    <div class="vencimento-data">${diasRestantes <= 0 ? 'Vencido' : `${diasRestantes} dias`}</div>
                </div>
            </div>
        `;
    }).join('');
}

// FORNECEDORES
function renderFornecedoresTable() {
    const container = document.getElementById('fornecedores-table');
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
    const searchTerm = document.getElementById('search-fornecedores').value.toLowerCase();
    const statusFilter = document.getElementById('filter-status-fornecedores').value;

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
    // Verificar se há transações vinculadas
    const transacoesVinculadas = transactions.filter(t => t.fornecedorId === id);
    if (transacoesVinculadas.length > 0) {
        showMessage('Não é possível excluir fornecedor com transações vinculadas!', 'error');
        return;
    }
    
    if (confirm('Tem certeza que deseja excluir este fornecedor?')) {
        fornecedores = fornecedores.filter(f => f.id !== id);
        renderFornecedoresTable();
        updateFornecedoresSelects();
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
    updateFornecedoresSelects();
}

// CLIENTES
function renderClientesTable() {
    const container = document.getElementById('clientes-table');
    const filteredClientes = getFilteredClientes();

    if (filteredClientes.length === 0) {
        container.innerHTML = '<div class="empty-state"><h3>Nenhum cliente encontrado</h3><p>Comece cadastrando seus primeiros clientes</p></div>';
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
        container.innerHTML = '<div class="empty-state"><h3>Nenhum produto encontrado</h3><p>Comece cadastrando seus primeiros produtos</p></div>';
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
                    <th>Status</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${filteredProdutos.map(produto => `
                    <tr>
                        <td>${produto.nome}</td>
                        <td>${produto.categoria}</td>
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

// PDV
function initializePDV() {
    updateClientesSelect();
    searchProdutosPDV();
    renderCarrinho();
    updateTotals();
    toggleParcelas();
    
    const searchInput = document.getElementById('pdv-search-produto');
    if (searchInput && searchInput.value === '') {
        document.getElementById('pdv-produtos-list').innerHTML = '<div style="padding: 20px; text-align: center; color: #888;">Digite para buscar produtos...</div>';
    }
}

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
    
    carrinho.forEach(item => {
        const produto = produtos.find(p => p.id === item.produtoId);
        if (produto) {
            produto.estoque -= item.quantidade;
        }
    });
    
    const cliente = clientes.find(c => c.id === parseInt(clienteId));
    if (cliente) {
        cliente.totalGasto = (cliente.totalGasto || 0) + total;
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

// SISTEMA FINANCEIRO
function renderTransactionsTable(tipo) {
    const container = document.getElementById(`${tipo === 'receita' ? 'receitas' : 'despesas'}-table`);
    const filteredTransactions = getFilteredTransactions(tipo);

    if (filteredTransactions.length === 0) {
        const emptyMessage = tipo === 'despesa' ? 
            '<div class="empty-state"><h3>Nenhuma conta a pagar encontrada</h3><p>As contas cadastradas aparecerão aqui</p></div>' :
            '<div class="empty-state"><h3>Nenhuma conta a receber encontrada</h3><p>Registre receitas para controlar melhor suas finanças</p></div>';
        container.innerHTML = emptyMessage;
        return;
    }

    const tableHTML = `
        <table class="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    ${tipo === 'despesa' ? '<th>Fornecedor</th>' : ''}
                    <th>Valor</th>
                    <th>Vencimento</th>
                    <th>Recorrência</th>
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
                            ${tipo === 'despesa' ? `<td>${fornecedor ? fornecedor.nome : '-'}</td>` : ''}
                            <td>${formatCurrency(t.valor)}</td>
                            <td>${formatDate(t.vencimento)}</td>
                            <td>
                                ${t.recorrente ? 
                                    '<span class="recorrente-indicator">♻️ Recorrente</span>' : 
                                    (t.parcelasRestantes ? `<span class="parcelas-info">${t.parcelasRestantes} parcelas</span>` : 'Única')
                                }
                            </td>
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
    const statusFilter = document.getElementById(`filter-status-${sectionName}`).value;
    const categoryFilter = document.getElementById(`filter-categoria-${sectionName}`).value;
    const fornecedorFilter = tipo === 'despesa' ? document.getElementById('filter-fornecedor-despesas').value : null;

    return transactions.filter(t => {
        const matchesTipo = t.tipo === tipo;
        const matchesStatus = statusFilter === 'todos' || t.status === statusFilter;
        const matchesCategory = categoryFilter === 'todas' || t.categoria === categoryFilter;
        const matchesFornecedor = !fornecedorFilter || fornecedorFilter === 'todos' || t.fornecedorId == fornecedorFilter;
        
        return matchesTipo && matchesStatus && matchesCategory && matchesFornecedor;
    });
}

function filterTransactions(tipo) {
    renderTransactionsTable(tipo);
}

function updateReports() {
    const despesasPagas = transactions.filter(t => t.tipo === 'despesa' && t.status === 'pago');
    const despesasPendentes = transactions.filter(t => t.tipo === 'despesa' && t.status === 'pendente');

    const totalDespesasPagas = despesasPagas.reduce((sum, t) => sum + t.valor, 0);
    const totalDespesasPendentes = despesasPendentes.reduce((sum, t) => sum + t.valor, 0);

    document.getElementById('total-despesas-pagas').textContent = formatCurrency(totalDespesasPagas);
    document.getElementById('total-despesas-pendentes').textContent = formatCurrency(totalDespesasPendentes);

    // Maior fornecedor do mês atual
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    
    const gastosMesAtual = {};
    transactions.filter(t => {
        const tDate = new Date(t.vencimento);
        return t.tipo === 'despesa' && 
               tDate.getMonth() === currentMonth && 
               tDate.getFullYear() === currentYear &&
               t.fornecedorId;
    }).forEach(t => {
        const fornecedor = fornecedores.find(f => f.id === t.fornecedorId);
        if (fornecedor) {
            gastosMesAtual[fornecedor.nome] = (gastosMesAtual[fornecedor.nome] || 0) + t.valor;
        }
    });
    
    const maiorFornecedorMes = Object.keys(gastosMesAtual).reduce((a, b) => 
        gastosMesAtual[a] > gastosMesAtual[b] ? a : b, ''
    );
    
    document.getElementById('maior-fornecedor-mes').textContent = maiorFornecedorMes || 'Nenhum';

    renderFornecedoresSummary();
}

function renderFornecedoresSummary() {
    const container = document.getElementById('resumo-fornecedores');
    const gastosPorFornecedor = {};

    transactions.filter(t => t.tipo === 'despesa' && t.fornecedorId).forEach(t => {
        const fornecedor = fornecedores.find(f => f.id === t.fornecedorId);
        if (fornecedor) {
            gastosPorFornecedor[fornecedor.nome] = (gastosPorFornecedor[fornecedor.nome] || 0) + t.valor;
        }
    });

    const sortedFornecedores = Object.entries(gastosPorFornecedor)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10);

    const summaryHTML = sortedFornecedores
        .map(([nome, valor]) => `
            <div class="fornecedor-item">
                <div class="fornecedor-info">
                    <h4>${nome}</h4>
                    <p>Total gasto</p>
                </div>
                <div class="fornecedor-valor">${formatCurrency(valor)}</div>
            </div>
        `)
        .join('');

    container.innerHTML = summaryHTML || '<div class="empty-state"><h3>Nenhum gasto registrado</h3></div>';
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
    
    if (transaction.fornecedorId) {
        document.getElementById('transaction-fornecedor').value = transaction.fornecedorId;
    }
    
    if (transaction.parcelasRestantes) {
        document.getElementById('transaction-parcelas').value = transaction.parcelasRestantes;
    }
    
    updateCategoriesSelect();
    document.getElementById('transaction-category').value = transaction.categoria;
    toggleFornecedorField();
    toggleParcelasField();
    
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
        
        // Se tem parcelas restantes, diminuir
        if (transaction.parcelasRestantes && transaction.parcelasRestantes > 1) {
            transaction.parcelasRestantes--;
            // Criar próxima parcela se necessário
            createNextParcel(transaction);
        }
        
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

function createNextParcel(originalTransaction) {
    if (!originalTransaction.parcelasRestantes || originalTransaction.parcelasRestantes <= 0) {
        return;
    }
    
    const nextMonth = new Date(originalTransaction.vencimento);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    
    const nextParcel = {
        id: nextTransactionId++,
        tipo: originalTransaction.tipo,
        descricao: originalTransaction.descricao,
        valor: originalTransaction.valor,
        categoria: originalTransaction.categoria,
        fornecedorId: originalTransaction.fornecedorId,
        vencimento: nextMonth.toISOString().split('T')[0],
        recorrente: false,
        status: 'pendente',
        parcelasRestantes: originalTransaction.parcelasRestantes,
        created: new Date().toISOString()
    };
    
    transactions.push(nextParcel);
}

function updateCategoriesSelect() {
    const tipo = document.getElementById('transaction-type').value;
    const categorySelect = document.getElementById('transaction-category');
    
    categorySelect.innerHTML = '';
    categories[tipo].forEach(cat => {
        categorySelect.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
    
    toggleFornecedorField();
}

function toggleFornecedorField() {
    const tipo = document.getElementById('transaction-type').value;
    const fornecedorGroup = document.getElementById('fornecedor-group');
    
    if (tipo === 'despesa') {
        fornecedorGroup.style.display = 'block';
    } else {
        fornecedorGroup.style.display = 'none';
    }
}

function toggleParcelasField() {
    const recorrente = document.getElementById('transaction-recurring').checked;
    const parcelasGroup = document.getElementById('parcelas-group');
    
    if (!recorrente) {
        parcelasGroup.style.display = 'block';
    } else {
        parcelasGroup.style.display = 'none';
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
        status: document.getElementById('transaction-status').value,
        fornecedorId: document.getElementById('transaction-fornecedor').value || null,
        parcelasRestantes: !formData.recorrente ? (parseInt(document.getElementById('transaction-parcelas').value) || null) : null
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