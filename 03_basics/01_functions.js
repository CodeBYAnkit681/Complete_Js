// creation and return ,reference and calling difference, rest operator 
// object, arrays as an parameter
//  scope  and nested functions
// multiple ways of declaring fxn and mini hoisting structure intro

// syntax
// function fxnName(){

// }
// const {sqrt} = Math;
// console.log(sqrt(100));
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

function greet(){
    console.log("hello");
    let num = 10;
    let num2 = 20;
    let num3 = 40;
    console.log(num+num2+num3)
}
// greet //reference 
// greet()

function add2 (num1 , num2 ,...num){ //rest operator
    let sum = 0;
    num.forEach(function(item){
        sum = sum +item;
    })
    console.log(sum)
    console.log(num1)
    console.log(num2)
    console.log(num)
}


add2(10,20,30,50,75,85)