{
  //
  // utility types = Dome Useful types

  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //Partial
  type OptionPerson = Partial<Person>;

  // Required
  type RequiredPerson = Required<Person>;

  // Readonly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Mr. XY",
    age: 200,
    contactNo: "017",
  };
  person1.name = "Mr. X";

  // Record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  const emptyObj: Record<string, unknown> = {};

  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };
  //
}
