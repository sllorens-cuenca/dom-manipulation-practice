// By ID

const mainTitle = document.getElementById("main-title")

//console.log(mainTitle)

mainTitle.innerText = "Welcome to processTrusters commerce"

// By class name

const infoCollection = document.getElementsByClassName("info")

const infoElementsArr = [...infoCollection] // convert html collection to an array

console.log(infoCollection)

infoElementsArr.forEach(function (element) {
    //element.innerText = "THIS IS THE NEW CONTENT"
    element.style.color = "blue"
});


// By tag name

const allParagraphsCollections = document.getElementsByTagName("p")
console.log(allParagraphsCollections)

const allParagraphsCollectionsArray = [...allParagraphsCollections] // convert to an array

// By css selectors

// document.querySelector(".box") //only the first
// document.querySelectorAll(".box") //all with the .box

const first = document.querySelector("header h2")

first.style.color = "red"

const all = document.querySelectorAll("header h2")

all.forEach((element) => {
    element.style.color = "gray"
})



/// Context: document vs element

//const allParagraphsInProductsElm = document.querySelectorAll("products p")

const productsElm = document.getElementById("products")

const allParagraphsInProductsElm = productsElm.getElementsByTagName("p") //all p in productsElm



/// Properties

const pikachuElm = document.getElementById("pikachu")
//console.log(pikachuElm.innerHTML);

pikachuElm.innerHTML = "<p> THIS IS THE NEW CONTENT </p>"


//Read/modify text content

const linkElm = document.getElementById("my-link")
linkElm.innerText = "Aboutus -- we are";

//read/modify Css 
mainTitle.style.color = "blue"
mainTitle.style.margin = "20px"
mainTitle.style.backgroundColor = "yellow"
mainTitle.style.border = "2px solid green"

//read/modify the id --> elm.id
mainTitle.id = "this-is-the-new-id"

//read/modify the class --> elm.className
mainTitle.className = "title rounded"

// elm.classList

mainTitle.classList.remove("rounded")
mainTitle.classList.add("shadow")
mainTitle.classList.toggle("active")


// atributes

// get: elm.getAttribute(attributeName)
const result = linkElm.getAttribute("href")

//modify or create: elm.setAttribute(name, value)
linkElm.setAttribute("href", "https://ironhack.com")
linkElm.setAttribute("target", "_blank")

//remove elm.removeAttribute(attrName)


// Create a DOM node


//Step 1 create the element
const newImg = document.createElement("img")

//Step2 add content or modify
newImg.setAttribute("src", "./images/pikachu.jpg")
newImg.setAttribute("alt", "pikachu image")

//step 3 append to the dom: parentElm.appendChild()

const parentElm = document.getElementById("pikachu")
parentElm.appendChild(newImg)



//Events

/*
mouse events: click, mouseover
keyboard events: keydown, keypres, keyup
document: domContentLoad
...

elm.addEventListener(typeOfEvent, code)

*/


const btn = document.getElementById("button-1")

// btn.onclick = function () {
//     alert("hello world")
// }

btn.addEventListener("click", () => {
    console.log("user clicked")
})


//example 2 append a paragraph every time clicked


const btn2 = document.getElementById("button-2")

// function attachElements (htmlTagg){
//     const newParagraph = document.createElement(htmlTagg)

//     //Step2 add content or modify
//     newParagraph.innerText = "Hello World"

//     //step 3 append to the dom: parentElm.appendChild()

//     const parentElm = document.getElementById("box-2")
//     parentElm.appendChild(newParagraph)
// }
// btn2.addEventListener("click", attachElements("p"))

btn2.addEventListener("click", () => {
    const newParagraph = document.createElement("p")

    //Step2 add content or modify
    newParagraph.innerText = "Hello World"

    //step 3 append to the dom: parentElm.appendChild()

    const parentElm = document.getElementById("box-2")
    parentElm.appendChild(newParagraph)
})