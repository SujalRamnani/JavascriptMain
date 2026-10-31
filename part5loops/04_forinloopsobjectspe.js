let obj={
    js:"javascript",
    cpp:"C++",
    py:"python",
    rb:"ruby",
}
//object ke liye for in loop//
for(let key in obj){
//    console.log(key); //saare keys print kardega
//    console.log(obj[key]); ///saare values print kardega
   
///dono ek saath key value pair
// console.log(`Shortcut for ${key} is ${obj[key]}`);   
}

///for in loop on arrays
let arr=[1,2,3,4,5];
for(let i in arr) {
    // console.log(i);   //ye dega keys
    // console.log(arr[i]); //ye dega values

    console.log(`Key is ${i} and corresponding value is ${arr[i]}`);   
}
///note)map pe ase for in loop nhi laga sakte maps are not iterable


