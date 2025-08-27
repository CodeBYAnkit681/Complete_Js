// if, comparison operators , logical operators , if else, if else if laddder and if nesting
//  som case of and or operator with if 
//read more about operators from this link
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators 


// let arr = [1,2,5,3,6,4,5,65,6,55];
// console.group(arr);
// let age = 25;
// if(age>18){
//     console.log("you are eligible  to vote")
// }

//comparison operator 
// >,<,==,===,>=,<=,!
// if(!true){
//     console.log("i am okay");
// }

//logical operators

// +++++++++++++++++++Day2++++++++++++++++++++++++
// let x = 10;
// let y = 1;
// if(!true){
//     console.log("i am running");
// }

// let age = 20;
//ladder
// if(age>18){
    //     console.log("you can drive");
    // }
    // if(age>15){
        //     console.log("you can drive but with some senior presence ");
        // }
        // else if(age>10){
            //     console.log("you have to first lear how to ride a bicycle ");
            // }
            // else{
                //     console.log("you have to drink milk first");
                // }
                
// let age = 22;
// //nesting
// if(age>18){
//     console.log("first condition passed");
//     if(age>21){
//     console.log("2nd condition passed");
//         if(age>25){
//         console.log("3rd condition passed");
//         }
//         else{
//             console.log("i am internal else");
//         }
//     }

// }

let x = 5;
let y = 10;
//Logical And
// if(x>8 && y>8){ //only 
//  console.log("i am running");
// }

//Logical OR
// if(x>8 || y>8){ //only runs in true condition
//  console.log("i am running");
// }

// Logical Not !
// if(!(x>y)){
//     console.log("i am logical not");
// }

//logical nullish ??
// let variable =12  ?? "i am default value"; //output 12
let variable =  0 || "i am default value";  // drawback of nulllish operators ..null or undefined 

console.log(variable);
