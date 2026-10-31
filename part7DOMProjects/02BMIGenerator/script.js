
const form=document.querySelector('form');
//bahar likha toh empty value store ho jayegi iske andar//
//const height=parseInt(document.querySelector('#height').value);
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if (height==='' || height<0 || isNaN(height)){
        results.innerHTML=`Please give a valid height ${height}`;
    }
   else if (weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid height ${weight}`;
    }
    else{
         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
         //show the result//
          results.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) results.innerHTML = `<span>Under weight</span>`;
        else if (bmi >= 18.6 && bmi <= 24.9)   results.innerHTML = `<span>Normal weight</span>`;
        else results.innerHTML = `<span>Over weight</span>`;
 }
    
})