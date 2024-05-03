{
  // 2-3: Introduction To Generics

  type GenericArray<T> = Array<T>;

  const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];
  const mentors: GenericArray<string> = ["a", "b", "c", "d", "e"];
  const boolArray: GenericArray<boolean> = [true, false, false];
}

Interface User {
  name: string;
  age: number;
};

const user: GenericArray<User> = [
  {
    name: "John",
    age: 22,
  },
];

// Generic Tuple

type GenericTuple<X, Y> = [X, Y];

const manush: GenericTuple<string, string> = ["a", "s"];
