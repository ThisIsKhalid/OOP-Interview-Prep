// object
const person = {};

// adding properties
person.name = "Alice";
person.age = 30;

// accessing properties
console.log(person.name); // Alice
console.log(person["age"]); // 30

//! Class -----------
class Car {}

// creating an instance
const car1 = new Car();
const car2 = new Car();

// adding properties
car1.make = "Toyota";
car1.model = "Corolla";

car2.make = "Honda";
car2.model = "Civic";

// accessing properties
console.log(car1)
console.log(car2)


//! Class with attributes -----------
class Person {
    name = "khalid"
    email = "kh@gmail.com"
}

// creating an instance
const personInstance = new Person();
const personInstance2 = new Person();

// accessing attributes
console.log(personInstance.name); // khalid
console.log(personInstance.email); //
console.log(personInstance2.name); // khalid
console.log(personInstance2.email); //

//! Class with constructor -----------
class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }
}

// creating instances
const dog = new Animal("Dog", "Bark");
const cat = new Animal("Cat", "Meow");

// accessing attributes
console.log(dog.type); // Dog
console.log(dog.sound); // Bark
console.log(cat.type); // Cat
console.log(cat.sound); // Meow

// what is this keyword?
// 'this' refers to the current instance of the class

//! Class with methods -----------
class PersonWithMethods {
    constructor(name, age) {
        this.name = name; // instance attribute or property
        this.age = age; // instance attribute or property
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// creating an instance
const personWithMethods = new PersonWithMethods("Bob", 25);

// accessing attributes
console.log(personWithMethods.name); // Bob
console.log(personWithMethods.age); // 25

// calling methods
personWithMethods.greet(); // Hello, my name is Bob and I am 25 years old.
personWithMethods.print(); // Name: Bob, Age: 25


//! Class with Private Attributes -----------
// Note: Private fields are a part of modern JavaScript so for this we can do by _ or # (ES2022)
class Cow {
    constructor(name, age) {
        this._name = name; // private attribute
        this._age = age; // private attribute
    }

    getName() {
        return this._name;
    }

    getAge() {
        return this._age;
    }
}

// creating an instance
const cow = new Cow("Bessie", 5);

// accessing private attributes via methods
console.log(cow.getName()); // Bessie
console.log(cow.getAge()); // 5


//! Getters and Setters -----------
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // getter for area
    get area() {
        return this._width * this._height;
    }

    // setter for width
    set width(newWidth) {
        this._width = newWidth;
    }

    // setter for height
    set height(newHeight) {
        this._height = newHeight;
    }
}

// creating an instance
const rectangle = new Rectangle(10, 5);

// accessing area via getter
console.log(rectangle.area); // 50

// modifying width and height via setters
rectangle.width = 20;
rectangle.height = 10;

// accessing updated area via getter
console.log(rectangle.area); // 200


//! toString Method -----------
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    toString() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}

// creating an instance
const book = new Book("1984", "George Orwell");

// using toString method
console.log(book.toString()); // Title: 1984, Author: George Orwell
// why toString?
// It provides a string representation of the object, useful for debugging and logging.

//! Static Methods -----------
class MathUtils {
    pi = 3.14159;
    
    static add(a, b) {
        return a + b;
    }
}

// accessing static method without creating an instance
console.log(MathUtils.add(5, 10)); // 15

// creating an instance
const mathUtilsInstance = new MathUtils();

// accessing instance attribute
console.log(mathUtilsInstance.pi); // 3.14159