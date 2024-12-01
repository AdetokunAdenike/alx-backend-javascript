const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,  // Used for interactive mode
});

if (process.stdin.isTTY) {
  // Interactive mode (when input is from the user)
  r1.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
    r1.close();
  });
} else {
  // Piped input mode
  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.on('data', (data) => {
    const name = data.toString().trim(); // Handle piped input
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
    process.exit(0); // Explicitly exit after processing piped input
  });
  
  // Handle EOF (End Of File) for piped input or interactive mode when no input is provided.
  process.stdin.on('end', () => {
    console.log('This important software is now closing');
    process.exit(0);
  });
}

r1.on('close', () => {
  if (process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
