// التكليف 01


// Replace ? With Arithmetic Operators
console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// التكليف 02

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * (true + true)); // 6

// Soultion Three
console.log(num + (true + true + true)); // 6

// Soultion Four
console.log((num * num) - (true + true + true)); // 6

// Solution Five
console.log(((num * num) + (num * num)) / (true + true + true)); // 6

// Solution Six
console.log(num * num - num); // 6

// التكليف 03

num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(+num * (true + true)); // 20

// Solution Three
console.log((+num * +num) / (+num / (true + true))); // 20

// Solution Four
console.log((+num * +num + +num * (true + true)) % (+num * +num)); // 20

//التكليف 04 


let points = 10;

// Write Your Code Here
points += true + true + true;

console.log(points); // 13

// Write Your Code Here
points -= ((points - (true + true + true)) / 2);
console.log(points); // 8;