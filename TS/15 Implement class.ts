//15.Implement class

class myPerson {
    private firstName: string;
    private lastName: string;
  
    constructor(first: string, last: string) {
      this.firstName = first;
      this.lastName = last;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  
    introduce(): void {
      console.log(`Hello, I'm ${this.getFullName()}.`);
    }
  }
  
  // Create an instance of the Person class with different variable names
  const individual = new myPerson("Dnyandip", "Jadhav");
  
  // Access and use class methods and properties
  console.log(individual.getFullName()); // Output: John Doe
  individual.introduce(); // Output: Hello, I'm John Doe.
  