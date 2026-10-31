const user={
    username:"sid",
    price:1000,
    
    //welcome message ek function hona chaiye
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);   ///current context ko refer karna hai toh this keyword use karenge//  
        console.log(this);  //this current values ke baat karta hai
         
    }
}
// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage(); //sam welcome to website// yaha humne hard code nhi kiya jo current context mein value hogi vo print karigi idhar sam hai value

// console.log(this);   ///ye print karega {} empty current context empty object hai//    browser ke andar run karoge toh dega window object


// function chai(){
//     let username="sid";
//     console.log(this.username);   ///undefined print hoga//   //ye sirf object ke andar hee kaam karega//
    
// }
// chai();

///asa bhi function ko declare kar sakte hai
// const chai=function(){
//         let username="sid";
//     console.log(this.username);   ///undefined print hoga//   //ye sirf object ke andar hee kaam karega//
    
// }
//  chai();


//arrow function///
const chai=()=>{        //function keyword ko hata dijiye aur parenthesis ke baad => arrow laga dijiye
    let username="sid";
    // console.log(this.username);  ///undefined print hoga//   //ye sirf object ke andar hee kaam karega//
    // console.log(this);  ////{} ye print hoga empty parenthesis  
}
//chai();


const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(3,4));

/////implicit return
// const addTwo=(num1,num2) => num1+num2;   //return keyword likhne ke jarurat nhi hai//
// const addTwo=(num1,num2) => (num1+num2);   //ye bhi return karega bracket ke andar likh lo//
//parenthsis ke andar rap kiya toh return likhna padega

///object return karna hai
// const addTwo=(num1,num2) =>({username:"sid"})    //object ko {} parenthisis ke andar daalna hee padega //






