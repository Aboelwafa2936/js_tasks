// التكليف 01

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.length = 3
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
num = 3;
// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// التكليف 02

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.reverse();
friends.pop();
friends.reverse();
console.log(friends); // ["Eman", "Osama"]

// التكليف 03 

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

//first method
finalArr = arrTwo.concat(arrOne);

//second one
//finalArr = [...arrTwo, ...arrOne];

//final one
//finalArr.push(...arrTwo);
//finalArr.push(...arrOne);

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// التكليف 04

let website = "Go";
words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

let newVariable = words[2][0].slice(2).toUpperCase();
let newWebsite = words[2][1];

console.log(`${newVariable}let ${newWebsite}site = "${website}"`); // ZEROlet website = "Go";
words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(`${newVariable}`); // ZERO

// التكليف 05

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

//first one
if(haystack.includes(needle)){
    console.log("Found");
}

//second one
if(haystack[1] === needle){
    console.log("Found");
}

//last one
for(let i = 0; i < haystack.length; i++){
    if(haystack[i] === needle){
        console.log("Found");
    }
}


// التكليف 06

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr2.concat(...arr1).map(item => item.toLowerCase()).sort();
allArrs = allArrs.slice(arr1.concat(...arr2).sort().indexOf("F")).join('');
console.log(allArrs); // fxy

