// const tinderUser=new Object();   //singleton object///  lekin dono hee ek empty object hai
const tinderUser={}; ///non singleton object///   lekin dono hee ek empty object hai

tinderUser.id="123abc";
tinderUser.name="Sam";
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

///ek aur object declare karte hai//
const regularUser={
    email:"some@gmail.com",
    fullname:{ //fullname apne aap mein ek object hoga ///ek aur object//
        userFullName:{  //userfullname ye bhi ek object hoga///
            firstName:"sid",
            lastName:"ramnani"
        }
    }
}
// console.log(regularUser.fullname.userFullName);



//combining objects// jaise arrays ko combine kiya vaise hee objects bhi combine ho sakte hai
const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"a",
    4:"b"
}

// const obj3={obj1,obj2};
// //assign operator is used
// const obj3=Object.asssign({},obj1,obj2,obj4);

const obj3={...obj1,...obj2}; //spread operator used to combine objects//
console.log(obj3);


////jab database se value ayege tab ayege array of objects// //array ke andar bohot saare objects///
const users=[
    {
        id:1,
        email:"sid@gmail.com"
    },
    {
        
    },
    {

    }
]

users[1].email  //1st value ko access karna hai//
console.log(tinderUser);  //id hai,name hai aur isLoggedIn hai tinderuser ke andar


console.log(Object.keys(tinderUser));   //object ke saari keys dega//   //uska datatype hoga array// [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); ///object ke saare values dega// //uska datatype hoga array// [ '123abc', 'Sam', false ]
console.log(Object.entries(tinderUser)); ///key value pair ayega// //kam use karte hai// [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //isLogged naam se koi property hai ya nhi///











