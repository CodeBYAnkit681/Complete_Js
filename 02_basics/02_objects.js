// ++++++++++++++++++++++++++++++++ part 2 ++++++++++++++++++++++++++++++++++++++++++++
// create singleton obj using new Object();
// const insta = {} and insta.id = ""; and innsta .name 
// object nesting and conditional accesibility 
// object addition using {onj1,obj2}, using Object.assign() and using {...obj1 separators}

// +++++++++++++++++++++++++++++++++++++++++++++++++++part 3 ++++++++++++++++++++++++++++++
// arrays of object creation and accessing 
// Object.keys and object.values => returns a array 
// object.entries => returns a key value pair array of array
// hasOwnProperty => return boolean
// destructuring { name : shortDefined} = object 
// react overview of props and api or json talks

const { forwardRef } = require("react");



// object literals 
const newSym = Symbol("abcd");

const myObj = {
    [newSym]: 123,
    name: "Ankit Singh",
    course: "full stack web development",
    fees: 40000,
    "location": "online",
}

// dot operator
// console.log(myObj.location);

// using [""]
// console.log(myObj["fees"]);

// symbol case 
// console.log(myObj)
// console.log(myObj[newSym])
// console.log(typeof(myObj[newSym]))

// freeze 
// console.log(myObj)
// myObj.fees = 20000;
// myObj.name = "Bhavya";
// console.log(myObj)


// Object.freeze(myObj)
// myObj.name = "rahul";
// myObj.fees = 30000;
// console.log(myObj)


// +++++++++++++++++++++++++++++++++++part 2 +++++++++++++++++++++++++++++++++

// singleton
const obj = Object.create(Object.prototype, {
    make: {
        value: "harry potter",
        writable: true,
    },
    intro: {
        value: "hello kese ho ",
        enumerable: true,
    }
})
// console.log(obj.intro)

const obj2 = new Object({
    name: "harry",
    age: 14,
});
// console.log(obj2)

function greet() {
    // console.log("bhavya pani peelo");
}

const obj3 = {
    name: "abcd",
    age: 123,
    pataNhi: null,
    arr: ["harry", "james", "peter"],
    fxn: greet(),
}

// console.log(obj3.fxn) // calling fxn from objects 
// console.log(obj3.name);

const obj4 = {
    NestedObj1: {
        key: "key1",
        name: "harry",
    },
    NestedObj2: {
        id: 1,
        key2: {
            id: 2,
            key3: {
                id: 4
            }

        }
    }
}

// console.log(obj4);
// console.log(obj4.NestedObj2);
// console.log(obj4.NestedObj1.name); //harry
// console.log(obj4?.NestedObj2?.key2?.key3?.id); //4

const currency = {
	"1inch": "1inch",
	"aave": "Aave",
	"ada": "Cardano",
	"aed": "Emirati Dirham",
	"afn": "Afghan Afghani",
	"agix": "SingularityNET",
	"akt": "Akash Network",
	"algo": "Algorand",
	"all": "Albanian Lek",
}

const objj1 = {
    name1 : "harry",
    age : 25,
}
const objj2 = {
    name2 : "rohn",
    age2 : 28,
}

// const objj3  = objj1 + objj2;
// console.log(Object.assign({},objj1,objj2));

const objj3 = {...objj1,...objj2}; //preferred
// console.log(objj3)

// const arr2 = [
//     {
//         name : rahul,
//         status : pass,
//     },
//     {
//         name : vivek,
//         status : pass,
//     },
//     {
//         name : karan,
//         status : fail,
//     },
//     {
//         name : priya,
//         status : pass,
//     }
// ]
console.log(arr2);


