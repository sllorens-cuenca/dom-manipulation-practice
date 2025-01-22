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