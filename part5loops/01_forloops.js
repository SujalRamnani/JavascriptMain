///for loop print 1 to 10 nos
// for(let i=1;i<=10;i++) console.log(i);



// for(let i=1;i<=10;i++){
//     if (i==5) console.log("5 is the best number");
//     console.log(i);  
// }

// for(let i=0;i<=10;i++){
//     console.log(`Outer loop value: ${i}`);
//     for(let j=0;j<=10;j++){
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//         console.log(i+'*'+j+'='+i*j);
        
//     } 
// }


////for loop on array
// let arr=["flash","batman","superman"];
// console.log(arr.length);

// for(let i=0;i<arr.length;i++) console.log(arr[i]);


////break and continue keyword

//1 se 20 tak no print karte hai  break keyword
for(let i=1;i<=20;i++){
    if (i==5) {
        console.log("Detected 5");
        break;
        
    }
    console.log(`Value of i is ${i}`);   
}

//1 se 20 tak no print karte hai  continue keyword  continue matlab skip ignore
for(let i=1;i<=20;i++){
    if (i==5) {
        console.log("Detected 5");
        continue; //skip ignore
        
    }
    console.log(`Value of i is ${i}`);   
}

