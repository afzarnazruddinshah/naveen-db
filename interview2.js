// write a function that takes in two strings, 
//a filename and a pattern and return a boolean that 
//returns true if the filename matches the pattern and false if otherwise.

// The pattern could have the * as wildcard which means it can match 0 or more character. 
//any other special characters (e.g) ? or & etc. has no special meaning and could just be treated as plain character.

//case:
//sample.js , sam*le.js => true
//sample.js , s*s => true
//sample.js , s*p*.s => true
//sample.js , s*. => false
//sample.js , *j => false
//sample.js , *j* => true 
//sample.js , *s*p*e* => true 

// check char by char between filename and pattern
// char and *, continue
// const fn1 = (filename, pattern) => {
//     let filenameIndex = 0;
//     let patternIndex = 0;
//     while(filename.length > 0) {
//         //pattern[pattern.length-1] === '*' // filenameIndex++, pI++
//         // pattern[0] === '*' // continue
//         //filename[filenameIndex] === pattern[patternIndex]  - fI++, pI++
//         //

//     }
// }

function bar() {
    console.log(this.num);
}
   
var a = {
    num:2,
    foo: bar
}

var baz = a.foo; 

a.foo(); //error or undefined
bar(); //error or undefined
baz(); //undefined