class RemoveClassList {
	constructor(elements) {
		this._elements = document.querySelectorAll(elements);
	}

	remove(nameClass) {
		this._elements.forEach((element) => {
			element.classList.remove(nameClass);
		});
	}
}
