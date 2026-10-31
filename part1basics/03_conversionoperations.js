let score="33";

console.log(typeof score);
console.log(typeof (score));  ///string hoga iska type//

 //string ko number mein convert kiya//
let valueInNumber=Number(score);
console.log(typeof valueInNumber);

console.log(valueInNumber);
//score="33abc" hoga toh NaN ayega//  //33abc number mein convert hojayega but print karoge to NaN ayega//                       
//score= 33 hoga toh value convert hojayega//

//score=null hota toh 0 ata

//score=undefined hota toh NaN ayega

//score=true hota toh 1 ayega false hoga toh 0//

//score="sid" hoga toh NaN ayega//  //string hai no mein convert nhi hoga isliye NaN ayega///


let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//1 ko boolean mein convert=>boolean mein true     //0 ko boolean mein convert=>boolean mein false
//"" emptystring ko boolean mein convert=>emptystring ko boolean mein false
//"sid"=>string ko boolean mein true


let someNo=33;
let stringNumber=String(someNo);
console.log(stringNumber);
console.log(typeof stringNumber);    ///number string mein bann gya hai///






