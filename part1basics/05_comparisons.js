// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


console.log("2">1); //automatic js ne 2 ko convert kardiya no mein//
console.log("02">1);//same idhar bhi vaisa hee //


console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true


console.log(undefined==0);//false
console.log(undefined>0); //false
console.log(undefined<0); //false


console.log("2"===2); //false//   //=== compares value as well as datatype//



///stack (sare primitive datatype) uses stack memory//   //jabhi changes karenge tab copy hee milega//
//stack memory primitive datatypes pe hee ///ek mein change matlab original mein change nhi hoga
let originalId="sid@gmail.com";
let anotherId=originalId;
anotherId="sujal@gmail.com";
console.log(originalId);
console.log(anotherId);    ////anotherId mein change kiya fir bhi originalId as it is hee raaha usme change nhi hua yehi hai stack memory///

//heap memory(sare non primitive datatypes) uses heap memory//  //jabhi changes karenge toh original mein change hoga dono ko same hee refrence milta hai heap ke andar// //aray,object//
///ye objects,array,functions unn sabmein lagega heap memory
let student={
    name:"tom",
    id:"tom@gmail.com",
};

let student2=student;
console.log(student2);  ///same like student hee sab print hua///

student2.id="jerry@gmail.com";
 console.log(student2); //'jerry@gmail.com'// ///student2 mein change kiya fir bhi student bhi change hua//
console.log(student);//'jerry@gmail.com'// ///student2 mein change kiya fir bhi student bhi change hua//






