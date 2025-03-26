const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

// app.use(express.static("public"));

//middleware 1 - logging fot the application
app.use((req, res, next) => {
	// --> next send the response to next middleware
	let log = `${Date.now()} is a ${req.method}\n`;
	fs.appendFileSync("logs.txt", log);
	console.log(log);
	// res.send("Ankur");
	next();
});

//middleware 2
app.use("/", (req, res, next) => {
	console.log("m2");
	next();
});

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
