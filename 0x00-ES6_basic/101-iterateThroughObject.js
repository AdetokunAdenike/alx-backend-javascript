export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = []; // Array to hold the employee names
  
  // Iterate through the iterator to collect names
  for (const employee of reportWithIterator) {
    employeeNames.push(employee); // Push each employee name into the array
  }
  
  // Join the names with ' | ' and return the result
  return employeeNames.join(' | ');
}
