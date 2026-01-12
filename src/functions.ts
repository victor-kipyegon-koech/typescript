export const functons=()=>{
// console.log("----functions---")

// function functionName(arg1:dataType,arg2 :dataType){
//     return Value;
// }
// arrow function
const addNumbers=(num1:number,num2:number)=>{
    return num1+num2
}
console.log(addNumbers(40,50))
const addNumbe=(num1:number,num2:number)=>num1+num2
console.log(addNumbers(50,20))
   // default parameters
   function multiply(a:number,b:number=10){
       return a+b;
   }
console.log(multiply(20,30))
         // rest parameter
         function sum(numbers:number[]){
            return numbers.reduce((add,number)=>add+number,0)
         }
         console.log(sum([1,7,8,5,5,45,8]))
         // callback function
           function processInput(name:string,callback:(data:string)=>void){
            let greeting =`hello ${name}`
            callback(greeting);
           }
           processInput("victor",(message)=> console.log(message))
          function fetchData(callback:(data:string)=>void){
          console.log("fetching data from a server")
          setTimeout(() => {
            callback("data fetch successfully")
          }, 5000);
          }
          fetchData((data)=>console.log(data))

    }