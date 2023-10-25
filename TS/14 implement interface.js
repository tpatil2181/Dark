//14.Implement interface
//class Person that Implements Interface
var NewPerson = /** @class */ (function () {
    function NewPerson(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    NewPerson.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return NewPerson;
}());
var person1 = new NewPerson("Dnyandip", "Jadhav");
console.log(person1.getFullName());
// Output: Dnyandip Jadhav
