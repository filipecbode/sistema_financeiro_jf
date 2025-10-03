// Dados iniciais do sistema carregados do JSON fornecido
const loginCredentials = {
    usuario: "admin",
    senha: "123456"
};

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
let nextFornecedorId = 18;
let nextClienteId = 1;
let nextProdutoId = 1;
let nextVendaId = 1;
let currentEditingId = null;
let currentEditingType = null;
let carrinho = [];
let isLoggedIn = false;

// Charts
let financeiroChart = null;
let vencimentosChart = null;
let vendasMesChart = null;
let topProdutosChart = null;

// LOGIN FUNCTIONS - Simplificadas e mais robustas
function handleLogin(e) {
    e.preventDefault();
    console.log('Processando login...');
    
    const usuario = document.getElementById('login-usuario').value;
    const senha = document.getElementById('login-senha').value;
    
    console.log('Credenciais:', { usuario, senha });
    
    if (usuario === loginCredentials.usuario && senha === loginCredentials.senha) {
        console.log('Login bem-sucedido!');
        isLoggedIn = true;
        showMainApp();
        showMessage('Login realizado com sucesso!', 'success');
    } else {
        console.log('Credenciais incorretas');
        showMessage('Usuário ou senha incorretos!', 'error');
    }
}

function handleLogout() {
    console.log('Fazendo logout...');
    isLoggedIn = false;
    showLoginScreen();
    document.getElementById('login-form').reset();
    showMessage('Logout realizado com sucesso!', 'success');
}

function showLoginScreen() {
    console.log('Mostrando tela de login');
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('main-app').classList.add('hidden');
}

function showMainApp() {
    console.log('Mostrando aplicação principal');
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    populateSelects();
    showSection('dashboard');
    updateAllData();
}

// Inicialização simplificada
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, iniciando aplicação...');
    
    // Configurar login imediatamente
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        console.log('Configurando login form...');
        loginForm.addEventListener('submit', handleLogin);
    }
    
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Inicializar outros event listeners
    setupEventListeners();
    
    // Verificar se está logado
    if (!isLoggedIn) {
        showLoginScreen();
    } else {
        showMainApp();
    }
});

function setupEventListeners() {
    console.log('Configurando event listeners...');
    
    // Navegação
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            showSection(section);
            updateActiveNav(this);
        });
    });

    // Botões de ação específicos para cada seção
    const novaContaReceberBtn = document.getElementById('nova-conta-receber-btn');
    const novaContaPagarBtn = document.getElementById('nova-conta-pagar-btn');
    
    if (novaContaReceberBtn) {
        novaContaReceberBtn.addEventListener('click', () => openNewTransactionModal('receita'));
    }
    if (novaContaPagarBtn) {
        novaContaPagarBtn.addEventListener('click', () => openNewTransactionModal('despesa'));
    }
    
    // Event listeners para filtros de data
    const filterDataInicioReceitas = document.getElementById('filter-data-inicio-receitas');
    const filterDataFimReceitas = document.getElementById('filter-data-fim-receitas');
    const filterDataInicioDespesas = document.getElementById('filter-data-inicio-despesas');
    const filterDataFimDespesas = document.getElementById('filter-data-fim-despesas');
    
    if (filterDataInicioReceitas) filterDataInicioReceitas.addEventListener('change', () => renderTransactions('receita'));
    if (filterDataFimReceitas) filterDataFimReceitas.addEventListener('change', () => renderTransactions('receita'));
    if (filterDataInicioDespesas) filterDataInicioDespesas.addEventListener('change', () => renderTransactions('despesa'));
    if (filterDataFimDespesas) filterDataFimDespesas.addEventListener('change', () => renderTransactions('despesa'));
    
    // Outros filtros financeiros
    const filterStatusReceitas = document.getElementById('filter-status-receitas');
    const filterCategoriaReceitas = document.getElementById('filter-categoria-receitas');
    const filterStatusDespesas = document.getElementById('filter-status-despesas');
    const filterCategoriaDespesas = document.getElementById('filter-categoria-despesas');
    
    if (filterStatusReceitas) filterStatusReceitas.addEventListener('change', () => renderTransactions('receita'));
    if (filterCategoriaReceitas) filterCategoriaReceitas.addEventListener('change', () => renderTransactions('receita'));
    if (filterStatusDespesas) filterStatusDespesas.addEventListener('change', () => renderTransactions('despesa'));
    if (filterCategoriaDespesas) filterCategoriaDespesas.addEventListener('change', () => renderTransactions('despesa'));
    
    console.log('Event listeners configurados com sucesso');
}

