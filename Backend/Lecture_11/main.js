import mongoose from "mongoose";
import express from "express";
import {Todo} from "./models/Todo.js";

let a = await mongoose.connect("mongodb://localhost:27017/todo");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	const todo = new Todo({
		tittle: "Hey first Todo",
		desc: "Description of this todo",
		isDone: false,
		// days: "Ankur",   //--> WILL BE CRASHED BECAUSE TYPE IS STRING INSTEAD OF NUMBER
	});
	todo.save();
	res.send("Hello World!");
});

app.get("/a", async (req, res) => {
	let todo = await Todo.findOne({});
	console.log(todo);
	res.json({title: todo.title, desc: todo.desc});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
