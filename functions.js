// Function declaration: starts with "function"
function sum(a, b) {
  return a + b;
}
sum(5, 6);

// Function expression: starts with "const"
const isNull = function (value) {
  return value == null;
};

// Arrow function with 1 argument. The parentesis around the argument (number, in this case) can be ommited.
const sayHi = (name) => {
  return "hi " + name;
};

// Arrow function with 2 argument. If there's more than 1 argument in ANY kind of function, parenthesis are needed
const anotherSum = (a, b) => {
  return a + b;
};

// for callbacks go to array methods in scripts.js
