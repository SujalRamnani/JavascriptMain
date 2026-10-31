//for of loop
// const arr=[1,2,3,4,5];
// for(let i of arr) console.log(i);    ////for(const iterator of object)



///string pe loop
// const greeting="Hello world";
// for(const i of greeting) console.log(i);



////maps    //store unique value//  repeated value nhi leta
const map=new Map();
map.set('IN',"India")
map.set('USA',"United states of america")
map.set('FR',"France");
// console.log(map);


for(let key of map){ 
    // console.log(key);     ///array print kardega key value together
}

for(let [key,value] of map){    //ye syntax hai 
    // console.log(key,':-',value);  //alag alag print karega key->value
}


///dekhte hai object iterable hai ya nhi like maps
let obj={
    game1:"NFS",
    game2:"Spiderman",
}

// for(let [key,value] of obj) console.log(key,':-',value); ///objects are not iterable like map..map ke jaisa nhi kar sakte objects pe
















