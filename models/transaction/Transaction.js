class Transaction {
	constructor(_id, _name, _value, _type) {
		this._id = _id;
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
