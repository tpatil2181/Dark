//5. Create object types car with optional properties

type Car = {
    name: string;
    model: string;
    year?: number; // Optional property
    color?: string; // Optional property
  };

  const car1: Car = {
    name: "Cruiser",
    model: "Camry",
    year: 2020,     //with optional properties
    color: "Blue",
  };
  
  const car2: Car = {
    name: "Honda city",
    model: "Civic", //with optional properties
  };
  
  console.log(car1);
  console.log(car2);
  