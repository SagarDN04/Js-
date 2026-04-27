// Dates
let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate);

//let myCreateDate=new Date(2023,0,23,5,3)
//console.log(myCreateDate.toLocaleString());

let myCreateDate=new Date("01-14-2026")
console.log(myCreateDate.toLocaleString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))