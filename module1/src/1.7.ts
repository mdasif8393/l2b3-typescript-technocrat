{
  // spread operator
  const bros1: string[] = ["Mir", "firoz", "Mizan"];
  const bros2: string[] = ["Mir2", "firoz3", "Mizan4"];

  bros1.push(...bros2);

  const mentors1 = {
    typeScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Mezba1",
    next: "Mir2",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // rest operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend) => console.log(friend));
  };

  greetFriends("a", "b", "c", "d", "e", "f", "g");
}
