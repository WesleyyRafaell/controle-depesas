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

	remove(id) {
		const newArr = this._transactions.filter(
			(transaction) => transaction._id !== id
		);
		this._transactions = newArr;
	}
}
