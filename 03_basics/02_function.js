// read about parameters through this url = https://www.w3schools.com/js/js_function_parameters.asp
// object, arrays as an parameter
//  scope  and nested functions


// function one(num1,num2){
//     return num1 + num2;
// }
function one1(...num){ 
    let sum = 0;
    // return num[0] + num[1]; [10,20,30,40]
    console.log(num);
    num.forEach(function(element){
        sum = sum+element;
    })
    console.log(sum);
    return sum;
}
// sum=500;

// let result = one(10, 20,30,40);
// one(10,20,30,40);
// console.log(result+2);

// ++++++++++++++++return++++++++++++++++++++++++++
// num +  num4 // expression


function twoo (num1 , num2){  //Function parameters are the names listed in the function definition.
    return  num1+num2
}
// let db = two();
// two(10,50)
// console.log(two(10,20)); //10 and 20 arguments ,,,,,, Function arguments are the real values passed to (and received by) the function.



// object and array as an parameter

const obj = {
    name : "karan",
    age : 85,
}
const arr = ["rahul","simran","dholu"];

function getData(myObj,myArr){
    console.log(myObj.name ,"\n",myArr[2]);
}

// getData(obj,arr);

// +++++++++++++++++ scope and nested functions ++++++++++++++++++++++++++++++++++++
//global and local scope
//let and const are block levels


// global scope 
{
    //local scope
    let name1 = "rahul";
const name2 = "kiran";

// console.log(name1)
// console.log(name2)
}

function one(){
    let name = "bhavay";
    function two(){
        let university = "UPES Dehradun";
        console.log(`${name} study in ${university}`)
    }
    console.log(`two ki ${university}`);
    two()
}

one();
//country

// [//state
//     rahul,
//     console.log(age),
//     { //house
//         age : 24
//         newName = rahul
//         [ //room

//             local
//         ]
//     }
// ]


