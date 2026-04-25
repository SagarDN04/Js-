// 7 Primitive types
//String , number ,boolean,null,undefined,symbol,bigint
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNum=367832332n 
console.log(typeof bigNum)// adding n after any numeric value makes it bigint

// reference type (Non primitive)
//Arrays,objects,functions

const arr=["Car","Bike","Aeroplane"]  // array

const myObj = {                 // object
    name : "Sagar",
    age : 21,
}

const myFun = function() {                        // function
    console.log("I am Billioner");
}

console.log(typeof function(){});
console.log(typeof myObj);
console.log(typeof arr);
// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++ Memory ++++++++++++++++++++++++++//

//Stack (Primitive), Heap (Non Primitive)
