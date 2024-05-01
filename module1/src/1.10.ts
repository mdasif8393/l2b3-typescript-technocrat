{
  // union types
  // type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  // type FullStackDeveloper = "FrontendDeveloper" | "expertDeveloper";
  // type Developer = FrontendDeveloper | FullStackDeveloper;
  // const newDeveloper : FrontendDeveloper = "fakibazDeveloper"
  // type User = {
  //     name : string,
  //     email?: string,
  //     gender : "male" | "female",
  //     bloodGroup: "A+" | "B+", | "B-",
  // }
  // const user1: User = {
  //     name: "Asif",
  //     gender: "male",
  //     bloodGroup: "A+",
  // }

  // interfaction

  type FrontEndDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type BackEndDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["Html", "Css"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
