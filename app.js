// const text = document.querySelector('.title');
// // const changeColor = document.querySelector('.changeColor');
// // text.style.toUpperCasre() = 'red';
// // text.classList.add('change');

// changeColor.addEventListener('click', function() {
//     text.classList.toggle('change')
// })

const ulName = document.querySelector(".ulName");
const inputText = document.querySelector(".inputText");
const changeColor = document.querySelector(".changeColor");

// changeColor.addEventListener("click", function () {
//   const newLi = document.createElement("LI");
//   const liContent = document.createTextNode(inputText.value);

//   newLi.appendChild(liContent);
//   ulName.appendChild(newLi);
// });

var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click", () => {
  console.log("clicked Div");
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("clicked button");
});
