const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (process.stdin.isTTY) {
  r1.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
    r1.close();
  });

  r1.on('close', () => {
  });
} else {
  let inputBuffer = '';

  console.log('Welcome to Holberton School, what is your name?');

  process.stdin.on('data', (data) => {
    inputBuffer += data.toString();
  });

  process.stdin.on('end', () => {
    const name = inputBuffer.trim();
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
    process.exit(0);
  });
}
