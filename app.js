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

function operateOneNumber(num1, num2, operate) {
  return operate(num1, num2);
}

function add(a, b) {
  return a + b;
}

function multuply(a, b) {
  return a * b;
}

let sum = operateOneNumber(2, 3, add);
console.log(sum);

let product = operateOneNumber(2, 3, multuply);
console.log(product);

// Loops
// for loop
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}

//while loop

let count = 4;
while (count > 0) {
  console.log(count);
  count--;
}

// do while loop

let j = 10;

do {
  console.log(j);
  j--;
} while (j > 3);

// for in loop
let person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

console.log("\nfor...in loop:");
for (let key in person) {
  console.log(key + ": " + person[key]);
}

//for each loop

let fruits = ["apple", "banana", "melon"];

fruits.forEach((fruit, index) => {
  console.log(index + 1, fruit);
});
