// push, pop, unshift, shift, join, includes, indexof,
// join=> adds array to a string 
// slice(just make a subarray) amd splice(cuts the arrayu original data )
// const marvelheroes.push(dchero)
// concat [...var,...] flat
// nonprimitive datatype 
// isArray , .from,.of
// read from here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
let arr  = [12,"harry","sonu","monu",true, "ramu"]; 
let str = "hello";//in js array stores heterogenous data 
// ['h',e',l','l'.o']
// console.log(arr);
// console.log(arr[5]);
// console.log(arr["harry"]); // not applicable
// console.log(str[1]);
// console.log("negative index in arr",arr.at(-1)); //negative indexing can be used using at()
// push 
const scores = [28,15,26,96,24,32];
// console.log(scores.push(28));
// console.log(scores.push(58));
// console.log(scores);

// pop
scores.pop();
// console.log(scores);

// unshift
scores.unshift(100); //Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(scores);

scores.shift(); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
scores.shift();
// console.log(scores);

// join
let arr1 = [10,20,30,40];
// console.log(arr1);
// console.log(arr1.join("separator -,#")); //A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

// includes
// console.log(arr1.includes(60)); //Determines whether an array includes a certain element, returning true or false as appropriate.

//indexof
// console.log(arr1.indexOf(30));

// slice and splice 
const stuData =["harry","abdul","priya","rahul","sanoj"];
// console.log("A : ",stuData);

// slice
// console.log(stuData.slice(1,3));
// console.log("after slice : ",stuData);

// splice
// console.log(stuData.splice(1,3)); // first : last index included and second it cuts the original one 
// console.log("after splice : ",stuData);

// +++++++++++++++++++++++++++++++++++++++ part2 ++++++++++++++++++++++++++++++++++++++++++++++++++

// const arr4 = [10,20,30];
// console.log(arr4);
// const arr3 = new Array(10,20,30);
// console.log(arr3.length);

const marvelHeroes = ["iron man ","captain america","hulk","thor"];
const dcHeroes = ["superman","batman","flash","robin"];
// console.log(marvelHeroes);
// console.log(dcHeroes)

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

// console.log(marvelHeroes.concat(dcHeroes)) // pehle todega fir jodega 

// separators
let newHeroes = [...marvelHeroes,...dcHeroes]; // use triple dots to break down the array
// console.log(newHeroes);

// 2d array
// let  matrix = [[10,20,30], 
// // [40,50,60],
// // [70,80,90]
// // ]
// // console.log(matrix);
// // console.log(matrix[2][2]);

const dynamicArray = [10,20,30,[40,50,60],[
    [
        [500,600,700]  
    ]
    ]
    ];
// console.log(dynamicArray)
// console.log(dynamicArray[1])
// console.log(dynamicArray[3])
// console.log(dynamicArray[3][2])
// console.log(dynamicArray[4][0][0][1])

// flat 
let openArray = dynamicArray.flat(Infinity)
// console.log(openArray[7]);

// Array.isArray
console.log(Array.isArray(openArray)); //tell about the argument is array or not 

// Array.from
console.log(Array.from("hyyyyyyyyyy"));

// Array.of
console.log(Array.of("hyyyyyyyyy"))









