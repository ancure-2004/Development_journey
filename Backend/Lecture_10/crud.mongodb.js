/***** CRUD Operations ******/
use("crudDb");

/****** Create ******/
// db.createCollection("courses");

// db.courses.insertOne({
// 	name: "Ankur Web Dev",
// 	price: 0,
// 	assignments: 12,
// 	projects: 45,
// });

// db.courses.insertMany([
// 	{
// 		name: "John AI Engineer",
// 		price: 100,
// 		assignments: 20,
// 		projects: 30,
// 	},
// 	{
// 		name: "Emma Data Scientist",
// 		price: 150,
// 		assignments: 25,
// 		projects: 50,
// 	},
// 	{
// 		name: "Sophia Cloud Architect",
// 		price: 200,
// 		assignments: 18,
// 		projects: 40,
// 	},
// 	{
// 		name: "Liam Mobile Dev",
// 		price: 50,
// 		assignments: 15,
// 		projects: 35,
// 	},
// 	{
// 		name: "Olivia Game Designer",
// 		price: 120,
// 		assignments: 22,
// 		projects: 60,
// 	},
// 	{
// 		name: "Noah Cybersecurity",
// 		price: 180,
// 		assignments: 17,
// 		projects: 25,
// 	},
// 	{
// 		name: "Mia UX/UI Designer",
// 		price: 90,
// 		assignments: 10,
// 		projects: 20,
// 	},
// 	{
// 		name: "Ethan Blockchain Dev",
// 		price: 250,
// 		assignments: 30,
// 		projects: 55,
// 	},
// 	{
// 		name: "Ava Full Stack Dev",
// 		price: 130,
// 		assignments: 28,
// 		projects: 48,
// 	},
// ]);

/****** Read *******/
// let a = db.courses.find();
// console.log(a.count());
//console.log(a.toArray());

// let b = db.courses.findOne({price: 0});
// console.log(b);

/***** UPDATE ******/
// db.courses.updateOne({price: 0}, {$set: {price: 1000}});

// db.courses.updateMany({price: 1000}, {$set: {price: 100}});

/***** DELETE ******/
// db.courses.deleteOne({price: 100});
// db.courses.deleteMany({price: 100});

// https://www.mongodb.com/docs/manual/reference/operator/query/
