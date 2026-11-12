// --- PART 1: Time-based Greeting ---

// 1. Ask for the user's name
let userName = prompt("Please enter your name:");

// 2. Get the current hour (0 - 23)
let currentHour = new Date().getHours();

// 3. Determine the greeting based on the hour
if (currentHour < 12) {
    console.log(`Good morning, ${userName}!`);
} else if (currentHour < 18) {
    console.log(`Good afternoon, ${userName}!`);
} else {
    console.log(`Good evening, ${userName}!`);
}


// --- PART 2: Age and Days Lived Verification ---

// 4. Ask for the user's birth year
let birthYear = prompt("Please enter your birth year (e.g., 2005):");

// Convert the input string into a number
birthYear = Number(birthYear);

// 5. Calculate the user's age (using 2026 as the current year)
let age = 2026 - birthYear;

// 6. Calculate approximate days lived
let daysLived = age * 365;
console.log(`You have lived for approximately ${daysLived} days!`);

// 7. Check if the user is an adult or a minor
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// --- PART 3: Week 11 DOM & Dynamic Event Handling ---

// 1. Pinpoint the dark mode button element in the DOM using its ID[span_1](start_span)[span_1](end_span)
const themeButton = document.querySelector('#theme-toggle');

// 2. Deploy an event listener ('security guard') to detect clicks[span_2](start_span)[span_2](end_span)
themeButton.addEventListener('click', () => {
    // 3. Toggle the 'dark-mode' class on the body element[span_3](start_span)[span_3](end_span)
    document.body.classList.toggle('dark-mode');
});
