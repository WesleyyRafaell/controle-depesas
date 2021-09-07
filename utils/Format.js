class Format {
	constructor() {
		throw new Error("Esta classe não devia ser instanciada");
	}

	static formatCurrency(input, evento) {
		// var tecla = !evento ? window.event.keyCode : evento.which;
		var value = input.value
			.replace(/[^\d]+/gi, "")
			.split("")
			.reverse()
			.join("");
		var result = "";
		var mask = "##.###.###,##".split("").reverse().join("");
		for (var x = 0, y = 0; x < mask.length && y < value.length; ) {
			if (mask.charAt(x) != "#") {
				result += mask.charAt(x);
				x++;
			} else {
				result += value.charAt(y);
				y++;
				x++;
			}
		}
		input.value = result.split("").reverse().join("");
	}
}
