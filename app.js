// Aplicação de Controle Financeiro
class ControleFinanceiro {
    constructor() {
        this.transactions = [];
        this.categorias = {
            receita: ["Salário", "Freelances", "Investimentos", "Vendas", "Outros"],
            despesa: ["Moradia", "Alimentação", "Transporte", "Saúde", "Educação", "Lazer", "Outros"]
        };
        this.currentSection = 'dashboard';
        this.editingTransactionId = null;
        this.charts = {};

        this.init();
    }

    init() {
        this.loadData();
        this.setupEventListeners();
        this.populateCategorias();
        this.updateDashboard();
        this.renderTransactionsList();
        this.updateReports();
        this.processRecurringTransactions();
    }

    // Data Management
    loadData() {
        const savedData = localStorage.getItem('controle-financeiro');
        if (savedData) {
            this.transactions = JSON.parse(savedData);
        } else {
            // Dados iniciais de exemplo
            this.transactions = [
                {
                    id: 1,
                    tipo: "receita",
                    descricao: "Salário",
                    valor: 5000,
                    categoria: "Salário",
                    vencimento: "2025-01-05",
                    recorrente: true,
                    status: "pago",
                    created: new Date().toISOString()
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
                    created: new Date().toISOString()
                },
                {
                    id: 3,
                    tipo: "despesa",
                    descricao: "Conta de Luz",
                    valor: 250,
                    categoria: "Moradia",
                    vencimento: "2025-01-15",
                    recorrente: true,
                    status: "pendente",
                    created: new Date().toISOString()
                }
            ];
            this.saveData();
        }
    }

    saveData() {
        localStorage.setItem('controle-financeiro', JSON.stringify(this.transactions));
    }

