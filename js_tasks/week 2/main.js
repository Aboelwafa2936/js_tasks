// التكليف 01

// Add Variables Here
let numberOne = 10;
let numberTwo = 20;

// Ouput
console.log(numberOne.toString() + numberTwo.toString()); // Normal Concatenate => 1020
console.log(typeof (numberOne.toString() + numberTwo.toString())); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof(`${numberOne}${numberTwo}`)); // Template Literals Way => String

console.log(numberOne + "\n" + numberTwo);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberOne}
${numberTwo}`);
/*
  Template Literals Way
  20
  10
*/

// التكليف 02

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object


//التكليف 03 

// `I'm In
// \\
// Love \\ """ '''
// ++ With ++
// \"""\"""
// ""JavaScript""``

console.log(
  'i\'m in' + '\n' + '\\\\' + '\n' + 'love ' + '\\\\ ' + '\"\"\" ' + "\'\'\'"
  + '\n' + '\+\+ ' + 'with ' + '\+\+' + '\n' + '\\\"\"\"' + '\\\"\"\"' + '\n'
  + '\"\"javascript\"\"'
);

// التكليف 04


let a = 21;
let b = 20;
let c = `_${b}${a}`;
console.log(`_${a}${c.repeat(3)}_${b}_`); // _21_2021_2021_2021_20_