let obj1 = {
    name : "rahul",
    age : 25,
    roll : 1235,
    course : "cse"
}

// ways of accessing objects
console.log(obj1);
// 1. using dot operator 
console.log(obj1.name);
// 2. using key and []
console.log(obj1["age"]);
// object destructuring
const {name , age} = obj1;
console.log(name);
console.log(age);


// ++++++++++++++++++++++++++++ console,log ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let namee = "sonuuuuu";
let repoCount = 25;

console.log("hello, "+ namee+" kese ho ");
console.log("hello, ",namee," kese ho ");
console.log(`hello ${namee} kese ho and your ${repoCount}`);
