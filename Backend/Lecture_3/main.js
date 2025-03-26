const fs = require("fs");
// console.log(fs);

console.log("Starting");
// fs.writeFileSync("Ankur.txt", "Ankur is good boy");

fs.writeFile("Ankur2.txt", "Ankur is a good boy2", () => {
	console.log("done");
	fs.readFile("Ankur2.txt", (error, data) => {
		console.log(error, data.toString()); // --> this continuing will lead to collback hell
	});
});

fs.appendFile("ankur.txt", "AnkutTyagi", (e, d) => {
	console.log(d);
});
console.log("Ending");
