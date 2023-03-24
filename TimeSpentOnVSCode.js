let startTime = 0; // Initialize start time to zero
let endTime = 0; // Initialize end time to zero
let totalTime = 0; // Initialize total time to zero

// Function to start the timer
function startTimer() {
  startTime = new Date().getTime();
}

// Function to stop the timer and calculate the total time
function stopTimer() {
  endTime = new Date().getTime();
  totalTime += endTime - startTime;
}

// Function to format the total time in hours, minutes, and seconds
function formatTime(totalTime) {
  let hours = Math.floor(totalTime / 3600000);
  let minutes = Math.floor((totalTime % 3600000) / 60000);
  let seconds = Math.floor(((totalTime % 3600000) % 60000) / 1000);

  return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Log the total time spent on VS Code
process.on('beforeExit', function () {
  console.log(`Total time spent on VS Code: ${formatTime(totalTime)}`);
});

// Start the timer when the script is run
startTimer();

// Listen for process events
process.on('SIGINT', stopTimer);