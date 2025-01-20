const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} filePath The path to the CSV data file.
 * @returns {Promise} A promise that resolves with the student count or rejects if there's an error.
 * @author Adenike Adetokun
 */
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter((line) => line.length > 0);
      // const headers = lines.shift().split(','); // Unused, so we can comment or remove this line

      const studentsByField = {};
      const allStudents = [];

      lines.forEach((line) => {
        const student = line.split(',');
        const [firstname, , , field] = student;

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
        allStudents.push(firstname);
      });

      const totalStudents = allStudents.length;
      let output = `Number of students: ${totalStudents}\n`;

      for (const [field, students] of Object.entries(studentsByField)) {
        output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      resolve(output.trim()); // Trim to remove any trailing newlines
    });
  });
}

module.exports = countStudents;
