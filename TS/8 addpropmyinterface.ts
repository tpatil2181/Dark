//8. Extend the myInterface interface from last exercise, and add a property
//myExtProp as a number:

interface myInterface {
    myProp: string;
  }
  
  interface ExtendedInterface extends myInterface {
    myExtProp: number;
  }


  const obj: ExtendedInterface = {
    myProp: "Hello",
    myExtProp: 100,
  };
  
  console.log(obj.myProp);    
  console.log(obj.myExtProp); 
  
  