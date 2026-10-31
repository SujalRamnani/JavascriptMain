const score=400;
console.log(score);

const balance=new Number(100); //asa bhi no ko define kar sakte hai///
console.log(balance);  ////[Number: 100] output asa ayega//

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNo=23.8966;
console.log(otherNo.toPrecision(3)); //kitna precise value dena hai jaise 123 hai toh dega 1.12e3 asa //priority decimal se pehle ko mil rahe hai//
//jaise value hai 123.897 aur toPrecision(3) ka toh dega 124 decimal ke baad 8 hai vo round off hojayega///

const hundreds=10000;
console.log(hundreds.toLocaleString('en-IN')); //indian no system hai comma , hoga number ke bich//

//////***********************Maths********************************************/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.5)); //.5 se upar hoga toh ceil uppar wala else niche wala floor//
console.log(Math.min(4,5,6,7));
console.log(Math.max(4,5,6,7));

console.log(Math.random()); //value hamesha 0 aur 1 ke bich//
console.log((Math.random()*10)+1); //value hamesha 0 aur 1 ke bich usme 10 se multiply kiya aur 1 add kiya to avoid 0 case//
console.log((Math.floor(Math.random()*10)+1)); //value hamesha 0 aur 1 ke bich// math.floor ke saath wrap up kiya jaata hai///

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);












