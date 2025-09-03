// Travel Planner

//  Part 1: Variables & Conditionals
let userName = prompt("Welcome, Explorer! What's your name?");
let hour = new Date().getHours();
let greetingMessage = "";

if (hour < 12) {
  greetingMessage = "Good morning, Explorer " + userName + "!";
} else if (hour < 18) {
  greetingMessage = "Good afternoon, Explorer " + userName + "!";
} else {
  greetingMessage = "Good evening, Explorer " + userName + "!";
}

document.getElementById("greeting").textContent = greetingMessage;

//  Part 2: Functions
function calculateTripCost(days, dailyBudget) {
  return days * dailyBudget;
}

function showTripCost() {
  let days = 5; 
  let dailyBudget = 5000; 
  let totalCost = calculateTripCost(days, dailyBudget);

  document.getElementById("trip-cost").textContent =
    "🧾 Estimated cost for " + days + " days: Ksh. " + totalCost;
}

// Part 3: Loops
function listDestinations() {
  let destinations = ["Paris", "New York", "Tokyo", "Nairobi", "Sydney"];
  let destinationList = document.getElementById("destination-list");
  destinationList.innerHTML = ""; 
  for (let i = 0; i < destinations.length; i++) {
    let li = document.createElement("li");
    li.textContent = "✈️ " + destinations[i];
    destinationList.appendChild(li);
  }
}

//  Part 4: DOM Manipulation
let toggleBtn = document.getElementById("toggle-btn");
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "🌙 Switch to Day Mode"
    : "🌞 Switch to Night Mode";
});

// Extra DOM interaction: change heading when clicked
document.getElementById("main-title").addEventListener("click", function () {
  this.textContent = "✈️ Travel Adventures Await!";
});

// Extra DOM interaction: add new message dynamically
let newParagraph = document.createElement("p");
newParagraph.textContent = "Plan your dream trip with us 🧳!";
document.body.appendChild(newParagraph);
