/****** Function Hoisting ******/
// sayMyName("Babbar");
// function sayMyName(finalName) {
// 	console.log(finalName);
// }

/***** Variable Hoisting ******/
// console.log(age);
// var age = 25;

/***** Array of Functions ******/
// const arr = [
//     function(a,b) {
//         return a+b;
//     },
//     function(a,b) {
//         return a-b;
//     },
//     function(a,b) {
//         return a*b;
//     }
// ];
// let first = arr[2];
// let ans = first(5,10);
// console.log(ans);

/***** Returning a function ******/
// function solve(number) {
//     return function(number) {
//         return number*number;
//     }
// }
// let ans = solve(5);
// let finalAns = ans(10);
// console.log(finalAns);

/***** Passing a function as argument ******/
// function greetMe(greet, fullName) {
//     console.log("hello ", fullName);
//     greet();
// }

// function greet() {
//     console.log("Greeting for the day")
// }
// greetMe(greet, "Babbar");
// greet();

/***** Function as a Property of Object ******/
// let obj = {
//     age:25,
//     wt: 36,
//     ht:180,
//     greet: ()=>{
//         console.log("hello Dunia");
//     }
// }
// console.log(obj.age);
// obj.greet();

/***** Assign to variable ******/
// var greet = function() {
//     console.log("Namaste Dunia");
// }
//greet();
