// const rootNode = document;

// //chilNodes or child of document.
// // console.log(rootNode.childNodes); // html

// const htmlElementNode = rootNode.childNodes[0];
// // console.log(htmlElementNode.childNodes); //chlid of html element

// const headElementNode = htmlElementNode.childNodes[0];
// const textNode = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];

// // console.log(headElementNode.parentNode); // head element
// // console.log(textNode.nextSibling); // (\n and space) that you gave
// // console.log(bodyElementNode); // body element

// // console.log(headElementNode.nextElementSibling);

// const heading = document.querySelector("h1");
// const patentOfHeading = heading.parentNode
// patentOfHeading.style.backgroundColor = "pink";

// const body = patentOfHeading.parentNode;
// body.style.backgroundColor = "lightgreen";

const body = document.body;
const div = body.querySelector("div");
console.log(body.children);
