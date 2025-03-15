// function changeText() {
// 	let fpara = document.getElementById("fpara");
// 	fpara.textContent = "Hello Ankur";
// }
// let fpara = document.getElementById("fpara");
// fpara.addEventListener("click", changeText); // --> Adding Event Listener

// fpara.removeEventListener("click", changeText); // --> Removing Event Listener

// let anchorElement = document.getElementById("fanchor");
// anchorElement.addEventListener("click", function (event) {
// 	event.preventDefault();  // --> Removing the Default function of an Element
// 	anchorElement.textContent = "Click hogya h";
// });

// let paras = document.querySelectorAll("p");
// function alertPara(event) {
//     if(event.target.nodeName === 'SPAN') {   // --> condition for event listener
//         alert("You have Clicked on para: " + event.target.textContent );
//     }
// }

// // for(let i=0; i<paras.length; i++) {
// //     let para = paras[i];
// //     console.log("eventListener added");
// //     para.addEventListener('click', alertPara);
// // }

// let mydiv = document.getElementById('wrapper');  // --> optimal way of adding event Listner
// adding eventListener for every para
// document.addEventListener('click', alertPara); // --> best is to add it to div
