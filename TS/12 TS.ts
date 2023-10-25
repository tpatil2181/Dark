//12.Create a function with 2 parameters (myVar1 and myVar2,in that order),
//that are both strings.Specify that myVar2 should be optional:


function concatenateStrings(myVar1: string, myVar2?: string): string {
    if (myVar2) {
      return myVar1 + myVar2;
    } else {
      return myVar1;
    }
  }

  const result1: string = concatenateStrings("Hello, ");
console.log(result1); // Output: Hello,

const result2: string = concatenateStrings("Hello, ", "World!");
console.log(result2); // Output: Hello, World!
