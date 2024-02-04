// Create variables and assign values
let pizzaPlace = "Really Cool Pizza Place";
let numberOfToppings = 10;

// print variables and types
console.log(pizzaPlace + " " + typeof pizzaPlace);
console.log(numberOfToppings + " " + typeof numberOfToppings);

//template literal for both variables display sentence about Really Cool Pizza Place
console.log(
  `Welcome to ${pizzaPlace}! We currently have ${numberOfToppings} toppings to pick from`
);

// if statement for quality no quantify if < than 10, a whole lot of pizza >= 10
if (numberOfToppings >= 10) {
  console.log("A whole lot of pizza");
} else {
  console.log("Quality, not quantity");
}

// loop to print all even numbers from 1 to numberOfTopings
let x = 1;
while (x <= numberOfToppings) {
  if (x % 2 == 0) {
    console.log(x);
  }
  x++;
}
