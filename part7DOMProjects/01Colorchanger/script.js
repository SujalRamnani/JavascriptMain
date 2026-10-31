const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");
console.log(body);


buttons.forEach((item)=>{
    console.log(item);
    //har ek button pe eventListener lagao
    item.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);

        if(e.target.id==="grey") {
            // body.style.backgroundColor=e.target.id;
            body.style.backgroundColor="grey";
        }
        else if (e.target.id==="blue"){
              body.style.backgroundColor="blue";
        }
        else if (e.target.id==="yellow"){
             body.style.backgroundColor="yellow";
        }
        else if (e.target.id==="white"){
             body.style.backgroundColor="white";
        }
        
    })
});



