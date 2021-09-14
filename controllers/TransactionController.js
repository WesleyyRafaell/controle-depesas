class TransactionController {
	constructor() {
		const $ = document.querySelector.bind(document);

		this._inputName = $("#name");
		this._inputAmount = $("#amount");
		this._typeTransaction = "+";
		this._removeClass = new RemoveClassList("#buttons > div");
		this._transactionsController = new TransactionsController();
	}

	addTransaction(event) {
		event.preventDefault();

		const transaction = new Transaction(
			this._inputName.value,
			this._inputAmount.value,
			this._typeTransaction
		);

		this._transactionsController.update(transaction);

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
