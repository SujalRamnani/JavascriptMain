const myArr=[0,1,2,3,4,5];
const myHeros=["shaktiman","maaggraj"];

const myArr2=new Array(1,2,3); ///another method to declare array///
// console.log(myArr[1]);


//array methods///
myArr.push(6);
myArr.push(7);
myArr.pop() //removes last value//

myArr.unshift(9); //9 add karega start pe//
myArr.shift(); //9 remove karega start pe//

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr=myArr.join();  //string mein convert hojayega sara values aur join bhi hoga//

console.log(myArr);
console.log(typeof newArr); //string mein convert hojayega sara values//


//slice,splice//
console.log("A ",myArr);

const myn1=myArr.slice(1,3); //1 se start karo aur 2 tak//  //3 is not included//
console.log(myn1);
console.log("B ",myArr);


const myn2=myArr.splice(1,3);   //.splice(startingindx,removingcount,addelements//)
console.log("C ",myArr);
console.log(myn2);







