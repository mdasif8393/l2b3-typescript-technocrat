// {
//   type CustomError = {
//     message: string;
//   };

//   try{

//   }
//   catch(error as CustomError).message{

//   }
// }

// const kgToGm = (value: number | string) : number | string | undefined =>{
//     if(typeof value === "string"){
//         const convertedValue = parseFloat(value) * 1000000;
//         return value
//     }
//     if(typeof value === "number"){
//         const convertedValue = value * 1000;
//         return value;
//     }
// }

// const result1 = kgToGm(10000) as number;
// const result2 = kgToGm("10000") as string;
