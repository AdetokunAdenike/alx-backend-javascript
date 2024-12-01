const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,  // This only affects interactive mode
});

if (process.stdin.isTTY) {
  // Interactive mode (when input is from the user)
  r1.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
    r1.close();  // Closes the readline interface
  });

  // Do not print the closing message for interactive mode.
  r1.on('close', () => {
    // Just finish without the closing message for interactive mode
  });

} else {
  // Piped input mode (handled differently)
  let inputBuffer = '';

  // Do not print the input directly from stdin
  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.on('data', (data) => {
    inputBuffer += data.toString();
  });

  process.stdin.on('end', () => {
    const name = inputBuffer.trim();  // Handle piped input
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
    process.exit(0);  // Explicitly exit after processing piped input
  });
}
