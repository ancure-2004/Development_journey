const express = require("express");
const blog = require("./routes/blog");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog);

app.post("/", (req, res) => {
	console.log("This is a post request");
	res.send("Hello World Post!");
});

app
	.get("/", (req, res) => {
		console.log("This is a get request");
		res.send("Hello World!");
	})
	.put("/", (req, res) => {
		console.log("This is a put request");
		res.send("Hello World put!");
	});

app.get("/index", (req, res) => {
	console.log("Hey its index");
	res.sendFile("templates/index.html", {root: __dirname}); // --> we have to give absolute path
});

app.get("/api", (req, res) => {
	res.json({a: 1, b: 2, c: 3, d: 4}); // --> we have to give absolute path
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
