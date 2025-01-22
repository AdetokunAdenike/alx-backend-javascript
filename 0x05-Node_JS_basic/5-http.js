const http = require('http');
const fs = require('fs');

const SERVER_PORT = 1245;
const DATABASE_FILE = process.argv[2] || '';

/**
 * Count the total number of students in a CSV file.
 * @param {String} filePath The path to the CSV file.
 * @returns {Promise<String>} The formatted report as a string.
 */
const countTotalStudents = (filePath) => new Promise((resolve, reject) => {
  if (!filePath || !fs.existsSync(filePath)) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length < 2) {
      resolve('No students in the database');
      return;
    }

    const header = lines[0].split(',');
    const students = lines.slice(1).map((line) => line.split(','));
    const studentGroups = {};

    students.forEach((student) => {
      const field = student[header.length - 1];
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      studentGroups[field].push(student[0]);
    });

    const totalStudents = students.length;
    let result = `Number of students: ${totalStudents}`;
    for (const [field, names] of Object.entries(studentGroups)) {
      result += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }

    resolve(result);
  });
});

/**
 * HTTP Server request handler.
 */
const serverApp = http.createServer((req, res) => {
  if (req.url === '/') {
    const message = 'Hello ALX!';
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(message);
  } else if (req.url === '/students') {
    countTotalStudents(DATABASE_FILE)
      .then((report) => {
        const message = `This is the list of our students\n${report}`;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(message);
      })
      .catch((err) => {
        const errorMessage = `This is the list of our students\n${err.message}`;
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(errorMessage);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

serverApp.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});

module.exports = serverApp;
