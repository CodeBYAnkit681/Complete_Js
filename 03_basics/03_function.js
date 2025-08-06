// multiple ways of declaring fxn and mini hoisting structure intro
//IIFE
// this and return 


//way 1 
// add();
function add() {
    console.log("add1 calls");
} // read by jit 

//way 2
// add2();
const add2 = function () {
    console.log("add2 calls");
} //interpreter 
// add2();


//way3 
//arrow function
const add3 = ()=>{
    console.log("add3 calls");
}
// add3();





//++++++++++++++++++++++++++++++++++++++++++++ mini hoisting ++++++++++++++++++++++++

// let a = 2;
// let b = 5;

// const obj = {
//     name : "khushi",
//     age : 19
// }

function add() {
    console.log("add1 calls")
    let obj2 = {
      arr : [25,65,32,85,96,77]
    }
} // read by jit
// add() 


// ++++++++++++++++++++++++ IIFE+++++++++++++++++++++++++++++++++++++++

//Immediately Invoked Function Expression

// (()=>{
//     console.log("hello kese ho bhavay");
// })()


// (function(){
//     console.log("mera naam nhi hai")
// })()

// ++++++++++++++++++++++++++++++ this ++++++++++++++++++++++++++++++++++++

const user = {
    name : "Ankit ",
    greet(){
        console.log(`Hello ${this.name}`);
    }
}
// user.greet();

function one(){
    let a = 5;
    let b = 10;
    function two (){
        console.log(a+b);
    }
    two();
}
// one();

//++++++++++++++++++++++++++++ returns ++++++++++++++++++++++++++++++
function mul (num1, num2){
    return num1*num2;
} //standard + explicit return
// console.log(mul(15,2));

//method 2 
// const arroe = ()=>{}
const mul2 = (num1,num2)  => num1*num2;  //implicit return of an arrow fxn 
// console.log(mul2(4,2));

//method 3 
const mul3 = (num1,num2)  => (num1*num2+(9-8)); //implicit
const mul5 = (num1,num2)  => {name : "Ankit"} //implicit
// mul5();
console.log(mul5().name)
// console.log(mul3(5,8));
//method 4
const mul4 = (num1,num2) =>{
    return num1*num2;
}
console.log(mul4(5,8));

