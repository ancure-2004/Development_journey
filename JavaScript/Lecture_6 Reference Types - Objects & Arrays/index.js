/******* OBJECT ******** */
// let obj = {
// 	name: "Love",
// 	age: 25,
// 	weight: 85,
// 	height: "6ft 1in",
// 	greet: function () {
// 		console.log("hello jee kaise ho saare");
// 	},
// };

// /******* FOR IN ********/
// for (let key in obj) {
// 	console.log(key, " ", obj[key]);
// }

// console.log(obj);
// obj.greet();

// console.log(typeof obj);

/******* creation of array ******** */
// let arr = [1, 2, 3, 4, 5];
// //array constructor
// let brr = new Array("love", 100, true);

/***** PUSH ******/
// brr.push("Babbar");

/***** POP ******/
// brr.pop();

/****** SHIFT ******/
// brr.shift();

/****** UNSIFT *******/
// brr.unshift("Love Babbar");

/****** SLICE ******/
// brr.push(20);
// brr.push(40);
// brr.push(70);
// // console.log(brr.slice(2, 4));

/**** SPLICE *****/
// brr.splice(1, 0, "kunal");
// console.log(brr);
// console.log(typeof brr);

/******** Filter ********/
// let arr = [10, 20, 30, 11, 21, 44, 51];

// let evenArray = arr.filter((number) => {
// 	return number % 2 === 0;
// 	// if(number%2 === 0) {
// 	//     return true;
// 	// }
// 	// else {
// 	//     return false;
// 	// }
// });
// console.log(evenArray);

// let arr = [1, 2, "love", "kunal", null];

// let ans = arr.filter((value) => {
// 	if (typeof value == "number") {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(ans);

/******* MAP *********/
// arr.map((number, index) => {
// 	console.log(number);
// 	console.log(index);
// });

// let ansArray = arr.map((number) => {
// 	return number * number;
// });
// console.log(ansArray);

/******* REDUCE *********/
// let arr = [10, 20, 30, 40];
// let ans = arr.reduce((acc, curr) => {
// 	return acc + curr;
// }, 0);
// console.log(ans);

/******* SORT *********/
// let arr = [9, 1, 7, 4, 2, 8];
// arr.sort();

// console.log(arr);

/******* INDEX OF *********/
// console.log(arr.indexOf(9));

/******* FOR EACH *********/
// let arr = [10, 20, 30];

// let length = arr.length;
// console.log("length: ", length);

// //tradiotional loop
// for (let index = 0; index < length; index++) {
// 	console.log(arr[index]);
// }

// //FOR EACH
// arr.forEach((value, index) => {
// 	console.log("Number: ", value, " Index: ", index);
// });

// /******* FOR of *********/
// let arr = [10, 20, 30, 40];

// for (let value of arr) {
// 	console.log(value);
// }

// let fullName = "babbar";

// for(let val of fullName) {
//     console.log(val);
// }

// /******* ARRAY WITH FUNCTION *********/

let arr = [10, 20, 30, 40, 50];

// function getSum(arr) {
// 	let len = arr.length;
// 	let sum = 0;
// 	for (let i = 0; i < len; i++) {
// 		sum = sum + arr[i];
// 	}
// 	return sum;
// }

let getSum = (arr) => {
	let sum = 0;
	arr.forEach((value) => {
		sum = sum + value;
	});
	return sum;
};

let totalSum = getSum(arr);
console.log(totalSum);