    // Event Listeners
    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.dataset.section;
                this.navigateToSection(section);
            });
        });

        // Add transaction button
        document.getElementById('add-transaction-btn').addEventListener('click', () => {
            this.openTransactionModal();
        });

        // Modal controls
        document.getElementById('close-modal').addEventListener('click', () => {
            this.closeTransactionModal();
        });

        document.getElementById('cancel-transaction').addEventListener('click', () => {
            this.closeTransactionModal();
        });

        document.getElementById('save-transaction').addEventListener('click', () => {
            this.saveTransaction();
        });

        // Form submission
        document.getElementById('transaction-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveTransaction();
        });

        // Transaction type change
        document.getElementById('transaction-tipo').addEventListener('change', (e) => {
            this.updateCategoriasSelect(e.target.value);
        });

        // Filters
        ['filter-status-receber', 'filter-categoria-receber', 'filter-status-pagar', 'filter-categoria-pagar'].forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('change', () => {
                    this.renderTransactionsList();
                });
            }
        });

        // Close modal on overlay click
        document.getElementById('transaction-modal').addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.closeTransactionModal();
            }
        });
    }

    // Navigation
    navigateToSection(section) {
        // Update active menu item
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-section="${section}"]`).classList.add('active');

        // Update active content section
        document.querySelectorAll('.content-section').forEach(sec => {
            sec.classList.remove('active');
        });
        document.getElementById(section).classList.add('active');

        // Update section title
        const titles = {
            'dashboard': 'Dashboard',
            'contas-receber': 'Contas a Receber',
            'contas-pagar': 'Contas a Pagar',
            'relatorios': 'Relatórios'
        };
        document.getElementById('section-title').textContent = titles[section];

        this.currentSection = section;

        // Update content based on section
        if (section === 'dashboard') {
            this.updateDashboard();
        } else if (section === 'relatorios') {
            this.updateReports();
        }
    }

    // Categories Management
    populateCategorias() {
        const receberSelect = document.getElementById('filter-categoria-receber');
        const pagarSelect = document.getElementById('filter-categoria-pagar');

        // Populate filter selects
        this.categorias.receita.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            receberSelect.appendChild(option);
        });

        this.categorias.despesa.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            pagarSelect.appendChild(option);
        });
    }

    updateCategoriasSelect(tipo) {
        const select = document.getElementById('transaction-categoria');
        select.innerHTML = '';

        const categorias = tipo === 'receita' ? this.categorias.receita : this.categorias.despesa;
        categorias.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            select.appendChild(option);
        });
    }

    // Dashboard
    updateDashboard() {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        // Calculate totals
        const receitas = this.transactions.filter(t => t.tipo === 'receita' && t.status === 'pago');
        const despesas = this.transactions.filter(t => t.tipo === 'despesa' && t.status === 'pago');
        
        const receitasDoMes = receitas.filter(t => {
            const date = new Date(t.vencimento);
            return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
        });

        const despesasDoMes = despesas.filter(t => {
            const date = new Date(t.vencimento);
            return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
        });

        const totalReceitas = receitasDoMes.reduce((sum, t) => sum + t.valor, 0);
        const totalDespesas = despesasDoMes.reduce((sum, t) => sum + t.valor, 0);
        const saldo = totalReceitas - totalDespesas;

        // Update dashboard cards
        document.getElementById('saldo-atual').textContent = this.formatCurrency(saldo);
        document.getElementById('saldo-atual').className = `amount ${saldo >= 0 ? 'positive' : 'negative'}`;
        
        document.getElementById('receitas-mes').textContent = this.formatCurrency(totalReceitas);
        document.getElementById('despesas-mes').textContent = this.formatCurrency(totalDespesas);

        // Pending transactions
        const contasPendentes = this.transactions.filter(t => t.status === 'pendente').length;
        document.getElementById('contas-pendentes').textContent = contasPendentes;

        // Upcoming transactions (next 7 days)
        this.updateUpcomingTransactions();

        // Update charts
        this.updateCharts();
    }

    updateUpcomingTransactions() {
        const today = new Date();
        const nextWeek = new Date();
        nextWeek.setDate(today.getDate() + 7);

        const upcoming = this.transactions.filter(t => {
            const dueDate = new Date(t.vencimento);
            return t.status === 'pendente' && dueDate >= today && dueDate <= nextWeek;
        });

        const container = document.getElementById('contas-vencendo');
        
        if (upcoming.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>Nenhuma conta vencendo nos próximos 7 dias</p></div>';
            return;
        }

        container.innerHTML = upcoming.map(transaction => this.createTransactionHTML(transaction)).join('');
        
        // Add event listeners to action buttons
        this.addTransactionEventListeners();
    }

    updateCharts() {
        this.updateCategoriesChart();
        this.updateEvolutionChart();
    }

    updateCategoriesChart() {
        const ctx = document.getElementById('chart-categorias');
        if (!ctx) return;

        const despesasDoMes = this.transactions.filter(t => {
            const date = new Date(t.vencimento);
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();
            return t.tipo === 'despesa' && t.status === 'pago' && 
                   date.getMonth() === currentMonth && date.getFullYear() === currentYear;
        });

        const categoriasTotais = {};
        despesasDoMes.forEach(t => {
            categoriasTotais[t.categoria] = (categoriasTotais[t.categoria] || 0) + t.valor;
        });

        const labels = Object.keys(categoriasTotais);
        const data = Object.values(categoriasTotais);
        const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

        if (this.charts.categorias) {
            this.charts.categorias.destroy();
        }

        this.charts.categorias = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors.slice(0, labels.length)
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

    updateEvolutionChart() {
        const ctx = document.getElementById('chart-evolucao');
        if (!ctx) return;

        // Get last 6 months data
        const months = [];
        const receitas = [];
        const despesas = [];

        for (let i = 5; i >= 0; i--) {
            const date = new Date();
            date.setMonth(date.getMonth() - i);
            
            const monthName = date.toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' });
            months.push(monthName);

            const monthReceitas = this.transactions.filter(t => {
                const transactionDate = new Date(t.vencimento);
                return t.tipo === 'receita' && t.status === 'pago' &&
                       transactionDate.getMonth() === date.getMonth() &&
                       transactionDate.getFullYear() === date.getFullYear();
            }).reduce((sum, t) => sum + t.valor, 0);

            const monthDespesas = this.transactions.filter(t => {
                const transactionDate = new Date(t.vencimento);
                return t.tipo === 'despesa' && t.status === 'pago' &&
                       transactionDate.getMonth() === date.getMonth() &&
                       transactionDate.getFullYear() === date.getFullYear();
            }).reduce((sum, t) => sum + t.valor, 0);

            receitas.push(monthReceitas);
            despesas.push(monthDespesas);
        }

        if (this.charts.evolucao) {
            this.charts.evolucao.destroy();
        }

        this.charts.evolucao = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: months,
                datasets: [{
                    label: 'Receitas',
                    data: receitas,
                    backgroundColor: '#1FB8CD'
                }, {
                    label: 'Despesas',
                    data: despesas,
                    backgroundColor: '#B4413C'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return 'R$ ' + value.toLocaleString('pt-BR');
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Transactions Management
    renderTransactionsList() {
        const receberContainer = document.getElementById('lista-contas-receber');
        const pagarContainer = document.getElementById('lista-contas-pagar');

        if (receberContainer) {
            const receitas = this.getFilteredTransactions('receita');
            if (receitas.length === 0) {
                receberContainer.innerHTML = '<div class="empty-state"><h3>Nenhuma conta a receber</h3><p>Clique em "Nova Transação" para adicionar uma receita.</p></div>';
            } else {
                receberContainer.innerHTML = receitas.map(t => this.createTransactionHTML(t)).join('');
            }
        }

        if (pagarContainer) {
            const despesas = this.getFilteredTransactions('despesa');
            if (despesas.length === 0) {
                pagarContainer.innerHTML = '<div class="empty-state"><h3>Nenhuma conta a pagar</h3><p>Clique em "Nova Transação" para adicionar uma despesa.</p></div>';
            } else {
                pagarContainer.innerHTML = despesas.map(t => this.createTransactionHTML(t)).join('');
            }
        }

        // Add event listeners
        this.addTransactionEventListeners();
    }

    getFilteredTransactions(tipo) {
        let transactions = this.transactions.filter(t => t.tipo === tipo);

        // Apply status filter
        const statusFilter = document.getElementById(`filter-status-${tipo === 'receita' ? 'receber' : 'pagar'}`);
        if (statusFilter && statusFilter.value) {
            transactions = transactions.filter(t => t.status === statusFilter.value);
        }

        // Apply category filter
        const categoryFilter = document.getElementById(`filter-categoria-${tipo === 'receita' ? 'receber' : 'pagar'}`);
        if (categoryFilter && categoryFilter.value) {
            transactions = transactions.filter(t => t.categoria === categoryFilter.value);
        }

        // Sort by due date
        return transactions.sort((a, b) => new Date(a.vencimento) - new Date(b.vencimento));
    }

    createTransactionHTML(transaction) {
        const dueDate = new Date(transaction.vencimento);
        const today = new Date();
        const isOverdue = dueDate < today && transaction.status === 'pendente';
        const isToday = dueDate.toDateString() === today.toDateString();

        let dueDateClass = '';
        if (isOverdue) dueDateClass = 'overdue';
        else if (isToday) dueDateClass = 'today';

        return `
            <div class="transaction-item">
                <div class="transaction-info">
                    <h4>${transaction.descricao}</h4>
                    <p>${transaction.categoria} ${transaction.recorrente ? '<span class="recurrence-badge">Recorrente</span>' : ''}</p>
                </div>
                <div class="transaction-value ${transaction.tipo}">
                    ${transaction.tipo === 'receita' ? '+' : '-'} ${this.formatCurrency(transaction.valor)}
                </div>
                <div class="transaction-due ${dueDateClass}">
                    ${this.formatDate(transaction.vencimento)}
                </div>
                <div class="status-badge ${transaction.status}">
                    ${transaction.status}
                </div>
                <div class="transaction-actions">
                    ${transaction.status === 'pendente' ? 
                        `<button class="btn btn--xs btn--primary" onclick="app.markAsPaid(${transaction.id})">Pagar</button>` :
                        `<button class="btn btn--xs btn--outline" onclick="app.markAsPending(${transaction.id})">Marcar Pendente</button>`
                    }
                    <button class="btn btn--xs btn--outline" onclick="app.editTransaction(${transaction.id})">Editar</button>
                    <button class="btn btn--xs btn--outline" onclick="app.deleteTransaction(${transaction.id})">Excluir</button>
                </div>
            </div>
        `;
    }

    addTransactionEventListeners() {
        // Event listeners are handled by onclick attributes in the HTML for simplicity
    }

    // Transaction CRUD Operations
    openTransactionModal(transactionId = null) {
        this.editingTransactionId = transactionId;
        const modal = document.getElementById('transaction-modal');
        const form = document.getElementById('transaction-form');
        const title = document.getElementById('modal-title');

        if (transactionId) {
            const transaction = this.transactions.find(t => t.id === transactionId);
            title.textContent = 'Editar Transação';
            
            document.getElementById('transaction-tipo').value = transaction.tipo;
            document.getElementById('transaction-descricao').value = transaction.descricao;
            document.getElementById('transaction-valor').value = transaction.valor;
            document.getElementById('transaction-vencimento').value = transaction.vencimento;
            document.getElementById('transaction-recorrente').checked = transaction.recorrente;
            document.getElementById('transaction-status').value = transaction.status;
            
            this.updateCategoriasSelect(transaction.tipo);
            document.getElementById('transaction-categoria').value = transaction.categoria;
        } else {
            title.textContent = 'Nova Transação';
            form.reset();
            this.updateCategoriasSelect('receita');
        }

        modal.classList.remove('hidden');
        document.getElementById('transaction-descricao').focus();
    }

    closeTransactionModal() {
        const modal = document.getElementById('transaction-modal');
        modal.classList.add('hidden');
        this.editingTransactionId = null;
    }

    saveTransaction() {
        const form = document.getElementById('transaction-form');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const tipo = document.getElementById('transaction-tipo').value;
        const descricao = document.getElementById('transaction-descricao').value;
        const valor = parseFloat(document.getElementById('transaction-valor').value);
        const categoria = document.getElementById('transaction-categoria').value;
        const vencimento = document.getElementById('transaction-vencimento').value;
        const recorrente = document.getElementById('transaction-recorrente').checked;
        const status = document.getElementById('transaction-status').value;

        if (this.editingTransactionId) {
            // Update existing transaction
            const index = this.transactions.findIndex(t => t.id === this.editingTransactionId);
            if (index !== -1) {
                this.transactions[index] = {
                    ...this.transactions[index],
                    tipo,
                    descricao,
                    valor,
                    categoria,
                    vencimento,
                    recorrente,
                    status
                };
            }
        } else {
            // Create new transaction
            const newTransaction = {
                id: Date.now(),
                tipo,
                descricao,
                valor,
                categoria,
                vencimento,
                recorrente,
                status,
                created: new Date().toISOString()
            };
            this.transactions.push(newTransaction);
        }

        this.saveData();
        this.closeTransactionModal();
        this.updateDashboard();
        this.renderTransactionsList();
        this.updateReports();
    }

    editTransaction(id) {
        this.openTransactionModal(id);
    }

    deleteTransaction(id) {
        if (confirm('Tem certeza que deseja excluir esta transação?')) {
            this.transactions = this.transactions.filter(t => t.id !== id);
            this.saveData();
            this.updateDashboard();
            this.renderTransactionsList();
            this.updateReports();
        }
    }

    markAsPaid(id) {
        const transaction = this.transactions.find(t => t.id === id);
        if (transaction) {
            transaction.status = 'pago';
            this.saveData();
            this.updateDashboard();
            this.renderTransactionsList();
            this.updateReports();
        }
    }

    markAsPending(id) {
        const transaction = this.transactions.find(t => t.id === id);
        if (transaction) {
            transaction.status = 'pendente';
            this.saveData();
            this.updateDashboard();
            this.renderTransactionsList();
            this.updateReports();
        }
    }

    // Reports
    updateReports() {
        const receitas = this.transactions.filter(t => t.tipo === 'receita' && t.status === 'pago');
        const despesas = this.transactions.filter(t => t.tipo === 'despesa' && t.status === 'pago');

        const totalReceitas = receitas.reduce((sum, t) => sum + t.valor, 0);
        const totalDespesas = despesas.reduce((sum, t) => sum + t.valor, 0);
        const economia = totalReceitas - totalDespesas;

        document.getElementById('total-receitas').textContent = this.formatCurrency(totalReceitas);
        document.getElementById('total-despesas').textContent = this.formatCurrency(totalDespesas);
        
        const economiaElement = document.getElementById('economia-total');
        economiaElement.textContent = this.formatCurrency(economia);
        economiaElement.className = `amount ${economia >= 0 ? 'positive' : 'negative'}`;

        this.updateCategorySummary();
    }

    updateCategorySummary() {
        const container = document.getElementById('resumo-categorias');
        const categorySummary = {};

        this.transactions.filter(t => t.status === 'pago').forEach(t => {
            if (!categorySummary[t.categoria]) {
                categorySummary[t.categoria] = { receita: 0, despesa: 0 };
            }
            categorySummary[t.categoria][t.tipo] += t.valor;
        });

        const summaryHTML = Object.keys(categorySummary).map(categoria => {
            const { receita, despesa } = categorySummary[categoria];
            const total = receita - despesa;
            
            return `
                <div class="category-item">
                    <span class="category-name">${categoria}</span>
                    <div>
                        ${receita > 0 ? `<span class="category-amount receita">+${this.formatCurrency(receita)}</span>` : ''}
                        ${despesa > 0 ? `<span class="category-amount despesa">-${this.formatCurrency(despesa)}</span>` : ''}
                        <span class="category-amount ${total >= 0 ? 'receita' : 'despesa'}">${this.formatCurrency(total)}</span>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = summaryHTML || '<div class="empty-state"><p>Nenhuma transação encontrada</p></div>';
    }

    // Recurring Transactions
    processRecurringTransactions() {
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();

        this.transactions.forEach(transaction => {
            if (!transaction.recorrente) return;

            const dueDate = new Date(transaction.vencimento);
            const transactionMonth = dueDate.getMonth();
            const transactionYear = dueDate.getFullYear();

            // If this recurring transaction is from a previous month, create a new one for the current month
            if (transactionYear < currentYear || (transactionYear === currentYear && transactionMonth < currentMonth)) {
                // Check if we already have a transaction for this month
                const existsForCurrentMonth = this.transactions.some(t => {
                    const tDate = new Date(t.vencimento);
                    return t.descricao === transaction.descricao &&
                           t.categoria === transaction.categoria &&
                           t.tipo === transaction.tipo &&
                           tDate.getMonth() === currentMonth &&
                           tDate.getFullYear() === currentYear;
                });

                if (!existsForCurrentMonth) {
                    const newDueDate = new Date(currentYear, currentMonth, dueDate.getDate());
                    const newTransaction = {
                        id: Date.now() + Math.random(),
                        tipo: transaction.tipo,
                        descricao: transaction.descricao,
                        valor: transaction.valor,
                        categoria: transaction.categoria,
                        vencimento: newDueDate.toISOString().split('T')[0],
                        recorrente: true,
                        status: 'pendente',
                        created: new Date().toISOString()
                    };
                    this.transactions.push(newTransaction);
                }
            }
        });

        this.saveData();
    }

    // Utility Methods
    formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('pt-BR');
    }
}

// Initialize the application
const app = new ControleFinanceiro();