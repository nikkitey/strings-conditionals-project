function runProject() {
  // Grab user input
  let firstName = document.getElementById("name").value;
  let favoriteDrink = document.getElementById("drink").value;
  let cups = parseInt(document.getElementById("cups").value);
  let size = document.getElementById("size").value;

  let output = document.getElementById("output");
  output.innerHTML = ""; // clear old results

  // Concatenated String Variable
  let orderSummary = "Hello, " + firstName + "! You ordered " + cups + " " + favoriteDrink + "(s).";
  output.innerHTML += orderSummary + "<br>";

  // If Conditional
  if (cups > 3) {
    output.innerHTML += "Wow, that's a lot of coffee! ☕<br>";
  } else {
    output.innerHTML += "Perfect choice! Just enough to keep you going. ✨<br>";
  }

  // Switch Statement
  switch (size) {
    case "small":
      output.innerHTML += "You picked a small size. A quick pick-me-up!<br>";
      break;
    case "medium":
      output.innerHTML += "Medium is the most popular choice.<br>";
      break;
    case "large":
      output.innerHTML += "Go big or go home! Large is bold.<br>";
      break;
    default:
      output.innerHTML += "That size isn’t available. Please choose small, medium, or large.<br>";
  }

  // String Method
  let message = "Enjoy your delicious " + favoriteDrink + "!";
  output.innerHTML += message.toUpperCase() + "<br>";

  // Number Method
  let pricePerCup = 3.5;
  let totalPrice = pricePerCup * cups;
  output.innerHTML += "Your total is $" + totalPrice.toFixed(2);
}

