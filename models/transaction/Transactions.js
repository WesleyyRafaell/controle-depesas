class Transactions {
	constructor() {
		this._transactions = [];
	}

	initTransactions(transactions) {
		this._transactions = transactions;
	}

	getTransactions() {
		return this._transactions;
	}

	add(transaction) {
		this._transactions.push(transaction);
	}
}
