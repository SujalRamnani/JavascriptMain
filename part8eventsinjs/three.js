//set interval method//
//ye ek baar start hoga toh continue hi rahega//
const sayDate = function(str){
        console.log(str, Date.now());
    }

    // const intervalId = setInterval(sayDate, 1000) //set interval ko bhi andar ek call back matlab reference chahiye//

    const intervalId = setInterval(sayDate, 1000,"hi") //set interval ko bhi andar ek call back matlab reference chahiye aur 
    //isme hum parameter bhi pass kar sakte hai jaise string hi bheja na//

    clearInterval(intervalId) //clearinterval ko bhi uske andar koi parameter chahiye ke kisko stop karna hai//