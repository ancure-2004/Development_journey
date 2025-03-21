/****** Syntax for promise *******/
// let firstPromise = new Promise( (resolve, reject) => {

//     setTimeout(function sayMyName() {
//         console.log("My Name is Love babbar");
//     }, 15000);
// } );

// let promise1 = new Promise((resolve, reject)=> {
//     let success = true;
//     if(success) {
//         resolve(10);
//     }
//     else {
//         reject("Internal Server Error");
//     }
// });

/**** Then and Catch ****/
// promise1.then((message) => {
//     console.log("Then ka message is " + message);
// }).catch((error)=> {
//     console.log("Error: " + error);
// })

/**** Multiple Then statement known as promise chaining***/
// promise1
// 	.then((message) => {
// 		console.log("first msg:" + message);
// 		return 20;
// 	})
// 	.then((message) => {
// 		console.log("second msg: " + message);
// 		return 30;
// 	})
// 	.then((message) => {
// 		console.log("third msg: " + message);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	})
// 	.finally((message) => {  // --> finally will run always
// 		console.log("Main to final hu, chalunga pakka");
// 	});

let promise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, "First");
});
let promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 2000, "Second");
});
let promise3 = new Promise((resolve, reject) => {
	setTimeout(reject, 4000, "Third");
});

Promise.all([promise3, promise2, promise1])
	.then((values) => {
		console.log(values);
	})
	.catch((error) => {
		console.error("error:" + error);
	});
