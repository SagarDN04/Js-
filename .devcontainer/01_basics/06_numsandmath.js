const score = 400
//console.log(score)
const balance = new Number(100)
//console.log(balance)
//console.log(balance.toString().length)
//console.log(balance.toFixed(1))

const demoNum=1123.9768
//console.log(demoNum.toPrecision(4))

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'))    //by default it given USA number grading 

//++++++++++++++++++ Maths ++++++++++++++++++//

//console.log(Math)
//console.log(Math.abs(-4))   //make +ve value
//console.log(Math.round(4.6))    //used to roundoff floor used to round off at min value ceil used to round off at max value
//console.log(Math.min(2,4,3,1))
//console.log(Math.max(2,4,3,1))

console.log(Math.random())//always get random value between 0-1
console.log((Math.random()*10) + 1)

//get random value between 10 - 20
const min=10
const max=20
console.log(Math.floor(Math.random()*(max - min + 1)) + min)