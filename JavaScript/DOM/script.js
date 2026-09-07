// ----------------------------------------------------------------
// const element = document.getElementById("demo_id");

// console.log(element.innerHTML);

// // element.innerText = "HEY";
// element.innerHTML = "<b><u>Hey</u></b>";

// // background-color

// const changeToRed = () => {
//     element.style.backgroundColor = "red";
// }

// ----------------------------------------------------------------

const elements = document.getElementsByClassName("demo");

console.log(elements[2]);

console.log(elements[2].innerText);

elements[2].innerText = "Changed";
elements[2].style.color = "green";

for (let i = 0; i < elements.length; i++){
    elements[i].innerHTML = "<b>Text changed</b>";
    elements[i].style.color = "gray"
    elements[i].style.fontSize = "40px";
}

// ---------------------------------------------------------------------------

// document.getElementsByTagName(); // operations same as getElementsByClassName

// document.querySelector(); // only one element
// document.querySelectorAll(); // collection of elements


const elem_1 = document.querySelector(".demo");

console.log(elem_1); // operations same as getElementById()

// -----------------

const elem_2 = document.querySelectorAll(".demo");

console.log(elem_2); // operations same as getElementByClassName();

// -----------------

// class list

// const body = document.body;

const addDark = () => {
    document.body.classList.add("dark");
}

const removeDark = () => {
    document.body.classList.remove("dark");
}

const toggleDark = () => {
    // document.body.classList.toggle("dark");
    elements[0].classList.toggle("dark");
}

// ---------------------------------------------------------------

// create elements

// createElement

