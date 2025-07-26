// dates part 2 

// creations
const date1 = new Date(); //current date
// console.log(date1.toLocaleString());

const date2 = new Date(2025,0,1); // yy/mm/dd
// console.log(date2.toString());

const date3 = new Date(1,0,2025); //dd/mm/yy
// console.log(date2.toString());

const date4 = new Date(2025,0,1,17,30); //dd/mm/yy
// console.log(date4.toString());


const date5 = new Date("2025/7/20"); // when we pass a date as string then our month indexing start from 1;
// console.log(date5);

// ++++++++++++++++++++++ explore +++++++++++++++++++++

const currentDate = Date.now();
// console.log("milliseconds",currentDate); //milliseconds 
// it return always milliseconds from 1970/1/1
// console.log("seconds",Math.floor(currentDate/1000));
// console.log("minutes",Math.floor((currentDate/1000)/60));
// console.log("hours",Math.floor(((currentDate/1000)/60)/60));
// console.log("days",Math.floor((((currentDate/1000)/60)/60)/24));
// console.log("years",Math.floor(((((currentDate/1000)/60)/60)/24)/365.25));
// console.log("years2",Math.floor(currentDate/(1000*60*60*24*365.25)));
// console.log("+ days",Math.ceil(((((currentDate/1000)/60)/60)/24)%365.25));

let babluDob = new Date(2006,9,3);
let current = new Date();
let gapDobInMs = current - babluDob; //millisecons 

let ageDate = new Date(gapDobInMs); // it calculates date from 1970 of difference 
let years = ageDate.getUTCFullYear()-1970;
let years2 = ageDate.getUTCFullYear();
let month = ageDate.getUTCMonth();
let day = ageDate.getUTCDate();

console.log(`Gap from DOB = ${years} years, ${month} months, and ${day} days`);


// console.log(1970+55);