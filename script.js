var expression = "";
var output = ""; // Removed duplicate declaration

const numOp = document.querySelectorAll(
  ".keys:not(:nth-child(15n),:nth-child(14n))"
);
const screen = document.getElementById("screen");
const evaluateBtn = document.getElementById("evaluate"); // Renamed to evaluateBtn
const clear = document.getElementById("clear");

const handleKey = (e) => {
  const dataVal = e.target.getAttribute("data-val");
  expression += dataVal;
  screen.textContent = expression;
};

evaluateBtn.addEventListener("click", () => {
  try {
    var result = eval(expression);
    screen.textContent = result;
  } catch {
    screen.textContent = "ERROR"; // Update the screen with an error message
  }
  expression = "";
});

clear.addEventListener("click", () => {
  expression = ""; // Clear the expression
  screen.textContent = "0"; // Clear the screen
});

numOp.forEach((item) => {
  item.addEventListener("click", handleKey);
});
const keys = document.querySelectorAll(".keys");

keys.forEach((item) => {
  item.addEventListener("mousedown", () => {
    // Add the 'clicked' class on mouse down to apply the box shadow
    item.classList.add("clicked");
  });

  item.addEventListener("mouseup", () => {
    // Remove the 'clicked' class on mouse up to remove the box shadow
    item.classList.remove("clicked");
  });
});
