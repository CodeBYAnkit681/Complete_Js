// DATES

// creations 
let date1 = new Date();
// console.log(date1.toLocaleDateString()); // it returns local way of dates like in india dd/mm/yy

let date2 = new Date(2025,0,1);
// console.log(date2.toString());
// console.log(date2.toDateString()); // it returns (day mm dd yy)

let date3 = new Date(2025,0,2,5,3,5);
// console.log(date3.toString()); //it returns a string with some detail of dates and time combination

let date4 = new Date("2025-01-25");
// console.log(date4.toLocaleString());


// conversion of time
const today = Date.now();
console.log(today); //miliseconds
console.log(Math.floor(today/1000)); // seconds
console.log(Math.floor((today/1000)/60)); // minutes
console.log(Math.floor(( (today/1000) /60)/60)); //hours
console.log(Math.floor((( (today/1000) /60)/60)/24)); //days
console.log(Math.floor(((( (today/1000) /60)/60)/24)/365)); //years
console.log(Math.ceil(((( (today/1000) /60)/60)/24)%365.25)); //remaining days