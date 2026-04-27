const name="sagar"
const repoCount=50
//console.log(name+repoCount+"values")    old method 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('SagarDn')
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('D'))

const newString = gameName.substring(0,5)
console.log(newString);

const anotherName = gameName.slice(-5,4)  // giving -ve can count from rev
console.log(anotherName);

const demoStr="   SDN   "
console.log(demoStr);
console.log(demoStr.trim());// it trim the unnecessary space 