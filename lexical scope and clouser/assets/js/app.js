let cl = console.log;




//lexical scope >> scope of parent ( function)

// a function with it's lexical scope is called as clouser

// when we call or raturn a (inner) function in side another (outer) function
// it creates lexical scope
// when we call outer function it returns inner function
// and that inner function bring out all the data in it's lexical scope
// (scope of parent function) i.e called as clouser

function outerFunction() {
    let x = 10;
    function innerFunction() {
        x++;
        return x;
    }
    return innerFunction;
}

let result = outerFunction(); // >> returns "innerFunction"  //// result holds a object
cl(result)

let result2 = result(); // 11
cl(result2);
let result3 = result(); // 12
cl(result3);
let result4 = result() // 13
cl(result4)

let r1 = outerFunction();  // returns "innerFunction" // 

let r2 = r1() // 
cl(r2)
r2 = r1() // 
cl(r2)



// function p(x){
//     // let x;
//     return function(y){
//         // let y; let x
//         return function(z){
//             // let z ;
//             return x + y + z
//         }
//     }
// }

let p = (x) => (y) => (z) => x + y + z;


// function currying 
// Currying is the process of taking a function with multiple arguments
// and turining it in to a sequence of funtions each with a single argument
// Haskell Curry 
let result10 = p(100)(200)(300);
cl(result10)

// let result5 = p(100);
// cl(result5)
// let r4 = result5(200);
// cl(r4);

// cl(r4(300))