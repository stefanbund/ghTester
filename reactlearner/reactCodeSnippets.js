//arrow function use, just uncomment each section to see the example work, ES6
//1 -------------------------------------------------
// const lordify = function(firstName) {
//   return `${firstName} of Canterbury`;
// };//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// console.log(lordify("Dale")); // Dale of Canterbury
// console.log(lordify("Gail")); // Gail of Canterbury

//2 -----------------------------------------------
// const lordify = firstName => `${firstName} of Canterbury`;
// console.log(lordify("Dale")); // Dale of Canterbury
// console.log(lordify("Gail")); // Gail of Canterbury
//
//3 -----------------------------------------------
// const lordify = (firstName, land) => {
//   if (!firstName) {
//     throw new Error("A firstName is required to lordify");
//   }

//   if (!land) {
//     throw new Error("A lord must have a land");
//   }

//   return `${firstName} of ${land}`;
// };

// console.log(lordify("Kelly", "Sonoma")); // Kelly of Sonoma
// console.log(lordify("Dave")); // ! JAVASCRIPT ERROR

// 4 destructuring objects -----------------------------------------------
// const sandwich = {
//   bread: "dutch crunch",
//   meat: "tuna",
//   cheese: "swiss",
//   toppings: ["lettuce", "tomato", "mustard"]
// };//object 

// const { bread, meat } = sandwich; //destructuring

// //console.log(bread, meat); // dutch crunch tuna
// console.log(sandwich);
// 5 -----------------------------------------------
// const sandwich = {
//   bread: "dutch crunch",
//   meat: "tuna",
//   cheese: "swiss",
//   toppings: ["lettuce", "tomato", "mustard"]
// };
// let { bread, meat } = sandwich;

// bread = "garlic";
// meat = "turkey";

// console.log(bread); // garlic
// console.log(meat); // turkey

// console.log(sandwich.bread, sandwich.meat); // dutch crunch tuna

// 6 -----------------------------------------------
// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3]; //array, or set of values

// console.log(2  * sum(...numbers)); //spread operator, alternative to a for loop
// expected output: 6

//console.log(sum.apply(null, numbers));
//expected output: 6
//from MDN, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
