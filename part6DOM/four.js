function addLanguage(language){
   const li=document.createElement("li");
   li.innerHTML=`${language}`;  //value bhi deni hai n html ke//
   document.querySelector('.language').appendChild(li);


}
addLanguage("Python")
addLanguage("Rust")


////optimised approach for add language///  appendchild karne mein pura tree traverse karna padega pehle wala approach mein upar//
function addOptiLanguage(langName){
     const li=document.createElement("li");
     const text=document.createTextNode(langName) //upar li.innerHtml kiya tha isme li ke andar ek textnode add kardiya//
     li.appendChild(text);
     document.querySelector('.language').appendChild(li)
}
addOptiLanguage("cpp")


////editing this values
const secondLang=document.querySelector("li:nth-child(2)")
// secondLang.innerHTML="Mojo"
const newli=document.createElement('li')
newli.textContent="Mojo"
secondLang.replaceWith(newli)


///edit one more
const firstLang=document.querySelector("li:first-child")
firstLang.outerHTML='<li>Typescript</li>'


///remove elements
const lastLang=document.querySelector('li:last-child');
lastLang.remove()