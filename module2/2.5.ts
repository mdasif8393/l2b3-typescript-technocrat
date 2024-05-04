// {
//   // Function With Generics

//   const createArray = (param: string): string[] => {
//     return [param];
//   };

//   const createArrayWithGeneric = <T>(param: T): T[] => {
//     return [param];
//   };

//   const res1 = createArray("Bangladesh");
//   const resGeneric = createArrayWithGeneric<string>("Bangladesh");

//   type User = { id: number; name: string };

//   const resGenericObj = createArrayWithGeneric<User>({
//     id: 222,
//     name: "Mr. Pashan",
//   });

//   const createArrayWithTuple = <T, Q>(param: T, param2: Q): [T, Q] => {
//     return [param1, param2];
//   };

//   const res10 = createArrayWithTuple<string, number>("Bangladesh", 222);
//   const resGeneric11 = createArrayWithGeneric<string, object>("Bangladesh", {
//     name: "Asia",
//   });

//   type User = { id: number; name: string };

//   const resGenericObj = createArrayWithGeneric<User>({
//     id: 222,
//     name: "Mr. Pashan",
//   });

//   const addCourseToStudent = <T>(student: T) => {
//     const course = "Next Level Web Development";

//     return {
//       ...student,
//       course,
//     };
//   };

//   const student1 = addCourseToStudent({
//     name: "Mr. X",
//     email: "x@gmail.com",
//     devType: "NLWD",
//   });
//   const student1 = addCourseToStudent({
//     name: "Mr. Y",
//     email: "y@gmail.com",
//     hasWatch: "Apple",
//   });
// }
