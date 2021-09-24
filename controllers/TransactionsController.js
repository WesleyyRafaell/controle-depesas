class TransactionsController {
	constructor() {
		const $ = document.querySelector.bind(document);
		this._$titleBalance = $("#balance");
		this._$incomes = $("#money-plus");
		this._$spents = $("#money-minus");
		this._$transactionsUl = $("#transactions");
		this._transactions = new Transactions();
	}

	init(transactionsInit) {
		this._transactions.initTransactions(transactionsInit);
		const transactions = this._transactions.getTransactions();
		if (transactions.length > 0) {
			this.updateTotalBalance(transactions);
		}
	}

	update(transaction) {
		this._setTransactionIntoLocalStorage(transaction);
	}

	_setTransactionIntoLocalStorage(transaction) {
		let transactions = [];
		transactions = this._transactions.getTransactions();

		if (transactions.length === 0) {
			localStorage.setItem("transactions", JSON.stringify([transaction]));
			this._transactions.add(transaction);
			this.updateTotalBalance(this._transactions.getTransactions());
			return;
		}

		transactions.push(transaction);

		localStorage.setItem("transactions", JSON.stringify(transactions));
		this.updateTotalBalance(this._transactions.getTransactions());
	}

	updateTotalBalance(transactions) {
		const income = this._updateIncome(transactions);
		const spent = this._updateSpents(transactions);
		this._addTransactionIntoDom(transactions);

		const totalBalance = income - spent;

		this._$titleBalance.innerHTML = `R$ ${this._formatedCoin(totalBalance)}`;
	}

	_addTransactionIntoDom(transactions) {
		this._$transactionsUl.innerHTML = "";
		transactions.forEach((transaction) => {
			const liClass = transaction._type === "+" ? "plus" : "minus";
			this._$transactionsUl.innerHTML += `<li data-id="${transaction._id}" class=${liClass}>${transaction._name} 
			<span>${transaction._type} R$${transaction._value}</span>
			<button class="delete-btn">x</button></li>`;
		});
	}

	removeTransaction(event) {
		const target = event.target.parentNode;
		if (target.tagName !== "LI") return;
		const idTransaction = target.dataset.id;

		this._transactions.remove(idTransaction);
		localStorage.removeItem("transactions");

		const newArr = this._transactions.getTransactions();

		localStorage.setItem("transactions", JSON.stringify(newArr));

		this.updateTotalBalance(newArr);
	}

	_updateIncome(transactions) {
		const incomes = transactions.filter(
			(transaction) => transaction._type === "+"
		);

		if (incomes.length === 0) {
			this._$incomes.innerHTML = "R$ 0.00";
			return 0;
		}

		const income = this._returnValueOfArray(incomes);

		this._$incomes.innerHTML = `R$ ${this._formatedCoin(income)}`;

		return income;
	}

	_updateSpents(transactions) {
		const spents = transactions.filter(
			(transaction) => transaction._type === "-"
		);

		if (spents.length === 0) {
			this._$spents.innerHTML = "R$ 0.00";
			return 0;
		}

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
