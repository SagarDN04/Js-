//arrays

const myArr=[0,1,2,3,4,5]
const vehicles=["bike","car","aeroplane"]

const arr=[1,3,5,7]
console.log(arr[2])

//array method 

arr.push(6)
arr.push(7)
console.log(arr)
arr.pop(7)
console.log(arr);

//arr.unshift(9)
//arr.shift()

//console.log(arr.includes(7))   check if present 
//console.log(arr.indexOf(3))    gives index num of element 

//const arr2=arr.join()
//console.log(arr);
//console.log(arr2)  // binded it and also converted into string 

// Slice and splice

console.log("A",arr);

const arr3=arr.slice(1,3)   // does not manipulates original arr
console.log(arr3);
console.log("B",arr);

const arr4=arr.splice(1,3) // manipulates original arr
console.log(arr4)
console.log("C",arr)

const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
//marvel.push(dc)
//console.log(marvel)

//const allheroes=marvel.concat(dc)
//console.log(allheroes);

const allhero=[...marvel,...dc] // same as concat 
//console.log(allhero)

const anotherarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarr=anotherarr.flat(Infinity)
console.log(realarr)

console.log(Array.from("sagar"))
console.log(Array.from({name:"SAgar"}))//interesting

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))