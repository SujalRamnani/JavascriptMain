let startButton=document.querySelector("#start");
let stopButton=document.querySelector("#stop");

const startPrinting=()=>{
    console.log("Hello");
     
}
const stopPrinting=()=>{
    clearInterval(ans);
    console.log("Stopped");   
}


//    startButton.addEventListener('click',startPrinting); ye kiya toh ek hi baar hello print hoga intervals mein nhi hoga

startButton.addEventListener('click',()=>{
     ans = setInterval(startPrinting, 2000);
})

stopButton.addEventListener("click", stopPrinting);







