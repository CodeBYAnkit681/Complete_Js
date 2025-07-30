// +++++++++++++++++++++++++++++++++++++++++++++++++++part 3 ++++++++++++++++++++++++++++++
// arrays of object creation and accessing 
// Object.keys and object.values => returns a array 
// object.entries => returns a key value pair array of array
// hasOwnProperty("") => return boolean
// destructuring { name : shortDefined} = object 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const obj {
//     arr = [
//         name : "bhavya",
//     ]
// } wrong

// correct way 
// const obj = {
//     arr : [
//         10,20,"bhavya",
//     ]
// }

// [
//     {}, 0
//     {},1
//     {},2
//     {},3
//     {},4
//     {},5
// ]

const arr = [
    {
        name: "rahul",
        marks: 55,
    },
    {
        name: "kiran",
        marks: 26,
        obj: {
            name: "tarun",
            marks: 66,
        },
    },
    {
        name: "sahil",
        marks : 29
    }
]

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[0].marks);
// console.log(arr[1].obj.name);
// console.log(arr[1].obj.marks);

// keys, values and enteries
const obj = {
    name : "shubham",
    age : 85,
    marks : 85,
    course : "btech",
}

// console.log(Object.keys(obj)); //it returns a array of keys of a object
// console.log(Object.values(obj)); //it returns a array of value of a object
// console.log(Object.entries(obj));

// console.log(obj.hasOwnProperty("marks"));
// console.log(Object.hasOwn(obj,"marks"));

const obj2 = {
    RamuFriendName : "Anurag",
    HeOwnsAComputer : true
}
// console.log(obj2.RamuFriendName);


const {RamuFriendName : abra ,HeOwnsAComputer : dabra} = obj2; //destructure
// console.log(abra);
// console.log(dabra);





