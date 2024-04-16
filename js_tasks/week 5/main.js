// التكليف 01

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 != 100 + 10 - 20); // true
console.log(-10 == "-10"); // true
console.log(- -50 > +"-40"); // true
console.log(+ 10 < -"-40"); // true
console.log(+ "10" == 10); // true
console.log(+ 20 != false); // true

// التكليف 02

let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 != num2); // true
console.log(!(num1 > num2)); // true
console.log(num1 !== num2); // true
console.log(num2 >= num1); // true
console.log(num1 <= num2); // true

// التكليف 03

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a == b || a != c); // true
console.log(!(a == b) && !(a > b) && !(a < c) && !(a == c)); // true

// التكليف 01

// Test Case 1
let num = 9; // "009"
if(num < 10){
    console.log(`00${num}`);
}

// Test Case 2
num = 20; // "020"
if(num > 10 && num < 100){
    console.log(`0${num}`);
}

// Test Case 3
num = 110; // "110"
if(num >= 100){
    console.log(num);
}

// التكليف 02


num1 = 9;
let str = "9";
let str2 = "20";

// Output
//"{num1} Is The Same Value As {str}"
if (num1 == str){
    console.log("{num1} Is The Same Value As {str}");
}

//"{num1} Is The Same Value As {str} But Not The Same Type"
if (num1 == str && num1 !== str){
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}

//"{num1} Is Not The Same Value Or The Same Type As {str2}"
if (num1 !== str2){
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}

//"{str} Is The Same Type As {str2} But Not The Same Value"
if (typeof(str) == typeof(str2) && str !== str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

// التكليف 03

num1 = 10;
num2 = 30;
let num3 = "30";

// Needed Output
//"30 Is Larger Than 10 And Type string Not The Same Type As number"
if(num3 > num1 && num3 !== num2){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
}

//"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
if(num3 > num1 && num3 == num2 && num3 !== num2){
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
}

//"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
if(num3 != num1 && num3 == num2 && num3 !== num2){
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}

// التكليف 04

// Edit What You Want Here

num1 = 17;
num2 = 10;
num3 = 17;
let num4 = 45;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

// التكليف 01

let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

day = "Friday";
day = "Saturday";
day = "Sunday";
// Output => "No Appointments Available"

day = "Monday";
day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

day = "World";
// Output => "Its Not A Valid Day"

switch (day){
    case "   friday  " :
        console.log(day.slice(3, 4).toUpperCase() + day.slice(4, 9));
        break;

    case "Friday" :  
    case "Saturday" :
    case  "Sunday"  :
            console.log("No Appointments Available");
            break;

    case "Monday" :
    case "Thursday" :
            console.log("From 10:00 AM To 5:00 PM");
            break;

    case  "Tuesday" :
            console.log("From 10:00 AM To 6:00 PM");
            break;

    case "Wednesday" :
            console.log("From 10:00 AM To 7:00 PM");
            break;
    default :
            console.log("Its Not A Valid Day");                   
}