// Função para limpar filtros
function clearFilters(tipo) {
    const statusElement = document.getElementById(`filter-status-${tipo}`);
    const categoriaElement = document.getElementById(`filter-categoria-${tipo}`);
    const dataInicioElement = document.getElementById(`filter-data-inicio-${tipo}`);
    const dataFimElement = document.getElementById(`filter-data-fim-${tipo}`);
    
    if (statusElement) statusElement.value = 'todos';
    if (categoriaElement) categoriaElement.value = 'todas';
    if (dataInicioElement) dataInicioElement.value = '';
    if (dataFimElement) dataFimElement.value = '';
    
    renderTransactions(tipo === 'receitas' ? 'receita' : 'despesa');
}

function populateSelects() {
    // Categorias financeiras
    const receitasSelect = document.getElementById('filter-categoria-receitas');
    if (receitasSelect) {
        receitasSelect.innerHTML = '<option value="todas">Todas as categorias</option>';
        categories.receita.forEach(cat => {
            receitasSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }

    const despesasSelect = document.getElementById('filter-categoria-despesas');
    if (despesasSelect) {
        despesasSelect.innerHTML = '<option value="todas">Todas as categorias</option>';
        categories.despesa.forEach(cat => {
            despesasSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
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
    
    const fornecedoresAtivos = fornecedores.filter(f => f.status === 'ativo');
    
    fornecedoresAtivos.forEach(fornecedor => {
        fornecedorSelect.innerHTML += `<option value="${fornecedor.id}">${fornecedor.nome}</option>`;
    });
}

function updateClientesSelect() {
    const clientesSelect = document.getElementById('pdv-cliente');
    if (!clientesSelect) return;
    
    clientesSelect.innerHTML = '<option value="">Selecione um cliente...</option>';
    
    const clientesAtivos = clientes.filter(c => c.status === 'ativo');
    
    if (clientesAtivos.length === 0) {
        clientesSelect.innerHTML += '<option value="" disabled>Nenhum cliente ativo encontrado</option>';
        return;
    }
    
    clientesAtivos.forEach(cliente => {
        clientesSelect.innerHTML += `<option value="${cliente.id}">${cliente.nome}</option>`;
    });
}

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
                renderContasVencendo();
                break;
            case 'fornecedores':
                renderFornecedoresTable();
                break;
            case 'receitas':
                renderTransactions('receita');
                break;
            case 'despesas':
                renderTransactions('despesa');
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
    // Saldo financeiro
    const receitasPagas = transactions.filter(t => t.tipo === 'receita' && t.status === 'pago');
    const despesasPagas = transactions.filter(t => t.tipo === 'despesa' && t.status === 'pago');
    const totalReceitas = receitasPagas.reduce((sum, t) => sum + t.valor, 0);
    const totalDespesas = despesasPagas.reduce((sum, t) => sum + t.valor, 0);
    const saldoAtual = totalReceitas - totalDespesas;
    
    // Contas pendentes
    const contasPagarPendentes = transactions.filter(t => t.tipo === 'despesa' && t.status === 'pendente').length;
    const contasReceberPendentes = transactions.filter(t => t.tipo === 'receita' && t.status === 'pendente').length;
    
    // Fornecedores ativos
    const fornecedoresAtivos = fornecedores.filter(f => f.status === 'ativo').length;
    
    const saldoAtualEl = document.getElementById('saldo-atual');
    const contasPagarPendentesEl = document.getElementById('contas-pagar-pendentes');
    const contasReceberPendentesEl = document.getElementById('contas-receber-pendentes');
    const fornecedoresAtivosEl = document.getElementById('fornecedores-ativos');
    
    if (saldoAtualEl) saldoAtualEl.textContent = formatCurrency(saldoAtual);
    if (contasPagarPendentesEl) contasPagarPendentesEl.textContent = contasPagarPendentes;
    if (contasReceberPendentesEl) contasReceberPendentesEl.textContent = contasReceberPendentes;
    if (fornecedoresAtivosEl) fornecedoresAtivosEl.textContent = fornecedoresAtivos;
    
    // Cores dos valores
    if (saldoAtualEl) {
        saldoAtualEl.className = saldoAtual >= 0 ? 'card-value receitas' : 'card-value despesas';
    }
}

function updateDashboardAlerts() {
    const alertsContainer = document.getElementById('dashboard-alerts');
    if (!alertsContainer) return;
    
    const alerts = [];
    
    // Contas vencendo
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const contasVencendo = transactions.filter(t => {
        const vencimento = new Date(t.vencimento);
        return t.status === 'pendente' && vencimento <= nextWeek;
    });
    
    if (contasVencendo.length > 0) {
        alerts.push({
            type: 'warning',
            message: `⚠️ ${contasVencendo.length} conta(s) vencendo nos próximos 7 dias`
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
    renderVencimentosChart();
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

function renderVencimentosChart() {
    const ctx = document.getElementById('vencimentos-chart');
    if (!ctx) return;

    if (vencimentosChart) {
        vencimentosChart.destroy();
    }

    // Próximos 30 dias
    const today = new Date();
    const next30Days = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
    
    const contasVencendo = transactions.filter(t => {
        const vencimento = new Date(t.vencimento);
        return t.status === 'pendente' && vencimento >= today && vencimento <= next30Days;
    });

    // Agrupar por categoria
    const categorias = {};
    contasVencendo.forEach(conta => {
        categorias[conta.categoria] = (categorias[conta.categoria] || 0) + conta.valor;
    });

    const labels = Object.keys(categorias);
    const data = Object.values(categorias);
    const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

    if (labels.length === 0) {
        vencimentosChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Nenhuma conta vencendo'],
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

    vencimentosChart = new Chart(ctx, {
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

function renderContasVencendo() {
    const container = document.getElementById('contas-vencendo');
    if (!container) return;
    
    // Contas vencendo nos próximos 7 dias
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const contasVencendo = transactions.filter(t => {
        const vencimento = new Date(t.vencimento);
        return t.status === 'pendente' && vencimento >= today && vencimento <= nextWeek;
    }).sort((a, b) => new Date(a.vencimento) - new Date(b.vencimento));
    
    if (contasVencendo.length === 0) {
        container.innerHTML = '<div class="empty-state"><h4>Nenhuma conta vencendo nos próximos 7 dias</h4></div>';
        return;
    }

    container.innerHTML = contasVencendo.map(conta => {
        const fornecedor = fornecedores.find(f => f.id === conta.fornecedorId);
        const diasRestantes = Math.ceil((new Date(conta.vencimento) - today) / (1000 * 60 * 60 * 24));
        return `
            <div class="conta-vencendo-item">
                <div class="conta-info">
                    <h4>${conta.descricao}</h4>
                    <p>${fornecedor ? fornecedor.nome : 'Fornecedor'} • Vence em ${diasRestantes} dia(s) • ${formatDate(conta.vencimento)}</p>
                </div>
                <div class="conta-valor ${conta.tipo}">
                    ${formatCurrency(conta.valor)}
                </div>
            </div>
        `;
    }).join('');
}

// SISTEMA FINANCEIRO (corrigido com filtros por data)
function renderTransactions(tipo) {
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
                    const fornecedor = fornecedores.find(f => f.id === t.fornecedorId);
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
    const dataInicioFilter = document.getElementById(`filter-data-inicio-${sectionName}`);
    const dataFimFilter = document.getElementById(`filter-data-fim-${sectionName}`);

    let filteredTransactions = transactions.filter(t => {
        const matchesTipo = t.tipo === tipo;
        const matchesStatus = !statusFilter || statusFilter.value === 'todos' || t.status === statusFilter.value;
        const matchesCategory = !categoryFilter || categoryFilter.value === 'todas' || t.categoria === categoryFilter.value;
        
        return matchesTipo && matchesStatus && matchesCategory;
    });
    
    // Aplicar filtros de data corrigidos
    if (dataInicioFilter && dataInicioFilter.value) {
        filteredTransactions = filteredTransactions.filter(t => t.vencimento >= dataInicioFilter.value);
    }
    if (dataFimFilter && dataFimFilter.value) {
        filteredTransactions = filteredTransactions.filter(t => t.vencimento <= dataFimFilter.value);
    }
    
    return filteredTransactions;
}

// FORNECEDORES
function renderFornecedoresTable() {
    const container = document.getElementById('fornecedores-table');
    if (!container) return;
    
    if (fornecedores.length === 0) {
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
                ${fornecedores.map(fornecedor => `
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

// TRANSAÇÕES
function openNewTransactionModal(tipo = null) {
    // Modal simplificado - função vazia por enquanto
    console.log('Abrir modal de transação:', tipo);
}

function editTransaction(id) {
    console.log('Editar transação:', id);
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

function editFornecedor(id) {
    console.log('Editar fornecedor:', id);
}

function deleteFornecedor(id) {
    if (confirm('Tem certeza que deseja excluir este fornecedor?')) {
        fornecedores = fornecedores.filter(f => f.id !== id);
        renderFornecedoresTable();
        updateFornecedoresSelect();
        showMessage('Fornecedor excluído com sucesso!', 'success');
    }
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

function showMessage(text, type) {
    console.log(`Message (${type}): ${text}`);
    
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    // Tentar encontrar um container apropriado
    let targetContainer = document.querySelector('.main-content');
    
    if (!targetContainer) {
        // Se não houver main-content, usar login container
        targetContainer = document.querySelector('.login-container');
    }
    
    if (!targetContainer) {
        // Como último recurso, usar o body
        targetContainer = document.body;
    }
    
    if (targetContainer) {
        // Remover mensagem anterior se existir
        const existingMessage = targetContainer.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        if (targetContainer === document.querySelector('.login-container')) {
            targetContainer.appendChild(message);
        } else {
            targetContainer.insertBefore(message, targetContainer.firstChild);
        }
    
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
}