class TransactionController {
	constructor() {
		const $ = document.querySelector.bind(document);

		this._idTransaction = "";
		this._inputName = $("#name");
		this._inputAmount = $("#amount");
		this._typeTransaction = "+";
		this._removeClass = new RemoveClassList("#buttons > div");
	}

	addTransaction(event) {
		event.preventDefault();
		this._idTransaction = "_" + Math.random().toString(36).substr(2, 9);

		const transaction = new Transaction(
			this._idTransaction,
			this._inputName.value,
			this._inputAmount.value,
			this._typeTransaction
		);

		transactions.update(transaction);

		this._cleanForm();
	}

	toggleTypeTransaction(event) {
		const target = event.target;

		this._removeClass.remove("active");

		target.classList.add("active");

		this._typeTransaction = target.innerHTML;
	}

	_cleanForm() {
		this._inputName.value = "";
		this._inputAmount.value = "";
		this._inputName.focus();
	}
}
