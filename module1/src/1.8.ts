{
  // object destructuring

  const user = {
    id: 123,
    name: {
      firstName: "John",
      middleName: "Wick",
      lastName: "Persian",
    },
    contactNo: "01010101",
    address: "Ugands",
  };
  const {
    address,
    name: { middleName },
  } = user;
}

// array destructuring

const myFriends = ["as", "as2", "as3", "as4", "as5"];

const [, , bestFriends, ...rest] = myFriends;
