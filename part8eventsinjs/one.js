// document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

     // attachEvent()
    // jQuery - on

   

    

     // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

   //Event bubbling=>bottom se top owl pe click karoge toh pehle owl clicked ayega fir clicked inside ul ayega//
    // document.getElementById('images').addEventListener('click', (e)=>{
    //     console.log("clicked inside the ul");
    // }, false)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()
    // }, false)


    //Event propogation=>top se bottom owl pe click karoge fir bhi clicked inside ul fir owl click ayega
    // document.getElementById('images').addEventListener('click', (e)=>{
    //     console.log("clicked inside the ul");
    // }, true)


    ///owl pe click karenge fir upar ke element pe nhi jayega..sirf clicked on owl hi rahega//
    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation() //event ko aage propogate ya aage badhne se rokna//
    // }, true)



    
    // document.getElementById('google').addEventListener('click',(e)=>{
    //     e.preventDefault(); //preventDefault() browser ka default action rokta hai, event propagation nahi (aage badhne se nhi rokta niche print hoga console mein google clicked)
    //     e.stopPropagation() //bubbling bhi nhi hogi...parent tak nhi pochega//
    //     console.log("google clicked");
    // }, false)
   
    
    document.querySelector('#images').addEventListener('click', (e)=>{
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG') {
            console.log(e.target.id);
            let removeIt = e.target.parentNode
            removeIt.remove()
        }   
    })
    //removeIt.parentNode.removeChild(removeIt)