export const asycronous=()=>{
    // const myPromise =new promise<string>(resolve,reject)=>{
    //     setTimeout(() => {
    //         resolve("promise resolved")
    //     });
    //     myPromise:then(value=> {
    //         console.log(value)
    //     })
    //     .catch(reason =>{
    //         console.error(reason)
    //     })
    // }
      //asyc and await
    //   async function fetchData(){
    //     return "Data Fetched"
    //   }
    //   console.log(fetchData())

    // async function fetchUser(id:number):Promise<string>{
    //     return new Promise((resolve,reject) =>{
    //         setTimeout(() => {
    //             if(id===1){
    //                 resolve("victor koech")
    //             }else{
    //                 reject("User was not found")
    //             }
    //         } ,3000);
    //     })
    // }
    // async function getUserData(id:number):Promise<void>{
    //   try {
    //    const User= await fetchUser(id);
    //    console.log(User)

    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // getUserData(1);
    const fetchAPI=async(id:number) :Promise<void>=>{
        try {
            const URL=`https://jsonplaceholder.typicode.com/users/${id}`
 
            const response = await fetch(URL)
            const data=await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    fetchAPI(1);
}