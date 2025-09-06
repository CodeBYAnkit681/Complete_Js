// switch syntax and ntro
// default , break not ,string case value
//truthy and falsy
// falsy values = false , 0,-0,bigInt 0n,"",null,undefined,NAN
//truthy values = true,"0",'false'," ",[],{},function(){},
// Object.keys(obj).length ===0 , arr.length==0
// false == 0
//false == ''
//0 == ''
//nullish coaleshing operator
// val = 5??10
//ternary oparator
//condition?true:false

// let dice = 5;

// switch (dice) {
//     case 1:
//         console.log(`your dice value : ${dice}`);
//         break;
//     case 2:
//         console.log(`your dice value : ${dice}`);
//         break;
//     case 3:
//         console.log(`your dice value : ${dice}`);
//         break;
//     case 4:
//         console.log(`your dice value : ${dice}`);
//         break;
//     case 5:
//         console.log(`your dice value : ${dice}`);
//         break;
//     case 6:
//         console.log(`your dice value : ${dice}`);
//         break;
//     default:
//         console.log("no any case executed");
//         break;
// }


// let fruit = "banana";

// switch (fruit){
//     case "apple":
//         console.log(`eat an ${fruit} a day keeps doctor away`);
//         break;
//     case "mango":
//         console.log(`eat an ${fruit} keeps bacteria away`);
//         break;
//     case "banana":
//         console.log(`eat an ${fruit} keeps muscle maintain`);
//         break;
//     case 2: 
//         console.log(`dont try to put number in fruit variable`);
//         break;
//     default:
//         console.log("dubara try karee");
//         break;
// }




// let fruit = "mango";

// switch (fruit){
//     case "apple":
//         console.log(`eat an ${fruit} a day keeps doctor away`);
//         // break;
//     case "mango":
//         console.log(`eat an ${fruit} keeps bacteria away`);
       
//     case "banana":
//         console.log(`eat an ${fruit} keeps muscle maintain`);
      
//     case 2: 
//         console.log(`dont try to put number in fruit variable`);
       
//     default:
//         console.log("dubara try karee");
//         break;
// }

let obj = {
    id : 1256,
}

// console.log(Object.keys(obj));
// console.log(Object.keys(obj).length);
// if(Object.keys(obj).length >= 0){
//     // console.log(Object.keys(obj));
//     console.log("empty object ya fir kuch toh hai");
// }else{
//     console.log("else case");
// }

// ternary operator condition ? true: false
let mohitAge = 5;
let rohanAge =  mohitAge>12 ? 15:10;
console.log("rohan age " + rohanAge + " and  mohit age " + mohitAge)


if(mohitAge>12){
    let rohanAge = 15;
    console.log("rohan age " + rohanAge + " and  mohit age " + mohitAge)
    
}else{
    let rohanAge = 10;
    console.log("rohan age " + rohanAge + " and  mohit age " + mohitAge)
}