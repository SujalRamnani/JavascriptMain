// const marvelHeros=["thor","ironman","spiderman"];
// const dc=["superman","flash","batman"];

// marvelHeros.push(dc);
// console.log(marvelHeros);  //array ke andar ek aur array aagya merge nhi hoga// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvelHeros[3][1]);


// const allHeros=marvelHeros.concat(dc) //array ke andar ek aur array aagya// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(allHeros);


///use spread operator to combine two arrays//
// const allNewHeros=[...marvelHeros,...dc];
// console.log(allNewHeros);


const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];  
const real_anotherArray=anotherArray.flat(Infinity);//bracket ke andar no dena rehta hai kaha tak kar sakte hai// ///sabko ek single 1d array mein return karega//
console.log(real_anotherArray);



//data fetch karte hai pages pe se toh vo nodelist,string vagara ke form mein ata hai// hume chahiye toh array ke form mein convert kardo usko
console.log(Array.isArray("Sid"));///array hai ya nhi vo batayega ye string hai toh false dega//
console.log(Array.from("Sid")); //array bana dega sid string ko//
console.log(Array.from({name:"sid"})); //array bana dega//  empty array dega direct convert nhi kar paya//

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); ///returns new element from set of array///








