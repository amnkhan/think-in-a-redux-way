// select elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// state
let counter = 0;

// increment function
const increment = () => {
  counter = counter + 1;
  counterEl.textContent = counter.toString();
};

// decrement function
const decrement = () => {
  counter = counter - 1;
  counterEl.textContent = counter.toString();
};

// add event listeners
incrementEl.addEventListener("click", increment);
decrementEl.addEventListener("click", decrement);
