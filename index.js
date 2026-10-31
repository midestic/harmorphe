// ARRAY OF OBJECTS

// Array of objects is simply an array that contains multiple objects as its Elements.
// Each object can have multiple key and value pairs.
// This is a common way to represent structured Data, like a collection of people, products, or items with various attributes

let fruit = [
  { name: "banana", color: "yellow", price: "500" },
  { name: "Orange", color: "green", price: "200" },
  { name: "Mango", color: "lemon", price: "600" },
  { name: "Apple", color: "green", price: "1000" },
];

// Iteration : Iterating over our Array of objects
// You can iterate over an array of object using loops like for Each(), map()  etc.

// fruit[0].name;

// 1 : for Each()

// fruit.forEach((item) => {
//   console.log(item.name);
//   console.log(item.color);
//   console.log(item.price);
// });

// 2 : map()
// fruit.forEach((item) => {
//   console.log(item.name);
//   console.log(item.color);
//   console.log(item.price);
// });

// filter() : it helps to filter out an element based on what we want

let greenFruits = fruit.filter((item) => {
  return item.color === "green";
});

console.log(greenFruits);
