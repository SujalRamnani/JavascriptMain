//there are specific keywords in js which cannot be used in .txt file so js uses different environment//

const accountId=123456;
let accountEmail="sid@gmail.com";
var accountPassword="1234";
accountCity="Jaipur";
let accountState; //variable declare karke chod diyaa hai kuch rakha nhi toh undefined hai//

// accountId=2; //cannot change const key word not allowed in js//

accountEmail="sid1712@gmail.com";
accountPassword="2121";
accountCity="pune";
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]); //sabko eksath print karne ke liye tabular structure//


//prefer not to use var because of issue in block scope and functional scope//
