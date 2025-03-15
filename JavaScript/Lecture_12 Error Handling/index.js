/****** compile time error ********/
// //---- syntax error
// console.log(1;

/****** Run time error ********/
// //----Reference error
// console.log(x);

// try{    // ---> write a code which can give an error
//     console.log("try block starts here");
//     //error -> reference error
//     console.log(x);
//     console.log("try block ends here")
// }

// catch(err) {   // ---> if try gives an error catch block will handle it
//     //define krte h, error k sath aap kya krna chahte h
//     //retry logic //fallback mechanism //logging
//     //custom error
//     console.log("I AM INSIDE CATCH BLOCK")
//     console.log("Your error is here: ", err );
// }

// finally{ // ---> finally block will run everytime
//     console.log("I will run everytime, as i am finally block")
// }

/****** Custome Error using THROW keyword ********/
//let's create a custom error
// try{
//     //Reference error
//     console.log(x);
// }
// catch(err) {
//     throw new Error("Bhai pehle declare kro, fer print karna");
// }

// // ---> Second way
// let errorCode = 100;
// if(errorCode == 100 ) {
//     throw new Error("Invalid Json");
// }
