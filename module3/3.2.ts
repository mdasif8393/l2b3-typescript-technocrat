{
  //
  // Inheritance In OOP
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: string, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours} hours`);
    }
  }

  const person1 = new Person("Abul", 21, "Khulna");

  class Teacher extends Person {
    designation: string;
    constructor(
      name: string,
      age: string,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClass(numOfClasses: number) {
      console.log(`${this.name} will take ${numOfClasses} classes`);
    }
  }

  const teacher1 = new Teacher("Asif", 12, "Dhaka", "Professor");

  teacher1.takeClass(3);
  //
}
