// let , const and var
// reassigning of constant variable is not allowed
// Assigning is required at the time of declaration in const variables
// pi = 15; 
const pi = 3.14;


// reassigning of let variable is allowed
// Assigning is not required at the time of declaration in let variables
// name = "bhya";
// let name = "Ankit"; gobally assigned variable
// global to local => okay
// local to global => not okay
let name = 25;
{
    let name = "Ankit";
    // local space
    console.log("name in block : ",name);
    console.log(typeof(name));
}

// dont use var 
// reassigning of let variable is allowed
// Assigning is not required at the time of declaration in let variables
// global space 
// global to local => okay
// local to global => okay
// it does not support scopes in js 
// {
    //     var age ;
    //     // block space or local space
    //     // console.log("calling age inside this block : ", age);
    //     age = 18;
    //     console.log("calling age inside this block : ", age);
    // }
    // {
        //     var age = 25;
        //     console.log("calling age inside 2nd block : ", age);
        // }
        // console.log(age);


    // bad practice of declaring this type of variable 
       abra = "gili gili";
        
        
        
        console.log(pi);
        console.log(name);
        console.log(typeof(name));
        console.log(abra);
