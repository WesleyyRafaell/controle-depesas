class Transactions {
	constructor() {
		this._transactions = [];
	}

	getTransactions() {
		return this._transactions;
	}

	add(transaction) {
		this._transactions.push(transaction);
	}
}
