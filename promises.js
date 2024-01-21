const promiseOne = new Promise(function(resolve, reject){
    //asynnc task
    //db calls, cryptography,network
    setTimeout(() => {
        console.log('Asyn task is complete')
        resolve()
    }, 1000);
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(
        function () {
            resolve()
            console.log("Async task 2")
        }
    , 1000)
}).then(function(){
    console.log("Asyn 2 resolved")
})

const threePromise = new Promise(function(resolve,reject){
    setTimeout(
        function(){
            resolve({username:"Chai",email:"chai@example.com"})
        }
    ,1000)
})

threePromise.then(
    function(user){
        console.log(user);
    }
)


const promisefour = new Promise(function(resolve,reject){
    setTimeout(
        function(){
            let error = true
            if (!error){
                resolve({username:"Ramesh",email:"chai@example.com"})
            }
            else{
                reject('ERROR:something went worng')
            }
        }
    ,1000)
})

promisefour.then(
    function(user){
        console.log(user);
        return user.username
    }
).then((username) => {
    console.log(username)
}).catch((err)=>{
    console.log(err)
}).finally(()=> console.log("the promise either resolved or rejected"))

// console.log(username)


const fivepromise = new Promise(function(resolve,reject){
    setTimeout(
        function(){
            let error = true
            if (!error){
                resolve({username:"Ramesh",email:"chai@example.com"})
            }
            else{
                reject('ERROR:something went worng')
            }
        }
    ,1000)
})

async function consumePrmoiseFive(){
    try {
        const response = await fivepromise
        console.log(response)
    }
    catch(err){
        console.log(err)
    }
    
}

consumePrmoiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users") 
//         // console.log(typeof response)
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("ERRor",error)
//     }
    
// }

// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users") 
.then((res)=> {
    return res.json()})
.then((data)=> console.log(data) )
.catch((error)=> console.log("E:::::",error))