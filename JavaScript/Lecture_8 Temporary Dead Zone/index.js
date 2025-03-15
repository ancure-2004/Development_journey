/******** Temproral dead zone ********/
// console.log(marks);  // can not be hoisted as marks declared as const
// console.log("babbar");
// console.log("Love");
// const marks = 100; // so from line 1 to line 4 this zone is temproral dead zone
// console.log(marks);

/******** global scope ********/
// const age = 15;

// console.log(age);

// {
//     console.log(age)
// }
// if(true ){
//     console.log(age)
// }
// for(let i=0; i<2; i++) {
//     console.log(age);
// }

// function sayHello() {
//     console.log("hi ", age);
// }
// sayHello();

/******** function scope ********/
// console.log(fullName); // -> can not be accessed as declared in the function
// function sayHello() {
//     const fullName = "Earth";
//     console.log("Hello Dunia ", name);
// }
// console.log(fullName); // -> can not be accessed as declared in the function
// sayHello();

/******** block scope ********/
// console.log(height); // Var can be accessed outdie the block
// {
//     var height = 180;
// }
// console.log(height);

// {
//     const age = 100;
// }
// console.log(age); //this will give error as let and const can not be accessed outside the block
