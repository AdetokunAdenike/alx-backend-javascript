const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the data into lines and filter out any empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Ensure there's data beyond the header
    if (lines.length <= 1) {
      throw new Error('No student data found in the database');
    }

    // Extract the headers and student data
    const students = lines.slice(1).map((line) => line.split(','));

    console.log(`Number of students: ${students.length}`);

    // Group students by their field
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

    // Log the student counts and names per field
    for (const [field, names] of Object.entries(fieldCounts)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  } catch (err) {
    // Handle file errors
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
