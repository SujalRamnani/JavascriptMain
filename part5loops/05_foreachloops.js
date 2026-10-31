
///for each loop on arrays
// let arr=["js","cpp","java","python"];
// arr.forEach(function (val){
//     console.log(val); 
// });


// let arr=["js","cpp","java","python"];
// arr.forEach((val)=>{
//     console.log(val); 
// });

let arr=["js","cpp","java","python"];
// function printMe(item){
//     console.log(item);
    
// }
// arr.forEach(printMe);

// arr.forEach((item,index,arr)=>{
// console.log(item,index,arr);

// });


const myCoding=[   //ek array ke andar bohot saaare objects declare karte hai
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
    languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{    //item matlab pure object ka access hai 
  console.log(item.languageFileName);
  console.log(item.languageName);
  
})