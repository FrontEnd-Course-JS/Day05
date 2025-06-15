// //DOM => Document Object Model
// //HTML Page [index.html] is a document
// //HTML Page represent tree - every tag represent node
// //To hold this tag in JS you must hold it using DOM.
// //There are 5 ways to hold the element of HTML page in JS
// //document => represent the HTML Page.

// //01 - Document.getElementById(elementId: string): HTMLElement | null - Returns a reference to the first object with the specified value of the ID attribute.
// let elementById = document.getElementById("specialP");
// console.log(elementById);//<p id="specialP">Mohamed Khalifa</p>

// //02 - Document.getElementsByClassName(classNames: string): HTMLCollectionOf<Element> - Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.
// let elementByClassName = document.getElementsByClassName("boys");
// console.log(elementByClassName);//HTMLCollection(4) [p.boys, p.boys, p.boys, h2.boys]

// //03 - Document.getElementsByTagName<keyof HTMLElementTagNameMap>(qualifiedName: keyof HTMLElementTagNameMap): HTMLCollectionOf<HTMLElement | HTMLObjectElement | ... 60 more ... | HTMLVideoElement> (+4 overloads) - Retrieves a collection of objects based on the specified element name.
// let elementByTagName = document.getElementsByTagName("p");
// console.log(elementByTagName);//HTMLCollection(4) [p.boys, p.boys, p.boys, p#specialP, specialP: p#specialP]

// //But we don't work by those past approaches, we use another approaches to select/hold elements

// //We use => [QuerySelector]
// //01 - ParentNode.querySelector<Element>(selectors: string): Element | null (+4 overloads) - Returns the first element that is a descendant of node that matches selectors.
// let elementByQuerySelector = document.querySelector(".boys");//to select/hold "first" element with attribute class = "boys";
// console.log(elementByQuerySelector);//<p class="boys">Eslam Ashraf </p>

// //02 - ParentNode.querySelectorAll<Element>(selectors: string): NodeListOf<Element> (+4 overloads) - Returns all element descendants of node that match selectors.
// let elementByQuerySelectorAll = document.querySelectorAll(".boys");//to select/hold "all" elements with attribute class = "boys";
// console.log(elementByQuerySelectorAll);//NodeList(4) [p.boys, p.boys, p.boys, h2.boys]

// let specialP = document.querySelector("#specialP");
// console.log(specialP);//<p id="specialP">Mohamed Khalifa</p>

//========================================================================================

//Events -> حدث يعني لما أعمل حاجه او اضغط على حاجه حاجه تانيه تحصل

//// function getNumber(){
////     console.log(10);
////
//// }
//// getNumber();

// //01 - First hold the element that you need when make event on it [click,focus,or any event], specific task happen
// let dataBTN = document.querySelector("#dataBTN");
// //02 - addEventListener("EventType","Function||listener")
// dataBTN.addEventListener("click", () => {
//     console.log("Data is retrieved");
// });

// let submit = document.querySelector("#submit");
// submit.addEventListener("click",(e)=>{//e => represent the event data parameter
//     e.preventDefault();//prevent refresh the html page after click on submit button
// })

//Ex-> when click on button change the paragraph background color
let loremP = document.querySelector("#loremP");
let gray_BTN = document.querySelector("#gray_BTN");
let red_BTN = document.querySelector("#red_BTN");
let blue_BTN = document.querySelector("#blue_BTN");
let black_BTN = document.querySelector("#black_BTN");
let input01 = document.querySelector("#input01");
let input02 = document.querySelector("#input02");
gray_BTN.addEventListener("click",()=>{
    loremP.style.backgroundColor= "gray";
    loremP.style.color="white";
});
red_BTN.addEventListener("click",()=>{
    loremP.style.backgroundColor= "red";
    loremP.style.color="white";
});
blue_BTN.addEventListener("click",()=>{
    loremP.style.backgroundColor= "blue";
    loremP.style.color="white";
});
black_BTN.addEventListener("click",()=>{
    loremP.style.backgroundColor= "black";
    loremP.style.color="white";
});
input01.addEventListener("focus",()=>{
    loremP.style.color = "blue"; 
})
input01.addEventListener("blur",()=>{
    loremP.style.color = "orange"; 
})
input01.addEventListener("keypress",()=>{
    loremP.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"; 
})
input02.addEventListener("keyup",()=>{
    loremP.style.fontStyle = "italic"; 
})
