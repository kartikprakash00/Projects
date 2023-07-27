/*Q1. Create an Array of salaries. 
Do the sum of salaries greater than 10000.*/
const salaries = [15000, 12000, 8000, 25000, 9500, 5000, 35000];
const sum = salaries.reduce((add, currentValue) => {
    if (currentValue > 10000) {
        return add + currentValue;
    }
    else {
        return add;
    }
}, 0)
console.log("Sum of Salaries greater than 10000: ", sum);

//Q2. Get max salary from the Array.
const maxSalary = salaries.reduce((max, currentValue) => {
    if (currentValue > max) {
        return currentValue;
    }
    else {
        return max;
    }
}, salaries[0]);
console.log("Maximum Salary is: ", maxSalary);

//Q3. Count the salaries greater than 10000.
const countSalaries = salaries.reduce((count, currentValue) => {
    if (currentValue > 10000) {
        return count + 1;
    }
    else {
        return count;
    }
}, 0);
console.log("Number of salaries greater than 10000: ", countSalaries);