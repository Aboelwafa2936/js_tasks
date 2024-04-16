// التكليف 01

let start = 10;
let end = 100;
let exclude = 40;

for(let i = start; i <= end; i += 10){
  if (i == exclude){
    continue;
  }
  console.log(i);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

// التكليف 02

start = 10;
end = 0;
let stop = 3;

for(let i = start; i >= stop; i -= 1){
  if(i < start){
    console.log(`${end}${i}`);
  }
  else{
    console.log(i);
  }
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// التكليف 03

start = 1;
end = 6;
let breaker = 2;

for(let i = start; i <= end; i++){
  console.log(i);
  console.log(`-- ${breaker}`);
  console.log(`-- ${end - breaker}`);
}

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// التكليف 04

let index = 10;
let jump = 2;

for (let i = index; i >= (jump * jump) ; i -= jump) {
  // Write Your Code Here
  console.log(i);
}

// Output
// 10
// 8
// 6
// 4


// التكليف 05

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for(let i = 0; i < friends.length; i++){
  if(friends[i].charAt(0).toLowerCase() == letter){
    continue;
  }
  else{
    console.log(friends[i]);
  }
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"


// التكليف 06

start = 0;
let swappedName = "elZerO";
let reverseSwappedName = swappedName.charAt(0);

for(let i = start; i < swappedName.length; i++){
  if(swappedName.charAt(i) == swappedName.charAt(i).toLowerCase()){
    reverseSwappedName += swappedName.charAt(i).toUpperCase();
  }else{
    reverseSwappedName += swappedName.charAt(i).toLowerCase();
  }
}

console.log(reverseSwappedName.slice(1));

// Output
// "ELzERo"

// التكليف 07

start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(let i = start; i < mix.length; i++){
  if(mix[i] == mix[start]){
    continue;
  }
  if(typeof(mix[i]) == 'string'){
    continue;
  }
  console.log(mix[i]);
}

// Output
// 2
// 3
// 4

// التكليف 01

friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
index = 0;
let counter = 0;

while(index < friends.length){
  if(friends[index][true - true] === "A" || typeof(friends[index]) === "number"){
    index++;
    continue;
  }  
  console.log(`"${++counter} => ${friends[index]}"`);
  index++;
}

// Output
// "1 => Sayed"
// "2 => Mahmoud"