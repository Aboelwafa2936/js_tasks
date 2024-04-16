//  التكليف 01

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(1_00_000); // 100000
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(1e5 / 1); // 100000
console.log(1e4 * 10); // 100000
console.log(1e6 / 10); // 100000
console.log(50000 + 50000); // 100000
console.log(10_000 * 10); // 100000
console.log(1e+5); // 100000
console.log(1e2 * 1e3); // 100000

// التكليف 02

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// التكليف 03

console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16


// التكليف 04

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57

// التكليف 05

let num = 10;

console.log(Number.isInteger(num) + true); // 2

// التكليف 06 

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.floor(flt)); // 10

// التكليف 07

console.log(Math.random() * 4); // 0 || 1 || 2 || 3 || 4



// numbers challenge

let a = 1_00;  // 100
let b = 2_00.5;  // 200.5
let c = 1e2;  // 100
let d = 2.4; // 2.4

console.log(Math.floor(Math.min(a, b, c, d)));


let userNum = a + d;  // 100 + 2.4 = 102.4
console.log((Math.trunc(userNum) - Number(d.toFixed(0))) * c); //10000

// getting the integer value of the d variable in 4 different ways

console.log(parseInt(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));

userNum = b + d;  // 202.9

console.log(Number((userNum - (a + 36.23)).toString()).toFixed(2)); // 66.67 => string
console.log(Math.ceil(userNum - (a + 36.23))); // 67 => number

// التكليف 01

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substring(0, 1).toLocaleLowerCase()); // e
console.log(userName.split("")[0].toLowerCase()); // e
console.log(userName.charAt(userName.indexOf(userName[0])).toLocaleLowerCase().repeat(3)); // eee

// التكليف 02

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True


// string challenge

a = "Elzero Web School";

console.log(a.charAt(2).toUpperCase() + a.slice(a.indexOf(a.charAt(3)), a.indexOf(a.charAt(6))));  // Zero

console.log(a.slice(a.indexOf(a.charAt(13)), 14).toUpperCase().repeat(8));  // 8 H

console.log(a.slice(a.indexOf(a.charAt(0)), a.indexOf(a.charAt(6))).split()); // [Elzero]

console.log(`${a.substr(0, 6)} ${a.substr(11, 17)}`);  // Elzero School

console.log(a.charAt(a.length - 1).toLowerCase());   // first & last char is small

console.log(a.charAt(a.length - a.length).toLowerCase() + a.slice((a.length - a.length) + 1, a.length - 1) + a.charAt(a.length - 1).toLowerCase());