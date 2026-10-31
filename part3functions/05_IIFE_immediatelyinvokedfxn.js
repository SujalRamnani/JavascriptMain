////Immediately Invoked Function Expressions (IIFE)
//()() yehi hai iife 
//()()  () iske andar function likh doo///
 
//named IIFE
(function chai(){
    console.log("DB connected");
    
})();

///ye function turant execute hoga without call ke
///there is a problem with global scope pollution so to remove that we use IIFE


///unnamed IIFE
(()=>{
    console.log("DB connected TWO"); 
})();


///parameter pass karna hai IIFE ke andar//
((name)=>{
    console.log(`DB connected TWO ${name}`); 
})('sid');
