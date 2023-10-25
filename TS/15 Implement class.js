//15.Implement class
var myPerson = /** @class */ (function () {
    function myPerson(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    myPerson.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    myPerson.prototype.introduce = function () {
        console.log("Hello, I'm ".concat(this.getFullName(), "."));
    };
    return myPerson;
}());
// Create an instance of the Person class with different variable names
var individual = new myPerson("Dnyandip", "Jadhav");
// Access and use class methods and properties
console.log(individual.getFullName()); // Output: John Doe
individual.introduce(); // Output: Hello, I'm John Doe.
