// function calculateCartPrice(...num1){ ////... rest operator//sara item abhi khule mein hai isko ek bundle mein pack karo aur return karo.array mileaga
//     return num1;
// }//... ka matlab sabko bunddle mein pack karo aur return karo..array mein dega
// console.log(calculateCartPrice(200,400,1,1000));  ///[ 200, 400, 1, 1000 ]


// function calculateCartPrice(val1,val2,...num1){ ////... rest operator//sara item abhi khule mein hai isko ek bundle mein pack karo aur return karo.array mileaga
//     return num1;
// }
// console.log(calculateCartPrice(200,400,1,1000));  ///val1=200,val2=400 baaki num1 mein 1,1000//  print hoga [ 1, 1000 ]


///function ke andar object///
function handleObject(user){
    console.log(`Username is ${user.username} and price is ${user.price}`);   
}
const user={
    username:"sid",
    price:200,
}


// handleObject(user);
handleObject({    //direct object bhi pass kar sakte hai//   //upar jaise alag se user object banaya uski jarurat nhi hai///
    username:"sid",
    price:199,
})


//////function ke andar array///
const arr=[1,2,3,4,5,6];
function returnSecondValue(arr){
    return arr[1];     ////idhar reutrn mein arr[value] mat likhna apne pass getArray naam se aya hai apne ko wahi dyaan mein rakhna hai
}
console.log(returnSecondValue(arr));



