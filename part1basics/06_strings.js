const name="sid";
const repoCount=50;

// console.log(name+repoCount+" value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//use this back ticks syntax to print anything//


const gameName=new String("SidFc"); //ek aur tarika hai string ko define karne ka//
console.log(gameName);
console.log(typeof gameName); //iska type object hoga// key value pair milega//

console.log(gameName[0]);

console.log(gameName.__proto__); //{} object milgya//

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString=gameName.substring(0,4); //0 se 3 tak hee lega//
console.log(newString);

const anotherString=gameName.slice(-5,2); //-ve matlab (length-(negno))//
console.log(anotherString);

const newStringOne="   sid    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://sid.com/sid%20hello";
console.log(url.replace("%20","-"));  //.replace(oldword,newword)//

console.log(gameName.split('-'));