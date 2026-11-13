// --- Week 10: Existing Greeting & Age Calculation ---
let userName = "Aawaran Manandhar";
let currentHour = new Date().getHours();

if (currentHour < 12) {
  console.log("Good morning, " + userName + "!");
} else if (currentHour < 18) {
  console.log("Good afternoon, " + userName + "!");
} else {
  console.log("Good evening, " + userName + "!");
}

let birthYear = 2006; // 20 years old in 2026
let age = 2026 - birthYear;
let daysLived = age * 365;

console.log("You have lived for approximately " + daysLived + " days!");

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// --- Week 11: Dark Mode Toggle ---
const themeBtn = document.querySelector("#theme-toggle") || document.querySelector(".theme-toggle");

if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    console.log("Dark mode toggled!");
  });
}
