const transaction = new TransactionController();

document
	.querySelector("#form")
	.addEventListener("submit", transaction.addTransaction.bind(transaction));

document
	.querySelector("#buttons")
	.addEventListener(
		"click",
		transaction.toggleTypeTransaction.bind(transaction)
	);
