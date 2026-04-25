let score="33abc"
console.log(typeof score)  //method 1
console.log(typeof (score)) // mothod 2

let valueInNumber=Number(score) 
console.log(typeof (valueInNumber))
console.log(valueInNumber)

/*Note
    "33"=> 33
    "33abc"=>NaN
    true=>1 ; false => 0
    1=>true ; 0=> false
    "" => false
    "value" => true
    null => 0
    undefined => NaN
*/



//********** Operations ***********//

let value =3
let negValue = -value
console.log(negValue)
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3);
console.log(2%2);


let strl1="hello"
let strl2="bro"
let strl3=strl1+strl2
console.log(strl3)

/*console.log("1"+2);
console.log(1+"2");
console.log(1+2+"2");
console.log("1"+2+2);    

console.log((3+4)*5%3)*/

console.log(+true);
//console.log(true+);
console.log(+"");

let num1,num2,num3
num1=num2=num3=2+2
console.log(num1)

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"