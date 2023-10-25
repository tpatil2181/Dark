//7. Create an interface called myInterface, with the property myProp as a
//string:

interface myInterface {
    myProp: string;
}

const obj1: myInterface = {
    myProp: "Hello, World!",
};
  
const obj2: myInterface = {
    myProp: "TypeScript is awesome!",
};
  
console.log(obj1.myProp); 
console.log(obj2.myProp); 
  
