// let myDate=new Date(); //date ko object jaise declare kiya//
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
///ye upar ke 3 methods tostring,todatestring,tolocalestring saare methods date ko kisse na kisse alag format mein deta hai///
console.log(typeof myDate); //date ka typeof hota hai object//  //upar humne object mein hee create kiya n date ko//


///new date declare karne hai koi specific date///
// let myCreatedDate=new Date(2023,0,23);
// let myCreatedDate=new Date(2023,0,23,5,3);
// let myCreatedDate=new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);   //ye milliseconds mein dega bohot badi value
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));  //ye seconds mein dega//

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1); //ye month dega//
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})












