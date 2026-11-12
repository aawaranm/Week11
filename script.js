// --- PART 1: Time-based Greeting ---
let userName = "Aawaran Manandhar";
let currentHour = new Date().getHours();

if (currentHour < 12) {
    console.log(`Good morning, ${userName}!`);
} else if (currentHour < 18) {
    console.log(`Good afternoon, ${userName}!`);
} else {
    console.log(`Good evening, ${userName}!`);
}


// --- PART 2: Age and Days Lived Verification ---
let age = 20; // Age: 20 yrs
let daysLived = age * 365;
console.log(`You have lived for approximately ${daysLived} days!`);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// --- PART 3: Week 11 DOM & Dynamic Event Handling ---
const themeButton = document.querySelector('#theme-toggle');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
