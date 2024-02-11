// Pizza object
const pizza = {
  size: "null",
  crust: "null",
  toppings: []
};

const pizzaOrder = [];

// create array of pizza toppings with at lest 4 options
const pizzaToppings = [
  "mushrooms",
  "black olives",
  "pepperoni",
  "bacon",
  "tomatoes"
];

// listToppings function to display the toppings
function listToppings() {
  for (let toppings in pizzaToppings) {
    if (pizzaToppings[toppings] == pizzaToppings[pizzaToppings.length - 1]) {
      pizzaToppings[toppings] = " and " + pizzaToppings[toppings];
    } else if (pizzaToppings[toppings] !== pizzaToppings[0]) {
      pizzaToppings[toppings] = " " + pizzaToppings[toppings];
    }
  }
  return pizzaToppings;
}

// create greatCustomer function thatprints message to welcome guest and informs them of toppings
function greatCustomer() {
  console.log(
    `Welcome to the pizza place! Our toppings include: ${listToppings()}`
  );
}

// create getPizzaOrder function that has the parameters size, crust, and indefinate amount of toppings
function getPizzaOrder(size, crust, ...toppings) {
  pizzaOrder.push(size, crust);
  const functionArray = [];
  if (toppings.length == 0) {
    console.log(`One ${size} ${crust} crust cheese pizza coming your way!`);
  } else if (toppings.length == 1) {
    for (let top in toppings) {
      functionArray[top] = toppings[top];
      pizzaOrder.push(toppings[top]);
      console.log(
        `One ${size} ${crust} crust pizza with ${functionArray} coming up!`
      );
    }
  } else if (toppings.length > 1) {
    for (let top in toppings) {
      if (toppings[top] == toppings[toppings.length - 1]) {
        functionArray[top] = " and " + toppings[top];
        pizzaOrder.push(toppings[top]);
      } else if (toppings[top] !== toppings[0]) {
        functionArray[top] = " " + toppings[top];
        pizzaOrder.push(toppings[top]);
      } else {
        functionArray[top] = toppings[top];
        pizzaOrder.push(toppings[top]);
      }
    }
    console.log(
      `One ${size} ${crust} crust pizza with ${functionArray} coming up!`
    );
  }
  return pizzaOrder;
}

// create preparePizza function that has parameter of size, crust, list of toppings
// prints something like ... Cooking Pizza... and outputs pizza object with appropriate key-value pairs

function preparePizza(pizzaArray) {
  console.log("Preparing your pizza");
  for (let x = 0; x < pizzaArray.length; x++) {
    if (x == 0) {
      pizza.size = pizzaArray[x];
    } else if (x == 1) {
      pizza.crust = pizzaArray[x];
    } else {
      pizza.toppings.push(pizzaArray[x]);
    }
  }
  return pizza;
}

// create servePizza function parameters of pizza object, logs message that pizza is ready and repeats the order, outputs same object passed in
function servePizza(pizza) {
  const functionArray = [];
  if (pizza.toppings.length == 0) {
    functionArray.push("cheese");
  } else if (pizza.toppings.length == 1) {
    for (let top in pizza.toppings) {
      functionArray[top] = pizza.toppings[top];
    }
  } else if (pizza.toppings.length > 1) {
    for (let top in pizza.toppings) {
      if (pizza.toppings[top] == pizza.toppings[pizza.toppings.length - 1]) {
        functionArray[top] = " and " + pizza.toppings[top];
      } else if (pizza.toppings[top] !== pizza.toppings[0]) {
        functionArray[top] = " " + pizza.toppings[top];
      } else {
        functionArray[top] = pizza.toppings[top];
      }
    }
  }
  console.log(
    `Your order of a ${pizza.size} ${pizza.crust} crust with ${functionArray} is ready`
  );
  return pizza;
}

// call each function in order and used returned value from previous as next input
greatCustomer();
getPizzaOrder("medium", "thick", "mushrooms");
console.log();
preparePizza(pizzaOrder);
console.log();
servePizza(pizza);
