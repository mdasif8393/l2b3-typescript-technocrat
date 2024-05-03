{
    // 2-2: Interface, Type Vs Interface

    type User1 = {
        name: string;
        age: number;
    };

    interface User2 {
        name: string;
        age: number;
    };

    type UserWithRole = User1 & {
        role: string;
    }

    interface UserWithRole2 extends User2{
        role: string;
    }

    const user3 : UserWithRole = {
        name: "Asif",
        age 23,
        role: "Searching"
    };

    const user2 : User2 = {
        name: "Asif",
        age 23
    };



    // array interface
    type Roll = number[];
    const rollNumber1: Roll = [1, 3];


    interface Roll2 {
        [index: number] : number
    }
    const rollNumber2: Roll2 = [1,2,3]


    // interface funtion

    type Add1 = (num1: number, num2: number) => number;
    const add1: Add1 = (num1, num2) => num1 + num2;

    interface Add2 {
        (num1: number, num2: number) : number
    }
    const add2: Add2 = (num1, num2) => num1 + num2;

}