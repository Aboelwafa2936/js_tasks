// التكليف 01

function sayHello(theName, theGender) {
    // Your Code Here
    if(theGender === "Male"){
        console.log("Hello Mr " + theName);
    }else if(theGender === "Female"){
        console.log("Hello Miss " + theName);
    }else{
        console.log("Hello " + theName);
    }
}  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"

// التكليف 02

function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    if(secondNum === undefined){
        console.log("Second Number Not Found");
        return;
    }
    if (operation === undefined) {
        console.log(firstNum + secondNum);
        return;
    }
    switch (operation){
        case 'add':
            console.log(firstNum + secondNum);
            break;
        case 'subtract':
            console.log(firstNum - secondNum);
            break;
        case 'multiply':
            console.log(firstNum * secondNum);
            break;
        default:
            console.log('invalid operation');                
    }
}

  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600

// التكليف 03

function ageInTime(theAge) {
    // Your Code Here
    if(theAge > 10 && theAge < 100 ){
        let months = theAge * 12;
        let weeks = months * 4;
        let days = weeks * 7;
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        console.log(`${months} Months, ${weeks} Weeks, ${days} Days, ${hours} Hours, ${minutes} Minutes and ${seconds} Seconds`);
    }else{
        console.log("Age Out Of Range");
    }
}  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

// التكليف 04

function checkStatus(a, b, c) {
    // Your Code Here
    let userName;
    let userAge;
    let userState;

    if(typeof a === "string"){
        userName = a;
    }else if(typeof b === "string"){
        userName = b;
    }else{
        userName = c;
    }

    if(typeof a === "number"){
        userAge = a;
    }else if(typeof b === "number"){
        userAge = b;
    }else{
        userAge = c;
    }

    if(typeof a === "boolean"){
        userState = a;
    }else if(typeof b === "boolean"){
        userState = b;
    }else{
        userState = c;
    }

    if(userState === true){
        console.log("Hello " + userName + ", Your Age Is " + userAge + ",You Are Available For Hire");
    }else{
        console.log("Hello " + userName + ", Your Age Is " + userAge + ",You Are Not Available For Hire");
    }
}  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// التكليف 05

function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write('<select>');
    for (let i= startYear; i <= 2021; i++) {
        document.write('<option value="' + i + '">' + i + '</option>');
    }
    document.write('</select>');
}

createSelectBox(2000, 2021);

// التكليف 06

function multiply(...pars) {
    let result = 1;
    for (let par of pars) {
        if (typeof par !== 'number'){continue;} 
        if (Number.isInteger(par)) {
            result *= par;
        } else if (!isNaN(parseFloat(par))) { 
            result *= parseInt(par);
        }
    }
    return result;
}

result = multiply(10, 20); // 200
console.log(result);
result = multiply("A", 10, 30); // 300
console.log(result);
result = multiply(100.5, 10, "B"); // 1000
console.log(result);