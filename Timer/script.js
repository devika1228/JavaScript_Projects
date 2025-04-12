// Create a new Date object for the target date and time
const targetDate = new Date('YYYY-MM-DDTHH:MM:SS'); // Set your target

// Function to update the countdown timer
function updateCountdown() {
   // Get the current date and time
   const currentTime = new Date();
   // Calculate the difference in milliseconds between the target date and the current time
   const difference = targetDate - currentTime;

   // Calculate the number of days remaining
   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
   // Calculate the number of hours remaining (excluding full days)
   const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   // Calculate the number of minutes remaining (excluding full hours)
   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
   // Calculate the number of seconds remaining (excluding full minutes)
   const seconds = Math.floor((difference % (1000 * 60)) / 1000);

   // Update the DOM element with the ID "days" to display the remaining days
   document.getElementById("days").innerText = days;
   // Update the DOM element with the ID "hours" to display the remaining hours
   document.getElementById("hours").innerText = hours;
   // Update the DOM element with the ID "minutes" to display the remaining minutes
   document.getElementById("minutes").innerText = minutes;
   // Update the DOM element with the ID "seconds" to display the remaining seconds
   document.getElementById("seconds").innerText = seconds;

   // Check if the countdown has reached or passed the target date
   if (difference < 0) {
         // Stop the interval timer
         clearInterval(interval);
         // Update the DOM element with the ID "timer" to indicate the event has started
         document.getElementById("timer").innerText = "The event has started!";
   }
}

// Set an interval to call the updateCountdown function every second
const interval = setInterval(updateCountdown, 1000);
