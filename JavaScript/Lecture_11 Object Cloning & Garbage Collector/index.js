/***** Object Creation ******/
// let src = {
//     age:12,
//     wt:68,
//     ht:180
// };

/******* Object Clonning using Iteration ******/
// let dest = {};
// for(let key in src) {
//     let newKey = key;
//     let newValue = src[key];
//     //insert newKey and value in dest and create a clone
//     dest[newKey] = newValue;
// }

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);

/******* Object Clonning using Assign Method ******/
// let src2 = {
//     value:101,
//     name: "Love babbar"
// }

// let dest = Object.assign({}, src, src2);  //---> Multiple Object clonning

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);

/******* Object Clonning using Spread Operator ******/
// let dest = {...src};
// //let dest = src;

// src.age = 90;

// console.log("src: ", src);
// console.log("dest: ", dest);

/***** Dynamic nature of Object ******/
// console.log(src);

// src.color = "White";

// console.log(src);
