{
  // generic Constraint Using Key Of

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  //  bike | car | ship
  type Owner = bike | car | ship;
  type Owner1 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. Parsin",
    age: 26,
    address: "ctg",
  };
  const car = {
    name: "Mr. Parsin",
    age: 26,
    address: "ctg",
  };
  const result1 = getPropertyValue(user, "name");

  //
}
