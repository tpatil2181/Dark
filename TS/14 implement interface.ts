//14.Implement interface

interface IPerson {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

//class Person that Implements Interface
class NewPerson implements IPerson {
    constructor(public firstName: string, public lastName: string) {}
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
const person1: IPerson = new NewPerson("Dnyandip", "Jadhav");

console.log(person1.getFullName()); 
// Output: Dnyandip Jadhav

  