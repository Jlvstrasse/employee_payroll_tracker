// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];
let employeeInfo = true;

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  while (employeeInfo) {
    const inputFirstName = prompt("Enter your employees first name.")
      var firstChar = inputFirstName.slice(0, 1);
      var upperCaseChar = firstChar.toUpperCase();
      var restOfName = inputFirstName.slice(1, inputFirstName.length);
      restOfName = restOfName.toLowerCase();
      var capitalizedFirstName = upperCaseChar + restOfName;

    const inputLastName = prompt("Enter your employees last name.")
      var firstChar = inputLastName.slice(0, 1);
      var upperCaseChar = firstChar.toUpperCase();
      var restOfName = inputLastName.slice(1, inputLastName.length);
      restOfName = restOfName.toLowerCase();
      var capitalizedLastName = upperCaseChar + restOfName;

    const inputSalary = parseInt(prompt("Enter your employees salary."))

    employeesArray.push ({
      firstName: capitalizedFirstName,
      lastName: capitalizedLastName,
      salary: inputSalary

    })

    employeeInfo = confirm('Add another employee?')
  }
  return employeesArray
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
// TODO: Calculate and display the average salary  
  let total = 0;
  
  for (let i = 0; i < employeesArray.length; i++) {
    total += employeesArray[i].salary;
  }

  const averageSalary = total / employeesArray.length;
  
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is ${averageSalary.toFixed(2)}`);
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  const randomEmployee = employeesArray[randomIndex];

  console.log('Congratulations ' + randomEmployee.firstName + ' ' + randomEmployee.lastName + '!')
}




/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);