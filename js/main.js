// By ID

const mainTitle = document.getElementById("main-title")

//console.log(mainTitle)

mainTitle.innerText = "Welcome to processTrusters commerce"

// By class name

const infoCollection = document.getElementsByClassName("info")

const infoElementsArr = [...infoCollection] // convert html collection to an array

console.log(infoCollection)

infoElementsArr.forEach( function(element) {
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