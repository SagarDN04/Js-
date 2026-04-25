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