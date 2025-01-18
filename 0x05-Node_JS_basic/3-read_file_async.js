const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        resolve('No student data found in the database');
        return;
      }

      const students = lines.slice(1).map((line) => line.split(','));
      console.log(`Number of students: ${students.length}`);

      const fieldCounts = {};
      students.forEach((student) => {
        const field = student[3]; // Field column
        const firstName = student[0]; // Firstname column

        if (field) {
          if (!fieldCounts[field]) {
            fieldCounts[field] = [];
          }
          fieldCounts[field].push(firstName);
        }
      });

      for (const [field, names] of Object.entries(fieldCounts)) {
        console.log(
          `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
        );
      }

      resolve();
    });
  });
}

module.exports = countStudents;
