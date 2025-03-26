// Select the database to use.
use("Development");

// Insert a few documents into the backend collection.
db.getCollection("backend").insertMany([
	{
		name: "Web Development",
		price: 25000,
		instructor: "Rahul",
	},
	{
		name: "Data Science",
		price: 30000,
		instructor: "Priya",
	},
	{
		name: "Mobile App Development",
		price: 22000,
		instructor: "Ankur",
	},
	{
		name: "Cyber Security",
		price: 27000,
		instructor: "Neha",
	},
	{
		name: "Cloud Computing",
		price: 35000,
		instructor: "Amit",
	},
	{
		name: "AI & Machine Learning",
		price: 40000,
		instructor: "Sandeep",
	},
	{
		name: "Blockchain Technology",
		price: 32000,
		instructor: "Vikas",
	},
	{
		name: "Graphic Design",
		price: 18000,
		instructor: "Sonia",
	},
	{
		name: "Digital Marketing",
		price: 15000,
		instructor: "Kunal",
	},
	{
		name: "Game Development",
		price: 28000,
		instructor: "Rohit",
	},
]);

// Print a message to the output window.
console.log(`Done inserting data`);
