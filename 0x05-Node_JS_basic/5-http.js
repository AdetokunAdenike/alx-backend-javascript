const http = require('http');
const fs = require('fs');

const PORT = 1245;
const app = http.createServer();
const databasePath = process.argv[2]; // Get the database path from command line arguments

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      lines.shift(); // Skip the header line
      const fields = {};

      lines.forEach((line) => {
        if (line.trim()) {
          const [firstName, , , field] = line.split(','); // Only use `firstName` and `field`
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        }
      });

      const totalStudents = lines.length;
      const result = [`Number of students: ${totalStudents}`];
      Object.entries(fields).forEach(([field, students]) => {
        result.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      });

      resolve(result.join('\n'));
    });
  });
}

app.on('request', async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      const studentData = await countStudents(databasePath);
      res.end(studentData);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(PORT, 'localhost', () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
