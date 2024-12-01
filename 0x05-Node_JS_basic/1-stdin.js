const readline = require('readline');

// Create the readline interface for interactive mode
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdin.isTTY ? process.stdout : null,
});

if (process.stdin.isTTY) {
  // Interactive mode
  r1.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
    r1.close();
  });
} else {
  // Piped input mode
  process.stdin.on('data', (data) => {
    const name = data.toString().trim(); // Handles piped input
    console.log('Welcome to Holberton School, what is your name?');
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
    process.exit(0); // Exit process
  });
}

r1.on('close', () => {
  if (process.stdin.isTTY) {
  } else {
    console.log('This important software is now closing');
  }
});
