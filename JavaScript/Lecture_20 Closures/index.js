function outerFunction() {
	let name = "Ankur";

	function innerFunction() {
		console.log(name);
	}

	return innerFunction;
}
let inner = outerFunction();
inner();
