export default function createIteratorObject(report) {
  // Create a generator function
  function* employeeIterator() {
    // Iterate through each department in allEmployees
    for (const employees of Object.values(report.allEmployees)) {
      // Iterate through each employee in the department
      for (const employee of employees) {
        yield employee; // Yield each employee
      }
    }
  }

  // Return the generator as an iterator
  return employeeIterator();
}
