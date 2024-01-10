function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee};
    updatedEmployee[key] = value;
  
    return updatedEmployee;
  }
  const employee = { name: 'Sam' };
  console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'));
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');
  console.log(updatedEmployee);

 function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key]

    return newEmployee;
 }
  const newEmployee = deleteFromEmployeeByKey(employee, 'Sam');

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }