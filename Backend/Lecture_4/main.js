const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

//app.get or app.post or app.put or app.delete(path, handler);
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/about", (req, res) => {
	res.send("About us");
});

app.get("/contact", (req, res) => {
	res.send("Hello contact me");
});

app.get("/blog", (req, res) => {
	res.send(" Hello World2!");
});

app.get("/blog/:slug", (req, res) => {
	// --> slug as a variable can write anything
	// for URL this :http://localhost:3000/blog/ankur?mode=dark&region=in
	console.log(req.params); // params will output { slug: 'ankur' }
	console.log(req.query); // query will output { mode: 'dark', region: 'in' }
	res.send(`Hello ${req.params.slug}`);
});

// app.get("/blog/intro-to-js", (req, res) => {
// 	//logic to fetch into to js from the db
// 	res.send("Introduction to js");
// });

// app.get("/blog/intro-to-python", (req, res) => {
// 	res.send("Introduction of Python");
// });

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
