// التكليف 01

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <title>Learn JavaScript</title>
//     <script>
//       // will not work as the h1 element with the el id has not been loaded yet
//       document.getElementById("el").style.color = "red";
//     </script>
//     <script>
//       // will work due to the window.onload function as it tells the browser to execute the line
        //after the page is downloaded 
//       window.onload = function () {
//         document.getElementById("el").style.color = "red";
//       };
//     </script>
//   </head>
//   <body>
//     <h1 id="el">Page Title</h1>
//     <script>
//       // will work as it is after the h1 element has been loaded
//       document.getElementById("el").style.color = "red";
//     </script>
//   </body>
// </html>

// التكليف 02

document.write("<h1 style = 'color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial'>Elzero</h1>");

// التكليف 03

console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px;" , "color: green; font-size: 40px; font-weight: bold;" , "color: white; background-color: blue; font-size: 40px;");

// التكليف 04

console.group("Group 1");
console.log("message one");
console.log("message two");
console.group('child Group');
console.log("message one");
console.log("message two");
console.group("Grand child Group");
console.log("message one");
console.log("message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group 2");
console.log("message one");
console.log("message two");
console.groupEnd();

// التكليف 05
console.table(["elzero", "ahmed", "sameh", "gamal", "aya"]);

// التكليف 06

// first method
// console.log("Iam In Console");
// document.write("Iam In Page");

// second method
/* console.log("Iam In Console");
document.write("Iam In Page"); */