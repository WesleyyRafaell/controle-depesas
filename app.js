const transaction = new TransactionController();
const transactions = new TransactionsController();

window.onload = () => {
	const transactionsLocalStorage = JSON.parse(
		localStorage.getItem("transactions")
	);
	if (!transactionsLocalStorage) return;

	transactions.init(transactionsLocalStorage);
};

document
	.querySelector("#form")
	.addEventListener("submit", transaction.addTransaction.bind(transaction));

document
	.querySelector("#buttons")
	.addEventListener(
		"click",
		transaction.toggleTypeTransaction.bind(transaction)
	);
