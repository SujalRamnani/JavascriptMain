const saySiddharth=function(){
    console.log("Siddharth");
    
}
const changeText=function (){
    document.querySelector('h1').innerHTML="best js series";
    
}
const changeMe=setTimeout(changeText,2000)

document.querySelector("#stop").addEventListener('click',function(){
console.log("Stop");
clearTimeout(changeMe)
})



