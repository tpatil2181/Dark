//13.Create a class person with 2 data members with private specification 
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var person = new Person("Dnyandip", "Jadhav");
console.log(person.fullName());
