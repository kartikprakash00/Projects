/*Creating Array of Employees (Array of objects)
And sorting them by name and salaries
*/

const employees = [{ name: 'Kartik', salary: 60000 },
{ name: 'Priyanka', salary: 69000 },
{ name: 'Amal', salary: 50000 },
{ name: 'Zaid', salary: 58000 },];

employees.sort((a, b) => a.name.localeCompare(b.name));

console.log("Employees sorted by name: ");
console.log(employees);

employees.sort((a, b) => a.salary - b.salary);

console.log("Employees sorted by salary: ");
console.log(employees);

/*Creating a New array of 10% added tax in the salaries*/

const newSalaries = employees.map(employee => ({
    name: employee.name,
    salary: employee.salary * 1.1,

}));

console.log("Original empolyee salaries: ");
console.log(employees);

console.log("Employee salaries with added 10% Tax");
console.log(newSalaries);
