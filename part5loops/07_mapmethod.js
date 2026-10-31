const arr=[1,2,3,4,5,6,7,8,9,10];
// const ans=arr.map((val)=>{
//     return val+10;
// })
// console.log(ans);  //ye bhi ek naya array banake dega har value mein 10 jodd dega//




///chaining methods

const ans=arr.map((no)=>no*10)
            .map((no)=>no+1)
            .filter((no)=>no>=40)
console.log(ans);
