// Question - 1 //

console.log(Number("212"));
console.log(Number("2121"));
console.log(Number("hello world"));

// Question - 2 // 

try{
    let json = '{"name":"Sudhakar", "age": 26}';
    let getPerson = JSON.parse(json);

    if(!getPerson.name){
        throw new Error("Invalid parameter type");
    }
    console.log(getPerson.name);
    console.log(getPerson.age);
}catch(error){
    console.log(error);
}

// question -3 //

class Car {
    constructor(year, company, model) {
        this.year = year;
        this.company = company;
        this.model = model;
    }
    getDescription () {
        console.log(`This is a ${this.year} ${this.company} ${this.model}`);
    }
}
const car = new Car("2022", "Suzuki", "wagonr");
car.getDescription();

// Question - 4 //

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}
const employee = new Employee("Sudhakar", "SiteEngineer", "27000");
console.log(employee.salary);

// Question - 5 //

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails () {
        console.log(`"Name: ${this.name}, Age: ${this.age}"`);
    }
}

const person1 = new Person("Mohini", 23);
const person2 = new Person();
person1.getDetails();
person2.getDetails();

// Question - 6 //

class calculator {
    static add(a, b) {
        return a + b;
    }
}
console.log(calculator.add(1, 2));

// Question - 8 //

function Student(name) {
    this.name = name;
}

Student.prototype.printDetails = function() {
    console.log(`"Hello, the student is ${this.name}"`);
}
const student = new Student("Sudhakar");
student.printDetails();

// Question - 9 //

function secretPassword() {
    const arr = [1, 2, 3, 4, 5];
    return {
        guessPassword: function(guess) {
            if (guess === arr) {
                return true;
            } else {
                return false;
            }
        }
    }
}

const passwordGame = secretPassword();
console.log(passwordGame.guessPassword(2));
console.log(passwordGame.guessPassword(7));

// Question - 10 //


var products = [
    { name: "Shirt", category: "Clothing", price: 1000 },
    { name: "Pants", category: " Clothing", price: 1200 },
    { name: "Hat", category: "Accesssories", price: 1300 },
    { name: "Sunglasse", category: "Accessories", price: 900},
];

console.table(
    products.filter(product => product.price > 1000)
);