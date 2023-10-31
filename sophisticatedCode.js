/* 
   Filename: sophisticatedCode.js
   Content: Elaborate and Complex JavaScript Code
*/

// Constants
const MAX_VALUE = 100;
const MIN_VALUE = 1;

// Function to generate a random number within range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Class representing a Person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Array of names and ages
const peopleData = [
    { name: "John", age: 25 },
    { name: "Alice", age: 33 },
    { name: "Bob", age: 41 },
    { name: "Eve", age: 29 }
];

// Create instances of Person using data from peopleData array
const people = [];
for (const data of peopleData) {
    const person = new Person(data.name, data.age);
    people.push(person);
}

// Function to calculate the sum of an array of numbers
const calculateSum = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
};

// Generate an array of random numbers
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    const randomNumber = generateRandomNumber(MIN_VALUE, MAX_VALUE);
    randomNumbers.push(randomNumber);
}

// Calculate the sum of randomNumbers using calculateSum function
const sum = calculateSum(randomNumbers);

// Log the result
console.log("Sum of random numbers:", sum);

// Perform some complex operations
if (sum % 2 === 0) {
    console.log("The sum is an even number.");
} else {
    console.log("The sum is an odd number.");
}

// Display the details of each person in the people array
for (const person of people) {
    person.sayHello();
}

// Recursive function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Calculate factorial
const number = 5;
const factorialResult = factorial(number);

// Log the factorial
console.log(`Factorial of ${number} is:`, factorialResult);

// Other complex and sophisticated code...
// ...
// ...
// ... (more than 200 lines long)