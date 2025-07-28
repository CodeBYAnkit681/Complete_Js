// singleton
// const obj1 = Object.create(Object.prototype,{

//     make : {
//         value :"Ankit",
        
//     },
// }
// )
// console.log(obj1.make);


// object literals 
let mysim = Symbol("key1");
const obj = {
    name : "Ankit",
    [mysim] : "mykey",
}
console.log(obj[mysim]);
// Object.freeze(obj);
// creation and accessibility
// [""] or .
// symbol creation 

// ++++++++++++++++++++++++++++++++ part 2 ++++++++++++++++++++++++++++++++++++++++++++
// create singleton obj using new Object();
// const insta = {} and insta.id = ""; and innsta .name 
// object nesting and conditional accesibility 
// object addition using {onj1,obj2}, using Object.assign() and using {...obj1 separators}
// arrays of object creation and accessing 
// Object.keys and object.values => returns a array 
// object.entries => returns a key value pair array of array
// hasOwnProperty => return boolean
// destructuring { name : shortDefined} = object 
// react overview of props and api or json talks