{
  //
  let anything: any;
  anything = "Next Level Web Developer";
  anything = 3333;
  anything as number;



  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("2000") as string;


  type CustomError = {
    message: string
  }

  try{

  }
  catch((error as CustomError).message){

  }
  //
}
