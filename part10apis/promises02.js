//promise create kiya
const promiseOne = new Promise(function(resolve, reject){ //promise ke andar ek callback function hota hai uska ek part hai resolve ek hai reject 
    //Do an async task=> DB calls, cryptography, network
    
    setTimeout(function(){   //settimeout ke andar ek function call back aur timer hota hai//
        console.log('Async task is compelete');
        resolve();  ///connect karta hai .then aur resolve ko
    }, 1000)
})
//promise consume kiya//
promiseOne.then(function(){  //.then ka connection hai resolve ke saath//
    console.log("Promise consumed");
})
 
//variable mein store kare bina//
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})//resolve ke andar jo bhi parameter pass karoge vo mil jayega niche .then mein
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user); //resolve ke andar ka parameter idhar mil jayega//
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        // let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


  promiseFour.then((user) => {
    console.log(user);
    return user.username;  //pura object aya but return sirf username hua// asa nhi hoga error dega//
}).then((username) => {   //upar se username idhar aya//
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
 
//promise ko consume karne ke liye async aur await bhi use kar sakte hai naaki sirf .then aur .catch use karna hai
//async matlab thodi der wait karta hai kaam ke complete hone ka fir aage badhta hai//
async function consumePromiseFive(){
    try {  //async await ko hamesha try catch block mein hi dalo..vo error ko handle nhi kar payega//
        const response = await promiseFive  //promise ek object hai usko ase hi consume karte hai//
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary') //promise milegi
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro
