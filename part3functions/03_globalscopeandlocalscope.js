// var c=200;
// let a=300;
// if (true){
//     let a=10;
//     const b=20;
//     console.log("Inner",a);
    
// }
// console.log(a);
// console.log(b);   ///b is not defined b sirf if ke andar hee defined hai block scope hai globally toh a ko kiya hai declare//

//////////////nested scope///////
function one(){
    const username="sid";

    function two(){
        const website="youtube";
        console.log(username);    
    }
    // console.log(website);  
    two();   
}
// one();
///chote bache jo hai vo bado se icecream maang sakte hai//  yaha pe bada one() hai uske saare variable ka access two() ke andar
// ///hoga//   leking two ke jo bhi variables hai vo two ke function ke bahar nhi honge..lekin one ke variable uske bahar use honge

if (true){
    const username="sid";
    if(username==="sid"){
        const website=" youtube";
        console.log(username+website);  //sab commnet kiya abb ye print ho jayega//
        
    }
    // console.log(website);   ///ye access nhi hoga ye sirf if andar hee hoga access//    
}
// console.log(username);   ///ye bhi access nhi hoga pura if ke bahar hai

/////++++++++++++++++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++
function addone(num){
    return num+1
}
addone(5);

const addTwo=function(num){    ///js mein ase bhi function ko likha ja sakta hai variable name ke andar//
    return num+2;
}
addTwo(5);

////ye koi error nhi dega proper chalega///
// addone(5);
// function addone(num){
//     return num+1
// }


///ye error dega becoz function ko hamne variable ke andar store kiya hai aur usko pehle declare kar rahe hai without initialization
// addTwo(5);
// const addTwo=function(num){    ///js mein ase bhi function ko likha ja sakta hai variable name ke andar//
//     return num+2;
// }




