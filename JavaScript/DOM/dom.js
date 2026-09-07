const app = document.getElementById("app");
const heading = document.createElement("h1");

heading.innerText = "Hello World";

heading.style.color = "red";
heading.style.fontSize = "50px";
heading.style.backgroundColor = "gray"

app.appendChild(heading);

const dateTime = new Date();

console.log(dateTime.getMonth() + 1);
console.log(dateTime.getDay());
console.log(dateTime.getDate());
console.log(dateTime.getFullYear());

const selectTag = document.createElement("select");

for (let y = 1901; y <= dateTime.getFullYear(); y++){
    const optionTag = document.createElement("option");
    optionTag.innerText = y;
    optionTag.value = y;
    selectTag.appendChild(optionTag);
}

document.body.appendChild(selectTag);
