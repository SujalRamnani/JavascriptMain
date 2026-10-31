
//object literals

const mySymbol=Symbol("Key1"); //symbol declare kiya //  //usko as a key use(act) karna hai aur object mein add karo 

const JsUser={
    name:"sid",   //name jo key hai vo behind the scene ek string hai//
    age:20,
    "full name":"sid ramnani",
    [mySymbol]:"myKey1",  ///symbol ka syntax asa hota hai///  JsUser[mySymbol] ase hee access hoga symbol dot operator se nhi hota kabhi//
    location:"pune",
    email:"sid@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email); //accessing objects
console.log(JsUser["email"]);   //JsUser[email] ye error dega becoz email behind the scene ek string hai key//   so write JsUser["email"]
console.log(JsUser["full name"]); ///cannot access this with .dot //dot operator se nhi hoga access ye//



console.log(JsUser[mySymbol]); //symbol ase hee access hoga//  //dot operator se nhi hoga access//

JsUser.email="sujal@gmail.com";
// Object.freeze(JsUser) //koi changes nhi hoga abb// isko bolte hai object ko freeze karna///

///function js mein type 1 citizen hai usko variable ke tarah use kariye koi dikat nhi//
///object ke andar function toh daale
JsUser.greeting=function(){
    console.log("Hello Js user");
    
}
console.log(JsUser.greeting); //function anonymous ayega//   function execute nhi hua hai sirf function ka refrence aya hai//
console.log(JsUser.greeting()); //Hello Js user aur undefined ayega//

JsUser.greeting2=function(){
    console.log(`Hello JSuser,${this.name}`);///jo name hai usko refrence karna hai//   //same object ko refrence karna hai//
    
}

console.log(JsUser.greeting2);  ///[Function (anonymous)] ayega//
console.log(JsUser.greeting2()); ///Hello JSuser,sid








