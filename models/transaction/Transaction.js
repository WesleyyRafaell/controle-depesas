class Transaction {
	constructor(_name, _value, _type) {
		this._name = _name;
		this._value = _value;
		this._type = _type;
	}

	get name() {
		return this._name;
	}

	get value() {
		return this.__value;
	}

	get type() {
		return this.__type;
	}
}
