///destructuring objects//

const course={
    coursename:"JS in hindi",
    price:999,
    courseInstructor:"sid"

}
// course.courseInstructor    //kabhi bhi apko innvalues ko use karna hai toh kaise use karoge course.courseInsstructor dot operator se//

//baar baar print karna ho courseInstructor toh ase karo
const {courseInstructor}=course;   ///const {kya value extract karni hai}=kaha se lena hai konse object se//
console.log(courseInstructor);  //{} kabhi bhi asa {} curly brace dekha matlab destructing ke ja rahe hai//

const {courseInstructor:instructor}=course;  ///const {kya value extract karni hai:uska dusra koi naam alterante}=kaha se lena hai konse object se/
console.log(instructor);



///json  object hee hai iska koi name nhi hai bs
// {
//    "name":"sid",
//     "coursename":"js in hindi",
//     "price":800
// }

//api in form of array//
[
    {},
    {},
    {}
]

