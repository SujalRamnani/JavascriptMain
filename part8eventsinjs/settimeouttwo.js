 //settimeout function//
  // setTimeout(function(){
    //     console.log("Hello world");
    // },2000);  
 
 const sayHitesh = function(){
        console.log("Hitesh");
    }
    //   const changeMe = setTimeout(changeText, 2000);  //settimeout ke andar apan ek callback aur time dete hai//
    const changeText = function(){
        document.querySelector('h1').innerHTML = "best JS series"
    }
    const changeMe = setTimeout(changeText, 2000);  //settimeout ke andar apan ek callback aur time dete hai//

    document.querySelector('#stop').addEventListener('click', function(){
        clearTimeout(changeMe)//clear timeout ko chahiye reference ke kisko stop karna hai isliye humne changeMe dala hai//
        console.log("STOPPED")//event ko rokta hai//
    })