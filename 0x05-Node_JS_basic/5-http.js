const http = require('http');
const fs = require('fs');

const SERVER_PORT = 1245;
const SERVER_HOST = 'localhost';
const serverApp = http.createServer();
const DATABASE_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the total number of students in a CSV data file.
 * @param {String} filePath The path to the CSV file containing student data.
 * @author ADETOKUN ADENIKE <https://github.com/adenikeade>
 */
const countTotalStudents = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Unable to load the database.'));
  }
  if (filePath) {
    fs.readFile(filePath, (error, content) => {
      if (error) {
        reject(new Error('Unable to load the database.'));
      }
      if (content) {
        const reportSections = [];
        const fileLines = content.toString('utf-8').trim().split('\n');
        const studentCategories = {};
        const headerFields = fileLines[0].split(',');
        const studentAttributes = headerFields.slice(0, headerFields.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentDetails = line.split(',');
          const studentValues = studentDetails.slice(0, studentDetails.length - 1);
          const category = studentDetails[studentDetails.length - 1];
          if (!Object.keys(studentCategories).includes(category)) {
            studentCategories[category] = [];
          }
          const studentInfo = studentAttributes.map((attr, index) => [
            attr,
            studentValues[index],
          ]);
          studentCategories[category].push(Object.fromEntries(studentInfo));
        }

        const totalCount = Object.values(studentCategories).reduce(
          (previous, current) => (previous || []).length + current.length,
        );
        reportSections.push(`Total students: ${totalCount}`);
        for (const [category, group] of Object.entries(studentCategories)) {
          reportSections.push([
            `Number of students in ${category}: ${group.length}.`,
            'Names:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportSections.join('\n'));
      }
    });
  }
});

const ROUTE_HANDLERS = [
  {
    path: '/',
    handler(_, res) {
      const greetingMessage = 'Welcome to the Student Database!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', greetingMessage.length);
      res.statusCode = 200;
      res.write(Buffer.from(greetingMessage));
    },
  },
  {
    path: '/students',
    handler(_, res) {
      const responseParts = ['List of students enrolled:'];

      countTotalStudents(DATABASE_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseContent = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseContent.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseContent));
        })
        .catch((error) => {
          responseParts.push(error instanceof Error ? error.message : error.toString());
          const responseContent = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseContent.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseContent));
        });
    },
  },
];

serverApp.on('request', (req, res) => {
  for (const routeHandler of ROUTE_HANDLERS) {
    if (routeHandler.path === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

serverApp.listen(SERVER_PORT, SERVER_HOST, () => {
  process.stdout.write(`Server is live at -> http://${SERVER_HOST}:${SERVER_PORT}\n`);
});

module.exports = serverApp;
