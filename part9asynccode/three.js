const sayDate=function(str){
    console.log(str,Date.now());
    
}

// setInterval(sayDate,1000,"Hi")
const intervalId=setInterval(sayDate,1000,"hi");
clearInterval(intervalId)