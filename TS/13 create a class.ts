//13.Create a class person with 2 data members with private specification 

class Person {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    fullName(): string {
      return this.firstName + ' ' + this.lastName;
    }
  }
  

const person = new Person("Dnyandip", "Jadhav");
console.log(person.fullName()); 
