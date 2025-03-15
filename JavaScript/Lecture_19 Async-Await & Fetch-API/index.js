/****** Async Function ******/
// async function getData() {
// 	setTimeout(function () {
// 		console.log("I am Ankur");
// 	}, 3000);
// }
// getData();

/**** Use of await function and fetching API ***/
// async function getData() {
// 	let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// 	let data = await response.json();
// 	console.log(data);
// }
// getData();

// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const url = "https://jsonplaceholder.typicode.com/posts";

// const options = {
// 	method: "POST",
// 	body: JSON.stringify({username: "love babbar"}),
// 	headers: myHeaders,
// };
// async function getData() {
// 	const url = "https://dummyjson.com/posts";
// 	const response = await fetch(url);
// 	let data = await response.json();
// 	console.log("get data response: ", data);
// }
// async function postData() {
// 	const response = await fetch("https://dummyjson.com/posts/add", {
// 		// -> fetch with options
// 		method: "POST",
// 		headers: {"Content-Type": "application/json"},
// 		body: JSON.stringify({
// 			title: "Love babbar -> I am in love with someone.",
// 			userId: 5,
// 			/* other post data */
// 		}),
// 	});
// 	let data = await response.json();
// 	console.log("post data response: ", data);
// }

// async function processData() {
// 	await postData();
// 	await getData();
// }
// processData();
