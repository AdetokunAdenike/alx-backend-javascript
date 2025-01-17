console.log('Welcome to ALX, what is your name?');

process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.toString().trim()}`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

// Ensure the program ends in piped input scenarios
if (!process.stdin.isTTY) {
  process.stdin.resume(); // Start reading the piped input
}
