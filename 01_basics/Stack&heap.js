// types of datatypes =>primitive and non-primitve 
// stack and heap 


// primitive
// NNBBSSU

// stack 
// original value will not be change
let name = "Ankit";
let anotherName = name;
anotherName = "bhavya";

// console.log(name);

// heap
// non-primitive types = > array, functions and objects
// arrays
let arr = ["ankit","sonu","rahul"];
let arr2;
arr2 = [10,20,30,40,50];
console.log("type of arr2 = ",typeof arr2);

// console.log(typeof arr);

// functions 
// declaring
function fun_Name(x,y){
    // defining
    console.log(x+y);
}
const fun2 = ()=>{
    console.log("fun2");
}
// calling
fun_Name(10,20); 
fun2();

// objects
let firstObj = {
    rollNo : 1235,
    age : 25,
    sName : "bhavya",
    email : "abcd@124.com",
}
console.log(firstObj);
firstObj.sName = "rahul";
// synchronous 
console.log(firstObj);

let obj2 = {
    fisrtName: "ankit",
    age : 25,
}
console.log(obj2);

// reference type 
// original value will affect
let myObj = {
    sName : "bhavya",
    email : "abcd@124.com",
}
let anObj = myObj;
anObj.email = "efgh@1245.com";

// console.log(myObj);

