function myName(){
    console.log("S");
    console.log("I");
    console.log("D"); 
}
// myName();
// myName();


// function addTwoNo(no1,no2){
//     return no1+no2;
// }
// console.log(addTwoNo(3,2));


// function addTwoNumbers(no1,no2){
//     console.log(no1+no2);
    
// }

function addTwoNumbers(no1,no2){
    let result=no1+no2;
    return result;
}

const result=addTwoNumbers(3,4);
console.log(result);



function loginUserMessage(username){
    return `${username} just logged in`;
}
console.log(loginUserMessage("sid"));



// function loginUserMessage(username){
//     if (username===undefined){
//         console.log("Please enter a username");
//         return;
        
//     }
//     return `${username} just logged in`;
// }
// console.log(loginUserMessage()); ///jab yaha pe koi value hee pass nhi ke tab ayega undefined///  undefined just logged in//






