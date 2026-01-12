export const arrays=()=>{
    // ARRAYS
    let evenNumbers:number[]=[2,4,6,8,10]
    let hobbies:string[]=["coding","swimming"]
    console.log("--Typescript Arrays--")
    console.log("hobbies before pushing new hobby",hobbies)
    hobbies.push("reading")
    console.log("hobbies after pushing new hobby",hobbies)
    hobbies.pop();

// shift and unshift
hobbies.shift();
// console.log(hobbies);
hobbies.unshift("cooking");
console.log(hobbies);

// tuples
    let myCar:[string,number]=['mazda',2022]
    console.log(myCar);
    myCar[0]="toyota"

    let employee:[string,number,string?]=["victor", 23,"kenya"]
}