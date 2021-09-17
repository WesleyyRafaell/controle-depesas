class TransactionsController {
	constructor() {
		const $ = document.querySelector.bind(document);
		this._$titleBalance = $("#balance");
		this._$incomes = $("#money-plus");
		this._$spents = $("#money-minus");
		this._$transactionsUl = $("#transactions");
		this._transactions = new Transactions();
	}

	update(transaction) {
		this._transactions.add(transaction);
		this.updateTotalBalance(this._transactions.getTransactions());
	}

	updateTotalBalance(transactions) {
		const income = this.updateIncome(transactions);
		const spent = this.updateSpents(transactions);
		this.addTransactionIntoDom(transactions);

		const totalBalance = income - spent;

		this._$titleBalance.innerHTML = `R$ ${this._formatedCoin(totalBalance)}`;
	}

	addTransactionIntoDom(transactions) {
		this._$transactionsUl.innerHTML = "";
		transactions.forEach((transaction) => {
			const liClass = transaction._type === "+" ? "plus" : "minus";
			this._$transactionsUl.innerHTML += `<li class=${liClass}>${transaction._name} <span>${transaction._type} R$${transaction._value}</span><button class="delete-btn">x</button></li>`;
		});
	}

	updateIncome(transactions) {
		const incomes = transactions.filter(
			(transaction) => transaction._type === "+"
		);

		if (incomes.length === 0) return 0;

		const income = this._returnValueOfArray(incomes);

		this._$incomes.innerHTML = `R$ ${this._formatedCoin(income)}`;

		return income;
	}

	updateSpents(transactions) {
		const spents = transactions.filter(
			(transaction) => transaction._type === "-"
		);

		if (spents.length === 0) return 0;

		const spent = this._returnValueOfArray(spents);

		this._$spents.innerHTML = `R$ ${this._formatedCoin(spent)}`;

		return spent;
	}

	_returnValueOfArray(array) {
		return array
			.map((item) => parseFloat(item._value.replace(".", "")))
			.reduce((previousValue, currentValue) => previousValue + currentValue);
	}

	_formatedCoin(value) {
		return new Intl.NumberFormat("pt-BR").format(value);
	}
}