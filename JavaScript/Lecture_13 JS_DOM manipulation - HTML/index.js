/***** Access Element ******/
// document.getElementById("fhead");
// document.getElementsByClassName("textMatter");
// document.getElementsByTagName("p");

// document.querySelector("#fpara");
// document.querySelector(".textMatter");
// document.querySelector("p");

// document.querySelectorAll("textMatter");
// document.querySelectorAll("p");

/****** Update Existing Element *******/
// let heading = $0;

/*** innerHTML ****/
// heading.innerHTML; // ---> fetch the element
// heading.innerHTML = "Hello Jee"; // --> update the element

/*** innerText ****/
// let element = document.querySelector("#fdiv");
// element.innerText;

/*** textContent ****/
// element.textContent;

/****** Adding New Element *******/
// let fHeading = document.createElement("h2"); // --> Create Element
// fHeading.textContent = "My name is Ankur Tyagi";
// let bodyTag = document.querySelector("body");
// bodyTag.appendChild(fHeading);  // --> add Element

// let mydiv = document.querySelector("#mydiv");

// let newElement = document.createElement("span");
// newElement.textContent = "This is me Ankur Tyagi";

/*** add element to desired position using insertAdjacentElement ****/
// mydiv.insertAdjacentElement("beforebegin", newElement);
// mydiv.insertAdjacentElement("afterbegin", newElement);
// mydiv.insertAdjacentElement("beforeend", newElement);
// mydiv.insertAdjacentElement("afterend", newElement);

/****** Removing the Element *******/
// let parent = document.querySelector("#mydiv");
// let child = document.querySelector("#fpara");
// parent.removeChild(child);

// let parent1 = child.parentElement; // fetching parent from child
