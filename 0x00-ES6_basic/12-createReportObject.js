export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length; // Returns the number of keys (departments) in employeesList
    },
  };
}
