/******** Classes and Objects **********/
// class Human {
//     //properties
//     age; // --> public
//     #wt = 80; // --> private
//     ht = 180;// --> public

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }

//     //behaviour
//     walking(){
//         console.log("I am Walking ", this.#wt); // --> wt is only accessed inside the class using this keyword
//     }
//     running() {
//         console.log("I am running")
//     }

//     get fetchWeight() {       // --> getter and setter used to accessd the private data
//         return this.#wt;       //     member outside the class, getter is used to access data
//     }

//     set modifyWeight(val) {    // --> setter is used to modify or set the data
//         this.#wt = val;
//     }
// }

// let obj = new Human(50, 190,101);     // --> passing arguments for the constructor
// console.log(#wt);              // --> wt can not be accessed as it is private
// console.log(obj.fetchWeight);        // --> to fetch the private data member using getter

// obj.walking();

/******* Default Parameters *********/
//function solve(value = {age : 15, wt: 90, ht: 100}) { // --> passing object as an default argument
//     console.log("HELLO JII -> ", value);
// }
// solve();

// function solve(value = "Rahul") {
//     console.log("HELLO JII -> ", value);
// }
// solve(undefined); // --> if I pass null then null will pe printed but in case of undefined default parameter will be printed

// function sayName(fName = "Uday", lName = fName.toUpperCase()) {  // ----> One parameter depends on another parameter
//     console.log("My Name is: ", fName," ", lName);
// }
// sayName("Love");

// function getAge() {
//     return 190;
// }
// function utility(name = "Love", age = getAge()) {  // --> function as a default argument
//    console.log(name, " ", age);
// }

// utility();
