// // week 1 assignments 2
// document.write("<h1>Alaa</h1>")
// document.querySelector("h1").style=`
// color: blue;
// font-size: 80px;
// font-weight: bold;
// text-align: center;
// font-family: Arial`

// // week 1 assignments 3
// console.log("%cElzero %cWeb %cSchool","color:red; font-size:40px","color:green; font-size:40px","color:white; font-size:40px;background-color:blue")

// // week 1 assignments 4
// console.group("Group 1")
// console.log("Massage One")
// console.log("Massage Two")
// console.group("Child Group")
// console.log("Massage One")
// console.log("Massage Two")
// console.group("Grand Child Group")
// console.log("Massage One")
// console.log("Massage Two")
// console.groupEnd()
// console.groupEnd()
// console.groupEnd()
// console.group("Group 2")
// console.log("Massage One")
// console.log("Massage Two")

// // week 1 assignments 5
// console.table(["Alaa","Hany","Mohamed","Mahomud","Nayyem"])

// // week 1 assignments 6
// /*
// console.log("Iam In Console");
// document.write("Iam In Page");
// */


// // week 2 assignments 1
// let  a = 10
// let  b = 20
// console.log(a+""+b)
// console.log(typeof (a+""+b))
// console.log(`${a}${b}`)
// console.log(typeof (`${a}${b}`))
// console.log(b+"\n"+a)
// console.log(`${b}\n${a}`)

// // week 2 assignments 2
// للحصول علي النتيجة اكتب في ملف html الكود التالي 
// //<div id="elzero">object</div>
// console.log(elzero.innerHTML); // object
// console.log(typeof elzero); // object

// // week 2 assignments 3
// console.log("`I'm In " +"\n"+"\\\\"+"\n"+"Love \\\\ \"\"\" \'\'\'"+"\n"+"++ With ++" + "\\\"\"\"\\\"\"\""+"\n"+"\"\"JavaScript\"\"``")

// // week 2 assignments 4
// let a = 21;
// let b = 20;

// console.log(`${a}_${b}`.repeat(4));
// // _21_2021_2021_2021_20_

// // week 2 challenge
// let theName = "elzero",theDec = "Elzero Web School",theDate="25/10"
// theTotal=`
// <div class"card">
//     <h3>Hello ${theName}</h3>
//     <p>${theDec}</p>
//     <span>${theDate}</span>
// </div>
// `
// document.write(theTotal.repeat(4))

// // week 3 assignments 1
// // Replace ? With Arithmetic Operators
// console.log(10 * 20 + 15 % 3 + 190 + 10 - 400); // 0

// // week 3 assignments 2
// let a = 3;

// // Solution One
// console.log(a+a); // 6

// // Solution Two
// console.log(a*(true+true)); // 6

// // Soultion Three
// console.log(a+true+true+true); // 6

// // Soultion Four
// console.log(a**a/a-a); // 6

// // Solution Five
// console.log(a*a-a); // 6

// // Solution Six
// console.log(true*a+a); // 6

// // week 3 assignments 3
// let a = "10";
// // Solution One
// console.log(+a+ +a); // 20
// // Solution Two
// console.log(Number(a)+Number(a)); // 20
// // Solution Three
// console.log(a*a/a+ +a); // 20
// // Solution Four
// console.log(a*(true+true)); // 20

// // week 3 assignments 4
// let points = 10;
// ++points
// points++
// ++points
// // Write Your Code Here

// console.log(points); // 13

// --points
// --points
// --points
// --points
// --points
// console.log(points); // 8;

// // week 3 challenge
// d="-100"
// e="20"
// f=30
// g=true
// console.log(-d * +e) //2000
// console.log(-d + ++f +  ++e * ++g ) //173

// // week 4 assignments challenge 1
// a=1_00
// b=2_00.5
// c=1e2
// d=2.4
// console.log(Math.trunc(Math.min(a,b,c,d)))

// console.log(Math.pow(a,Math.trunc(d)))

// console.log(Math.trunc(d))
// console.log(Math.round(d))
// console.log(Math.floor(d))
// console.log(parseInt(d))

// console.log(parseFloat((b/Math.ceil(d)).toFixed(2)))
// console.log(parseFloat((b/Math.ceil(d)).toFixed()))

// // week 4 assignments challenge 2
// a = "Elzero Web School"
// console.log(a.charAt(2).toUpperCase()+a.slice(3,6))

// console.log(a.slice(13,14).toUpperCase().repeat(8))

// console.log(a.split(" ",1))

// console.log(`${a.substr(0,6)} ${a.substr(11)}`)

// console.log(a[0].toLowerCase()+ a.slice(1,length-1).toUpperCase() + a[a.length-1].toLowerCase())

// //  week 4 part one assignments 1
// // Examples
// console.log(100000); // 100000
// console.log(100_000); // 100000
// console.log(5e4 + 5e4); // 100000

// // Your Solutions
// console.log(100000.0); // 100000
// console.log(Math.pow(10,5)); // 100000
// console.log(1000*100); // 100000
// console.log(1e5); // 100000
// console.log(10**5); // 100000
// console.log(50000+50000); // 100000
// console.log(10000000/100); // 100000
// console.log(10*10*10*10*10); // 100000
// console.log(Math.max(100000,546,65464,484)); // 100000
// console.log(Math.min(100000,1564654654,464818849,21000015)); // 100000

// //  week 4 part one assignments 2
// console.log(-(Number.MIN_SAFE_INTEGER))

// //  week 4 part one assignments 3
// console.log((Number.MAX_SAFE_INTEGER).toString().length)

// //  week 4 part one assignments 4
// let a = "100.56789 Views";
// console.log(Number.parseInt(a)); // 100
// console.log(+(Number.parseFloat(a).toFixed(2))); // 100.57

// //  week 4 part one assignments 5
// let num = 10;
// console.log(Number.isInteger(num)+Number.isInteger(num)); // 2

// //  week 4 part one assignments 6

// let flt = 10.4;
// console.log(+(flt.toFixed())); // 10
// console.log(Math.floor(flt)); // 10
// console.log(Math.round(flt)); // 10
// console.log(parseInt(flt)); // 10
// console.log(Math.trunc(flt)); // 10

// // week 4 part one assignments 6
// console.log(Math.random() * 4)

// // week 4 part two assignments 1
// let a = "Elzero";
// console.log(a.slice(0,1).toLowerCase()); // e
// console.log(a.charAt(0).toLowerCase()); // e
// console.log(a.substring(0,1).toLowerCase()); // e
// console.log(a.substr(0,1).toLowerCase()); // e
// console.log(a[0].toLowerCase()); // e
// console.log(a.split("")[0].toLowerCase().repeat(3)); // eee

// // week 4 part two assignments 2
// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True

// // week 5 part one assignments 1
// console.log(100 == "100"); // true
// console.log(100 < 1000); // true
// console.log(110 > 100 > 10 < 20); // true
// console.log(-10 == "-10"); // true
// console.log(!(-50 >= +"-40")); // true
// console.log(!( 10 === -"-40")); // true
// console.log(!( "10" === 10)); // true
// console.log(!(20 < false)); // true

// // week 5 part one assignments 2
// let a = 10;
// let s = 20;

// console.log(a<s); // true
// console.log(!(a>s)); // true
// console.log(a+a == s); // true
// console.log(!(a==s)); // true
// console.log(!(a===s)); // true
// console.log(s-a==a); // true

// // week 5 part one assignments 3
// let a = 20;
// let b = 30;
// let c = 10;
// console.log(a < b && a > c || a === b); // true
// console.log(a < b || a > c); // true
// console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

// // week 5 part two challenge 1
//     a=0
//     a<10?console.log(10)
//     :a>=10 && a<= 40?console.log("10 to 40")
//     :a>40? console.log(">40")
//     :console.log("Unknown")

// // week 5 part two challenge 2
// st = "Elzero Web School"
// if((st.length+st.length).toString() === "34"){
//     console.log("Good")
// }
// if(st[st.indexOf("W")].toLowerCase() === "w"){
//     console.log("Good")
// }
// if(typeof st === "string"){
//     console.log("Good")
// }
// if(typeof st.length === "number"){
//     console.log("Good")
// }
// if(st.slice(0,6).repeat(2) === "ElzeroElzero"){
//     console.log("Good")
// }

// week 5 part two assignments 1
// Test Case 1
// let num = 9; // "009"
// if (num < 10) { 
//     console.log(`00${num}`)
// }
//  // Test Case 2
// let num = 20; // "020"
// if (num>10 && num<100) {
//     console.log(`0${num}`)
// }
// // // Test Case 3
// let num = 110; // "110"
// if (num>=100) {
//     console.log(`${num}`)
// }

// week 5 part two assignments 2
// let num1 = 9;
// let str = "9";
// let str2 = "20";
// if (num1 == str) {
//     console.log("{num1} Is The Same Value As {str}")
// }
// if(num1 == str && num1 !== str){
//     console.log("{num1} Is The Same Value As {str} But Not The Same Type")
// }
// if(num1 != str2 && num1 !== str2){
//     console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
// }
// if (str !== str2 && typeof str == typeof str2) {
//     console.log("{str} Is The Same Type As {str2} But Not The Same Value")
// }

// // week 5 part two assignments 3
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";
// if (+num3>num1 && num3 !== num2) {
//     console.log("30 Is Larger Than 10 And Type string Not The Same Type As number"
// )
// }else if(+num3>num1  && num3 == num2){
//     console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
// }else if(num3!==num1  && num3 !== num2){
//     console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
// }

// // Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As number"
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
// "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

// // week 5 part two assignments 4
// // Edit What You Want Here
// let num1 = 20;
// let num2 = 1;
// let num3 = 20;
// let num4 = 60;
// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */
// // Condition 1
// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// // Condition 2
// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// // Condition 3
// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// // Condition 4
// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// // Condition 5
// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// // Condition 6
// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// // Condition 7
// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// //  week 5 part three challenge 3
// let jop = "Designe"
// let salary = 0
// switch (jop) {
//     case "Manager":
//         salary = 8000
//         console.log(salary)
//         break;
//     case "IT":
//     case "Support":
//         salary = 6000
//         console.log(salary)
//         break;
//     case "Developer":
//     case "Designer":
//         salary = 7000
//         console.log(salary)
//         break;

//     default:
//         salary=4000
//         console.log(salary)
//         break;
// }

// //  week 5 part three challenge 4
// let holidays = 0
// let money = 0
// if (holidays == 0){
//     money = 5000
//     console.log(`my money is ${money}`)
// }
// else if (holidays == 1 || holidays == 2){
//     money = 3000
//     console.log(`my money is ${money}`)
// }
// else if (holidays == 3){
//     money = 2000
//     console.log(`my money is ${money}`)
// }

// //  week 5 part three assignment 1
// let day = "   wednesday  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday
// meanDay = day.trim().slice(0,1).toUpperCase() + day.trim().slice(1,day.length)
// if (meanDay == "Friday" || meanDay == "Saturday" || meanDay == "Sunday"   ) {
//     console.log("No Appointments Available")
// }
// else if (meanDay == "Monday" || meanDay == "Thursday" ) {
//     console.log( "From 10:00 AM To 5:00 PM")
// }
// else if (meanDay == "Tuesday") {
//     console.log( "From 10:00 AM To 6:00 PM")
// }
// else if (meanDay == "Wednesday") {
//     console.log( "From 10:00 AM To 7:00 PM")
// }
// else {
//     console.log( "Its Not A Valid Day") }

// // week 6 challenge 
// let zero = 0
// let counter = 3 
// let my=["Ahmed","Mazero","Elham","Osama","Mazero","Ameer"]
// my.pop()
// my.pop()
// console.log(my.reverse())
// el =(my.slice(-(my.indexOf("")),counter).reverse())[zero].slice(zero,counter - -(my.indexOf("")))
// zeroweb=(my.slice(-(my.indexOf("")),counter).reverse())[-(my.indexOf(""))].slice(counter - -(my.indexOf("")))
// console.log(el+zeroweb)
// ammer=my.slice(-1)
// o=zeroweb.slice(my.indexOf("")).toUpperCase()
// r=ammer.join()[ammer.join().length - -my.indexOf("")]
// console.log(r+o)

// // week 6 assingment 1
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(myFriends.indexOf("Ahmed"),myFriends.indexOf("Gamal"))); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends.pop()
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// // week 6 assingment 2
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// friends.shift()
// friends.pop()
// console.log(friends); // ["Eman", "Osama"]

// // week 6 assingment 3
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];
// console.log(finalArr.concat(arrOne,arrTwo).sort().reverse())

// // week 6 assingment 4
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
// console.log(words[website.length][0].slice(website.length)); // ZERO

// // week 6 assingment 5
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions
// if (haystack.indexOf(needle) != -1) {
//     console.log("Found")
// }
// if (haystack.lastIndexOf(needle) != -1) {
//     console.log("Found")
// }
// if (haystack.includes(needle)) {
//     console.log("Found")
// }

// // week 6 assingment 6
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];
// arr1.shift()
// arr1.shift()
// arr2.shift()
// arr2.shift()
// allArrs=allArrs.concat(arr1,arr2).sort().join("").toLowerCase()
// console.log(allArrs); // fxy

// // week 7 part one assingment 1
// let start = 10;
// let end = 100;
// let exclude = 40;
// for (let i = start; i < end; i = i + start) {
//     if (i == exclude) {
//         continue
//     }
//     console.log(i)
// }

// // week 7 part one assingment 2
// let start = 10;
// let end = 0;
// let stop = 3;
// for (let i = start; i > end; i--) {
//     if (i==10) {
//         console.log(`${i}`)
//     }else{
//         console.log(`0${i}`)
//     }
//     if (i== 3) {
//         break
//     }
    
// }

// // week 7 part one assingment 3
// let start = 1;
// let end = 6;
// let breaker = 2;
// for(let i = start ; i<end ; i++){
//     console.log(i)
//     for (let y = breaker; y < end; y+=breaker) {
//         console.log(`-- ${y}`)
//     }
// }

// // week 7 part one assingment 3
// let index = 10;
// let jump = 2;

// for (;;) {

//     if (index == 2) {
//     break
//     }
//     console.log(index)
//     index-= jump
// }

// // week 7 part one assingment 4
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// for (let i = letter.indexOf(letter); i < friends.length; i++) {
//     if (friends[i].toLowerCase().startsWith(letter)) {
//         continue
//     }
//     console.log(friends[i])
// }

// // week 7 part one assingment 6
// let start = 0;
// let swappedName = "elZerO";
// all=[]
// for (let i = start; i < swappedName.length; i++) {
//     if (swappedName[i] == swappedName[i].toLowerCase()) {
//         all.push(swappedName[i].toUpperCase())
//     }else{
//         all.push(swappedName[i].toLowerCase())
//     }}
// console.log(all.join(""))
// Output
// "ELzERo"

// // week 7 part one assingment 7
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for (let i = start; i < mix.length; i++) {
//     if (typeof mix[i] == "string" ) {
//         continue
//     }
//     if ( mix[i] == mix[start]) {
//         continue
        
//     }
//     console.log(mix[i])
// }

// // week 7 part two assingment 1
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let i = 0;
// let counter = 0;
// while( i < friends.length ){    
//     if (  typeof friends[i] !== "number" && !(friends[i].startsWith("A"))  ) {
//         counter++
//         console.log(`${counter} => ${friends[i]}`)
//     }
//     i++
// }
// // Output
// "1 => Sayed"
// "2 => Mahmoud"

// // week 7 challenge
// let admins= ["Ahmed", "Osama" , "Sayed" ,"Hsaam", "Stop","Samera"]
// let employees = ["Amgad" , "Sameh" , "Ammer","Hammed" , "Omar" , "Osman" , "Ayman" , "Samia"]
// anum=0
// for (let i = 0; i < admins.length; i++) {
//     if (admins[i] == "Stop") {
//         break
//     }
//     anum=i+1
// }
// document.write(`<div>We have ${anum} Admins</div>`)
// for (let i = 0; i < admins.length; i++) {
//     if (admins[i] == "Stop") {
//         break
//     }
//     document.write(`<div>The Admin For Team ${i+1} Is ${admins[i]}</div>`)
//     document.write(`<h3>Team Member</h3>`)
//     k=1
//     for (let y = 0; y < employees.length; y++) {
//         if (admins[i].startsWith(employees[y][0])) {
//             document.write(`<h3> ${k++} - ${employees[y]}</h3>`)
//         }
        
//     }
// }

// // week 8 assignment 1
// function sayHello(theName, theGender) {
//   if (theGender == "Male") {
//     console.log(`Hello Mr ${theName}`)
//   } else if (theGender == "Female") {
//     console.log(`Hello Miss ${theName}`)
//   }else{
//     console.log(`Hello ${theName}`)
//   }
// }
// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

// // week 8 assignment 2
// function calculate(firstNum, secondNum, operation) {
//     if (firstNum != undefined && secondNum != undefined) {
//         if (operation == "add" || operation == undefined) {
//         console.log(firstNum + secondNum)
//         }
//         if (operation == "subtract") {
//         console.log(firstNum - secondNum)
//         }
//         if (operation == "multiply") {
//         console.log(firstNum * secondNum)
//         }
//     }else if (firstNum == undefined){
//         console.log("First Number Not Found")
//     }
//     else if (secondNum == undefined){
//         console.log("Second Number Not Found")
//     }
// }
// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'subtract'); // -10
// calculate(20, 30, 'multiply'); // 600

// // week 8 assignment 3
// function ageInTime(theAge) {
//   if (theAge < 100 && theAge>10) {
//     console.log(`your age is ${theAge * 12} month`)
//     console.log(`your age is ${theAge * 12 *4} week`)
//     console.log(`your age is ${theAge * 12 *365 }day`)
//     console.log(`your age is ${theAge * 12 *365*24}hours`)
//     console.log(`your age is ${theAge * 12 *365*24*60} menets`)
//     console.log(`your age is ${theAge * 12 *365*24*60*60}second`)
//   }else {
//         console.log("Age Out Of Range")
//   }
// }
// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

// // week 8 assignment 4
// function checkStatus(a, b, c) {
//   if (typeof a === "string" && typeof b === "number" && typeof c === "boolean" ) {
//     if (c == true) {
//         console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`)
//     }else if (c == false){
//         console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`)
//     }
//   }
//   else if (typeof a === "string" && typeof c === "number" && typeof b === "boolean" ) {
//     if (b == true) {
//         console.log(`Hello ${a}, Your Age Is ${c}, You Are Available For Hire`)
//     }else if (b == false){
//         console.log(`Hello ${a}, Your Age Is ${c}, You Are Not Available For Hire`)
//     }
//   }
//   else if (typeof c === "string" && typeof b === "number" && typeof a === "boolean" ) {
//     if (a == true) {
//         console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`)
//     }else if (a == false){
//         console.log(`Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`)
//     }
//   }
//   else if (typeof b === "string" && typeof a === "number" && typeof c === "boolean" ) {
//     if (c == true) {
//         console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`)
//     }else if (c == false){
//         console.log(`Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`)
//     }
//   }
//   else if (typeof c === "string" && typeof a === "number" && typeof b === "boolean" ) {
//     if (b == true) {
//         console.log(`Hello ${c}, Your Age Is ${a}, You Are Available For Hire`)
//     }else if (b == false){
//         console.log(`Hello ${c}, Your Age Is ${a}, You Are Not Available For Hire`)
//     }
//   }
//   else if (typeof b === "string" && typeof c === "number" && typeof a === "boolean" ) {
//     if (a == true) {
//         console.log(`Hello ${b}, Your Age Is ${c}, You Are Available For Hire`)
//     }else if (a == false){
//         console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`)
//     }
//   }
// }
// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// // week 8 assignment 5
// function createSelectBox(startYear, endYear) {
//   document.write(`<select>`)
//   for (let i = startYear; i <= endYear; i++) {
//     document.write(`<option value="${i}">${i}</option>`)
//   }
//   document.write(`</select>`)
// }
// createSelectBox(2000, 2021);

// // week 8 assignment 6
// function multiply(...num) {
//     result=1
//     for (let i = 0; i < num.length; i++) {
//         if (typeof num[i] !== "number") {
//             continue
//         }
//         result *= parseInt(num[i])
//     }
//     console.log(result)
// }

// multiply(10, 20); // 200
// multiply("A", 10, 30); // 300
// multiply(100.5, 10, "B"); // 1000

//  week 8 challenge
// function checkStatus(a, b, c) {
//   if (typeof a === "string" && typeof b === "number" && typeof c === "boolean" ) {
//     if (c == true) {
//         console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`)
//     }else if (c == false){
//         console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`)
//     }
//   }
//   else if (typeof a === "string" && typeof c === "number" && typeof b === "boolean" ) {
//     if (b == true) {
//         console.log(`Hello ${a}, Your Age Is ${c}, You Are Available For Hire`)
//     }else if (b == false){
//         console.log(`Hello ${a}, Your Age Is ${c}, You Are Not Available For Hire`)
//     }
//   }
//   else if (typeof c === "string" && typeof b === "number" && typeof a === "boolean" ) {
//     if (a == true) {
//         console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`)
//     }else if (a == false){
//         console.log(`Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`)
//     }
//   }
//   else if (typeof b === "string" && typeof a === "number" && typeof c === "boolean" ) {
//     if (c == true) {
//         console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`)
//     }else if (c == false){
//         console.log(`Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`)
//     }
//   }
//   else if (typeof c === "string" && typeof a === "number" && typeof b === "boolean" ) {
//     if (b == true) {
//         console.log(`Hello ${c}, Your Age Is ${a}, You Are Available For Hire`)
//     }else if (b == false){
//         console.log(`Hello ${c}, Your Age Is ${a}, You Are Not Available For Hire`)
//     }
//   }
//   else if (typeof b === "string" && typeof c === "number" && typeof a === "boolean" ) {
//     if (a == true) {
//         console.log(`Hello ${b}, Your Age Is ${c}, You Are Available For Hire`)
//     }else if (a == false){
//         console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`)
//     }
//   }
// }
// // Needed Output
// checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// // week 9 challenge 1
// let names =  (...name) => `String [${name.join("] ,[")}] => Done !`
// console.log(names("Osama","Mohamed","Ali" , "Ibrahim"))

// // week 9 assingment 1
// let my= [20,50,10,60]
// let calc=(one,two,...nums)=>one+two+nums[my.indexOf("hgh")+true]
// console.log(calc(10,my[my.indexOf("lol")+true+true],my[my.indexOf("hgh")+true])) // 80
// week 9 assingment 1
// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     return `${zName.split(" ")[0]} ${zName.split(" ")[1][0].toUpperCase()}.`
//     // Osama Mohamed => Osama M.
//     // Ahmed ali => Ahmed A.
//   }
//   namePattern(zName)
//   function ageWithMessage(zAge) {
//      return `Your Age Is ${parseInt(zAge)}`
//     // 38 Is My Age => Your Age Is 38
//     // 32 Is The Age => Your Age Is 32
//   }
//   function countryTwoLetters(zCountry) {
//     return `You Live In ${zCountry.split("")[0].toUpperCase()}${zCountry.split("")[1].toUpperCase()}.`
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
//   }
//   countryTwoLetters(zCountry) 
//   function fullDetails() {
//     return namePattern(zName) + " , " + ageWithMessage(zAge) +" , "+ countryTwoLetters(zCountry)
//   }
//   return `${fullDetails()}`; // Do Not Edit This
// }
// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG
// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

// // week 9 assingment 2
// let itsMe =() => `Iam A Normal Function`;
// console.log(itsMe()); // Iam A Normal Function
// let urlCreate=(protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// // week 9 assingment 3
// let checker =(zName) =>  (status) =>  (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

// // week 9 assingment 4
// function specialMix(...data) {
//     let result = 0
//     for (let i = 0; i < data.length; i++) {
//         if (!(Number.isNaN(parseInt(data[i]))) ) {
//             result+=parseInt(data[i])
//         } 
//     }
//     if ( result === 0) {
//         result = `All Is Strings`
//     }
//     return result
// }
// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

// test
// let mix = "A13B2ZX"
// let mixcon= mix.split("").filter(function(el) {
//     return !(isNaN(parseInt(el)))
// }).map(function (el) {
//     return parseInt(el)*parseInt(el)
// }).join("")
// console.log(mixcon)

// // week 10 challenge 
// mystring="1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z"
// solution= mystring.split(",").filter(function(el) {
//     return isNaN(parseInt(el))
// }).map(function(el ) {
//     return el != "_" ? el:" "
// }).reduce(function(ele,el) {
//     return ele+el
// }).slice(true , mystring.indexOf(" "))
// console.log(solution)

// // week 10 assingment 1
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let elzero = mix.map(function (el) {
//     return isNaN(parseInt(el)) ? el : ""
// }).reduce(function (ele,el) {
//     return ele + el
// })
// console.log(elzero)
// // Elzero

// // week 10 assingment 2
// let myString = "EElllzzzzzzzeroo";
// elzero = myString.split("").filter(function (el,i,arr) {
//     return arr[i] != arr[i+1]
// }).join("")
// console.log(elzero)
// Elzero

// // week 10 assingment 3
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// elzero =myArray.reduce(function (ele,el) {
//     return ele+el
// }).split(",").join("")
// console.log(elzero)
// // Elzero

// // week 10 assingment 4
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// neg=numsAndStrings.filter(function(el) {
//     return !isNaN(parseInt(el))
// }).map(function (el) {
//     return -el
// })
// console.log(neg)
// // [-1, -10, 10, 20, -5, -3]

// // week 10 assingment 5
// let nums = [2, 12, 11, 5, 10, 1, 99];
// solve = nums.reduce(function (ele , el) {
//     return el % 2 == 1 ? ele + el : ele  * el 
// },1)
// console.log(solve)
// // 500

// // week 11 assingment 1
// member={
//     name:"Elzero",
//     age:38,
//     country:"Egypt",
//     fullDetails:function () {
//         return`My Name Is ${member.name}, My Age Is ${member["age"]}, I Live in ${member["country"]}`
//     }
// }
// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt

// // week 11 assingment 2
// // Method One
// // Create Your Object Here
// objMethodOne={
//     property:"Method One"
// }
// console.log(objMethodOne.property); // "Method One"
// // Method Two
// // Create Your Object Here
// objMethodTwo= new Object({
//     property:"Method Two"
// })
// console.log(objMethodTwo.property); // "Method Two"
// // Method Three
// // Create Your Object Here
// objMethodThree=Object.create({
//     property: "Method Three"
// })
// console.log(objMethodThree.property); // "Method Three"
// // Method Four
// // Create Your Object Here
// objMethodFour=Object.assign({
//     property: "Method Four"
// })
// console.log(objMethodFour.property); // "Method Four"

// // week 11 assingment 3
// let a = 1;
// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };
// let twoNums = {
//   e: 5,
//   f: 6,
// };
// finalObject=Object.assign({a},threeNums,twoNums)
// console.log(finalObject);
// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */

// // week 11 assingment 4
// // The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };
// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;
// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//   console.log(`The Publisher Is ${(Object.values(myFavGames)[i])["publisher"]}`);
//   console.log(`The Price Is ${(Object.values(myFavGames)[i])["price"]}`)
//   // Check If Nested Object Has Property (bestThree)
//   if ((Object.values(myFavGames)[i])["bestThree"] != undefined) {
//     console.log("- Game Has Releases");
//     console.log(`First => ${(Object.values(myFavGames)[i])["bestThree"]["one"]}`);
//     console.log(`Second => ${(Object.values(myFavGames)[i])["bestThree"]["two"]}`);
//     console.log(`Third => ${(Object.values(myFavGames)[i])["bestThree"]["three"]}`);
//   }
//   console.log("#".repeat(20));
// }
// // Ouput
// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"

// week 12 test
// for (let i = 0; i < 100; i++) {
//     let mainDiv=document.createElement("div")
//     let mainHeader = document.createElement("h1")
//     let header=document.createTextNode(`Project ${i+1}`)
//     let MainP=document.createElement("p")
//     let p=document.createTextNode("Project descripean")
//     document.body.appendChild(mainDiv)
//     mainDiv.appendChild(mainHeader)
//     mainDiv.appendChild(MainP)
//     mainHeader.appendChild(header)
//     MainP.appendChild(p)
//     mainDiv.style=`
//     background-color:#999;
//     border:1px solid ;
//     width:200px;
//     text-align:center;
//     color:white;
//     margin:10px auto;
// `
// }

// // week 12 assignment 1
// let elzero1 = document.getElementById("elzero")
// let elzero2 = document.getElementsByClassName("element")[0]
// let elzero3 = document.querySelector("[name='js']")
// let elzero4 = document.querySelector(".element")
// let elzero5 = document.querySelector("#elzero")
// let elzero6 = document.querySelector("div")
// let elzero7 = document.querySelectorAll("[name='js']")[0]
// let elzero8 = document.querySelectorAll(".element")[0]
// let elzero9 = document.querySelectorAll("#elzero")[0]
// let elzero10 = document.querySelectorAll("div")[0]
// let elzero11 = document.getElementsByTagName("div")[0]
// let elzero12 = document.getElementsByName("js")[0]
// let elzero13 = document.body.firstChild
// let elzero14 = document.body.firstElementChild
// let elzero15 = document.body.children[0]
// console.log(elzero1)
// console.log(elzero2)
// console.log(elzero3)
// console.log(elzero4)
// console.log(elzero5)
// console.log(elzero6)
// console.log(elzero7)
// console.log(elzero8)
// console.log(elzero9)
// console.log(elzero10)
// console.log(elzero11)
// console.log(elzero12)
// console.log(elzero13)
// console.log(elzero14)
// console.log(elzero15)

// // week 12 assignment 2
// imgs= document.images
// for (let i = 0; i < imgs.length; i++) {
//     imgs[i].setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
//     imgs[i].setAttribute("alt","Elzero Logo")
// }
// // week 12 assignment 3
// inp = document.querySelector('[type="number"]')
// div=document.querySelector(".result")
// console.log(inp.value)
// console.log(div)
// inp.onkeyup=function() {
//     console.log(inp.value)
//     div.innerHTML=` {${inp.value||0}} USD Dollar = {${((inp.value)*15.6).toFixed(2)}} Egyptian Pound`
// }
// <form action="">
//     <input type="number" name="dollar" value="0" placeholder="USD Dollar" />
//     <div class="result">{0} USD Dollar = {0} Egyptian Pound</div>
// </form>

// // week 12 assignment 4
// let onenum= document.body.children.length / document.body.children.length
// let divOne= document.body.firstElementChild
// let divTwo= document.body.children[onenum]
// One=divTwo.innerText
// Two= divOne.innerText
// classOne=divOne.className
// classTwo=divTwo.className
// divOne.title = classOne
// divTwo.title = classTwo
// divOne.innerText=One
// divTwo.innerText=`${Two} ${divOne.attributes.length}`
//<div class="one" title="two">Two</div>
//<div class="two" title="one">One</div>
//المطلوب 
//<div class="one" title="one">One</div>
//<div class="two" title="two">Two 2</div>

// // week 12 assignment 5
// imgs=document.images
// for (let i = 0; i < imgs.length; i++) {
//     if (imgs[i].hasAttribute("alt")) {
//         imgs[i].setAttribute("alt","Old")
//     }else{
//         imgs[i].setAttribute("alt","Elzero New")
//     }}
//<img decoding="async" src="#" alt="One" />
//<img decoding="async" src="#" />
//<img decoding="async" src="#" alt="Three" />
//<img decoding="async" src="#" />
//<img decoding="async" src="#" />
// المطلوب
//<img decoding="async" src="#" alt="Old" />
//<img decoding="async" src="#" alt="Elzero New" />
//<img decoding="async" src="#" alt="Old" />
//<img decoding="async" src="#" alt="Elzero New" />
//<img decoding="async" src="#" alt="Elzero New" />

// // // week 12 assignment 6
// let num=document.getElementsByClassName("input")[0]
// let des=document.getElementsByClassName("input")[1]
// let select=document.getElementsByTagName("select")[0]
// let div=document.getElementsByTagName("option")[0]
// let section=document.getElementsByTagName("option")[1]
// let submit=document.getElementsByName("create")[0]
// let result=document.getElementsByClassName("results")[0]
// submit.onclick = function (e) {
//     result.innerHTML=""
//     if (num.value != "" && des.value != "") {
//         for (let i = 0; i < num.value; i++) {
//         let createle = document.createElement((select.value).toLocaleLowerCase())
//         let info = document.createTextNode(des.value)
//         createle.appendChild(info)
//         result.appendChild(createle)
//         createle.style=`
//         background-color:red; 
//         margin:20px auto;
//         padding:10px 20px ;
//         color:white;
//         text-align:center`
//         createle.setAttribute("class","box")
//         createle.setAttribute("title","Element")
//         createle.setAttribute("id",`id-${i+1}`)
        
//     }
//     num.value == ""
//     des.innerHTML == ""
//     }
//     e.preventDefault() 
// }

// week 13 assignment 1
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Learn JavaScript</title>
    <script>
        window.addEventListener("load",function(e){
        a=document.links
        for (let i = 0; i < a.length; i++) {
            if (a[i].classList.contains("open") && a[i].textContent =="Elzero") {
                a[i].click()
            }   
        }
    })
    </script>
  </head>
  <body>
    <a class="open" href="https://google.com">Google</a>
    <a class="open" href="https://elzero.org">Elzero</a>
    <a class="not" href="https://facebook.com">Facebook</a>
    <a class="linked" href="https://linkedin.com">Elzero</a>
    <script src="main.js"></script>
  </body>
</html>
*/

// week 13 assignment 2
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn JavaScript</title>
    <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
      }
      .assign {
        text-align: center;
        padding-top: 20px;
      }
      .assign input {
        padding: 10px;
        width: 300px;
        border: 1px solid #ddd;
      }
      .assign input:focus {
        outline: none;
        border-color: #ccc;
      }
      .assign [title="Current"] {
        padding: 20px;
        margin: 10px auto;
        width: 610px;
        background-color: #f1f0f0;
      }
      .assign .classes-list {
        padding: 20px;
        margin: 10px auto;
        width: 610px;
        background-color: #f1f0f0;
      }
      .assign .classes-list h5 {
        margin: 0 0 10px;
        text-align: left;
      }
      .assign .classes-list div span {
        background-color: #ff5722;
        padding: 6px 10px 8px;
        margin-right: 5px;
        border-radius: 6px;
        color: white;
        display: inline-flex;
      }
    </style>
  </head>
  <body>
    <div class="assign">
      <input type="text" class="classes-to-add" placeholder="Add Classes" />
      <input type="text" class="classes-to-remove" placeholder="Remove Classes" />
      <div class="element current" title="Current">Current Element</div>
      <div class="classes-list">
        <h5>Current Element Class Lists</h5>
        <div></div>
      </div>
    </div>
    <script src="main.js"></script>
  </body>
</html>
*/
// let parent=document.querySelector(".assign")
// let add=document.querySelector(".classes-to-add")
// let remove=document.querySelector(".classes-to-remove")
// let current=document.querySelector('[title="Current"]')
// let div=document.querySelector(".classes-list")
// let creatDiv=div.lastElementChild

// let noDin=document.createElement("P")
// let des=document.createTextNode("No Elements")
// noDin.appendChild(des)

// if (Array.from(creatDiv.children).length == 0 ) {
//   div.append(noDin)
// }

// add.addEventListener("blur",function () {
//   if (add.value!= "") {
//       let many = add.value.split(" ")
//       for (let i = 0; i < many.length; i++) {
//         if (many[i] !== " " && many[i] !== "" ) {
//           creatDivIn = document.createElement("span")
//           creatNode=document.createTextNode(many[i])
//           creatDivIn.className=many[i]
//           creatDivIn.append(creatNode)
//           creatDiv.appendChild(creatDivIn)
//           current.classList.add(many[i])
//         }
//       }
//       add.value = ""
//     }
//     if (Array.from(creatDiv.children).length == 0 ) {
//     div.append(noDin)
//     }else{
//       noDin.remove()
//     }
// })
// remove.addEventListener("blur",function () {
//   let many = remove.value.split(" ")
//   if (remove.value!= "") {
//       Array.from(creatDiv.children).forEach (e => {
//         for (let i = 0; i < many.length; i++) {
//           if (many[i] !== " " && many[i] !== "" ) {
//             if (e.className ==  many[i]) {
//               e.remove()
//               current.classList.remove(many[i])
//             }
//           }   
//         }
//       });

//       if (Array.from(creatDiv.children).length == 0 ) {
//         div.append(noDin)
//       }else{
//         noDin.remove()
//       }
//   }
//   remove.value = ""
//   })

// // week 13 assignment 3
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn JavaScript</title>
  </head>
  <body>
    <div class="our-element">Our Element</div>
    <p>Paragraph</p>
    <script src="main.js"></script>
  </body>
</html>
*/
// let p = document.getElementsByTagName("p")[0]
// p.remove()
// let div=document.getElementsByClassName("our-element")[0]
// let stertele=document.createElement("div")
// let nodestart = document.createTextNode("Start")
// stertele.appendChild(nodestart)
// stertele.setAttribute("class","start")
// stertele.setAttribute("title","Start Element")
// stertele.setAttribute("data-value","Start")
// document.body.prepend(stertele)
// let endele=document.createElement("div")
// let nodeend = document.createTextNode("End")
// endele.appendChild(nodeend)
// endele.setAttribute("class","end")
// endele.setAttribute("title","End Element")
// endele.setAttribute("data-value","End")
// document.body.append(endele)

// // week 13 assignment 4
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn JavaScript</title>
  </head>
  <body>
    <div>
      <span>Hello</span>
      <!-- We Need The Next Text Without Spaces -->
      Elzero
    </div>
    <script src="main.js"></script>
  </body>
</html>
*/
// let div=document.getElementsByTagName("span")[0]
// console.log(div.nextSibling.nextSibling.nextSibling)

// // week 13 assignment 5
/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn JavaScript</title>
  </head>
  <body>
    <div>
      <div>Element</div>
      <span>Element</span>
      <p>Element</p>
      <article>Element</article>
      <section>Element</section>
    <script src="main.js"></script>
  </body>
</html>*/
// window.addEventListener("click",function (e) {
//   console.log(`This is ${e.target.tagName}`)
// })

// // week 13 challenge
// document.body.style=`
// margin:0px;
// padding:0px;
// `
// // Start Header 
// let header= document.createElement("header")
// document.body.append(header)
// header.style=`
// padding:5px 10px;
// `
// let container = document.createElement("div")
// header.append(container)
// container.style=`
// display:flex;
// justify-content: space-between;
// align-items:center
// `
// let h2 = document.createElement("h2")
// h2.style.color="green"
// let logo = document.createTextNode("Elzero")
// h2.append(logo)
// container.append(h2)
// let ul = document.createElement("ul")
// ul.style=`
// display:flex;
// `
// container.append(ul)
// for (let i = 0; i < 4; i++) {
//   let li = document.createElement("li")
//   li.style=`
//   list-style-type:none;
//   margin-left:10px;
//   cursor:pointer
//   `
//   ul.append(li)
// }
// let home = document.getElementsByTagName("li")[0]
// home.setAttribute("class","home")
// let servies = document.getElementsByTagName("li")[1]
// servies.setAttribute("class","servies")
// let about = document.getElementsByTagName("li")[2]
// about.setAttribute("class","about")
// let contact = document.getElementsByTagName("li")[3]
// contact.setAttribute("class","contact")
// let homeText=document.createTextNode("Home")
// let serviesText=document.createTextNode("Servies")
// let aboutText=document.createTextNode("About")
// let contactText=document.createTextNode("Contact")
// home.append(homeText)
// servies.append(serviesText)
// about.append(aboutText)
// contact.append(contactText)
// // Start Nav
// let nav = document.createElement("ccc")
// nav.style=`
// background-color:#eee;
// padding:20px;
// display: grid; 
//   gap: 10px 20px;
//   grid-template-columns: repeat(auto-fit,minmax(300px , 1fr));
// `
// document.body.append(nav)
// for (let i = 0; i < 15; i++) {
//   let box = document.createElement("div")
//   box.style=`
//   background-color:white;
//   text-align:center
//   `
//   let navh2 = document.createElement("h2")
//   let navh2text=document.createTextNode(`Project ${i+1}`)
//   navh2.append(navh2text)
//   let p= document.createElement("p")
//   let des = document.createTextNode("This is Project")
//   p.append(des)
//   box.append(navh2)
//   box.append(p)
//   nav.append(box)
// }
// // Start Footer
// footer=document.createElement("footer")
// footerdes=document.createTextNode("CobyRight 2021")
// footer.append(footerdes)
// footer.style=`
// background-color:green;
// color:white;
// text-align:center;
// font-weight:bold;
// font-size:20px;
// over-flow:hidden;
// padding:20px;
// `
// document.body.append(footer)

// // week 14 assignment 1
// let prom = window.prompt("type numper form x to x ")
// let peo = prom.trim().split("-").map(function (el) {
//   return !isNaN(parseInt(el)) ? el : ""
// })
// if (peo[0] > peo[1]) {
//   for (let i = peo[1]; i <= peo[0]; i++) {
//   console.log(i)
// }
// }
// if (peo[0] < peo[1]) {
//   for (let i = peo[0]; i <= peo[1]; i++) {
//   console.log(i)
// }}

// // week 14 assignment 2
// span=document.querySelector("span")
// div=document.querySelector("div")
// let close = span.onclick=function () {
//   div.style.display="none"
// }
// setTimeout(function () {
//   div.style.display="block"
// },5000)
/*    <div>
      <span>x</span>
      <h2>Welcome</h2>
      <p>Welcome To Elzero Web School</p>
    </div>*/

// // week 14 assignment 3
// div=document.querySelector("div")
// setInterval(function () {
//   if (div.innerHTML != "0") {
//     div.innerHTML-=1
//   }
// },1000)
//     <div>
//       10
//     </div>

// // week 14 assignment 4
// div=document.querySelector("div")
// setInterval(function () {
//   if (div.innerHTML != "0") {
//     div.innerHTML-=1
//   }
//   if (div.innerHTML == "0") {
//     location.href="https://elzero.org"
//   }
// },1000)
//     <div>
//       10
//     </div>

// // week 14 assignment 5
// div=document.querySelector("div")
// setInterval(function () {
//   if (div.innerHTML != "0") {
//     div.innerHTML-=1
//   }
//   if (div.innerHTML == "7") {
//     window.open("https://elzero.org/","_blank","width=200,height=200 ,top=100, right=50")
//   }
// },500)
//     <div>
//       10
//     </div>

// week 15 test
// let ul= document.getElementsByTagName("ul")[0]
// let lis= document.getElementsByTagName("li")
// let div=document.getElementsByTagName("div")[0]
// if (window.localStorage.color != "") {
//     div.style.backgroundColor=window.localStorage.color
//     for (let i = 0; i < Array.from(lis).length; i++) {
//       Array.from(lis)[i].classList.remove("active")
//       if (window.localStorage.color == Array.from(lis)[i].id) {
//         Array.from(lis)[i].classList.add("active")
//       }
//     }
// }
//   Array.from(lis).forEach(e => {
//   e.onclick=function () {
    
//     for (let i = 0; i < Array.from(lis).length; i++) {
//       Array.from(lis)[i].classList.remove("active")
//     }
//     e.classList.add("active")
//     div.style.backgroundColor=window.localStorage.color=e.id
//   }
// });

// // week 15 assignment 1
// let sel = document.getElementById("sel")
// let color = document.getElementById("color")
// let font = document.getElementById("font")
// let savedFontFamily = window.localStorage.getItem("fontFamily");
// let savedcolor = window.localStorage.getItem("color");
// let savedFontSize = window.localStorage.getItem("fontSize");
// if (savedFontFamily) {
//   sel.value = savedFontFamily
// }
// if (savedcolor) {
//   color.value = savedcolor 
// }
// if (savedFontSize) {
//   font.value = savedFontSize
// }
// sel.onchange = function(){
//   window.localStorage.setItem("fontFamily",sel.value)
// }
// color.onchange = function(){
//   window.localStorage.setItem("color",color.value)
// }
// font.onchange = function(){
//   window.localStorage.setItem("fontSize",font.value)
// }
/*        <select name="sel" id="sel">
        <option value="cairo">Cairo</option>
        <option value="open-sans">Open Sans</option>
        <option value="roboto">Roboto</option>
      </select>
      <select name="color" id="color">
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="gray">gray</option>
        <option value="yellow">yellow</option>
        <option value="pink">pink</option>
      </select>
      <select name="font" id="font">
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>
        <option value="32">32</option>
      </select> */

// // week 15 assignment 2
// let savedname = window.sessionStorage.getItem("name");
// let savedcolor = window.sessionStorage.getItem("color");
// let savedFont = window.sessionStorage.getItem("font");
// let savedselect = window.sessionStorage.getItem("select");
// let name=document.getElementById("name")
// let color=document.getElementById("color")
// let font=document.getElementById("font")
// let select=document.getElementById("select")
// if (savedname) {
//   name.value = savedname
// }
// if (savedcolor) {
//   color.value = savedcolor
// }
// if (savedFont) {
//   font.value = savedFont
// }
// if (savedselect) {
//   select.value = savedselect
// }
// name.onblur=function () {
//   window.sessionStorage.setItem("name",name.value)
// }
// color.onblur=function () {
//   window.sessionStorage.setItem("color",color.value)
// }
// font.onblur=function () {
//   window.sessionStorage.setItem("font",font.value)
// }

//  select.onchange = function(){
//    window.sessionStorage.setItem("select",select.value)
//  }
/*
      <form>
        <input type="text" name="" id="name">
        <input type="text" name="" id="color">
        <input type="text" name="" id="font">
      </form>
      <select name="" id="select">
        <option value="number1">number1</option>
        <option value="number2">number2</option>
        <option value="number3">number3</option>
        <option value="number4">number4</option>
        <option value="number5">number5</option>
      </select>
*/

// // week 15 challenage
// container = document.querySelector(".container")
// form = document.querySelector(".form")
// input = document.querySelector(".input")
// add = document.querySelector(".add")
// tasks = document.querySelector(".tasks")
// if (window.localStorage.getItem("folder")) {
//   tasks.innerHTML = window.localStorage.getItem("folder")
// }
// function creat() {
//   let mainEle = document.createElement("div")
//   let ele = document.createElement("div")
//   let del = document.createElement("button")
//   del.innerHTML="Delete"
//   del.classList.add("del")
//   let info = document.createTextNode(input.value)
//   ele.appendChild(info)
//   mainEle.appendChild(ele)
//   mainEle.appendChild(del)
//   tasks.appendChild(mainEle)
// }
// add.addEventListener("click",function () {
//   creat() 
//   window.localStorage.setItem("folder",tasks.innerHTML)
//   input.value=""
//   input.focus()
// })
// document.addEventListener("click",function (e) {
//   if (e.target.className == "del") {
//     e.target.parentNode.remove()
//     window.localStorage.setItem("folder",tasks.innerHTML)
//   }
// })
/*
    <div class="container">
      <div class="form">
        <input type="text" name="" class="input">
        <input type="submit" name="" class="add">
      </div>
      <div class="tasks"></div>
    </div>
*/

// // week 16 assignment 1
// let myNumbers = [1, 2, 3, 4, 5];
// let [a , , , , e]= myNumbers
// console.log(a * e); // 5

// // week 16 assignment 2
// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// let [a , b , c , [d , e ,[f , g]]]=mySkills
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// // week 16 assignment 3
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// let arr4 = arr1.concat(arr2,arr3).reverse()
// let [b, a , , , , , , , c]= arr4
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// // My Best Friends: Shady, Mahmoud, Ahmed

// // week 16 assignment 4
// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };
// let {age :a ,working:w , country:c , hobbies:[h1, , h3] }= member
// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// // My Age Is 30 And Iam Not Working
// console.log(`I Live in ${c}`);
// // I Live in Egypt
// console.log(`My Hobbies: ${h1} And ${h3}`);
// // My Hobbies: Reading And Programming

// // week 16 assignment 5
// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };
// let o = Object.keys(game.releases)[0]
// let a = Object.keys(game.releases)[1]
// let {
//   title:t ,
//   developer:d ,
//   releases:{"Oath In Felghana" :[u,j]} ,
//   releases:{"Ark Of Napishtim" :{US:u_price,JAP:j_price},Origin:or}
// }= game
// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style
// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games
// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan
// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim
// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD
// console.log(`${a} Price in Japan Is ${j_price}`);
// // Ark Of Napishtim Price in Japan Is 10 USD
// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD

// // week 16 assignment 6
// let chosen = 1;
// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];
// let [{title , age , available , skills:[html , css]}
//     ,{title:title1 ,age: age1 , available:available1 , skills:[html1 , css1]}
//     ,{title:title2 ,age: age2 , available:available2 , skills:[html2 , css2]}
//   ] = myFriends
// // If chosen === 1
// if (chosen == 1) {
//   [{title , age , available , skills:[html , css]}, , ] = myFriends
// }else if (chosen == 2) {
//     [,{title , age , available , skills:[html , css]} , ] = myFriends
// }
// else if (chosen == 3) {
//     [,,{title , age , available , skills:[html , css]}  ] = myFriends
// }
// console.log(`${title}`)
// console.log(`${age}`)
// console.log(available == true ?"Available":"Not Available")
// console.log(`${css}`)
// "Osama"
// 39
// "Available"
// "CSS"
// // If chosen === 2
// "Ahmed"
// 25
// "Not Available"
// "Django"
// // If chosen === 3
// "Sayed"
// 33
// "Available"
// "Laravel"

// // week 17 assignment 1
// setOfNumbers = new Set([10])
// setOfNumbers.add(20).add(setOfNumbers.size)
// console.log(setOfNumbers)
// console.log(Array.from(setOfNumbers)[setOfNumbers.size - 1])

// // week 17 assignment 2
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log(Array.from(new Set(myFriends)).sort())

// // week 17 assignment 3
// let myInfo = {
//   username: "Osama",
//   role: "Admin",
//   country: "Egypt",
// };
// let infomap = new Map(Object.entries(myInfo))
// console.log(infomap)
// console.log(infomap.size)
// console.log(infomap.has("role"))
// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

// // week 17 assignment 4
// let theNumber = 100020003000;
// console.log(+([...new Set(theNumber + "")].sort().join("").slice(true))); //123
// // Needed Output
// // 123

// // week 17 assignment 5
// let theName = "Elzero";
// console.log([...theName])
// console.log(theName.split(""))
// console.log(Array.from(theName))
// let myStringg = "Elzero";
// let arrFour = Object.assign([], myStringg);
// console.log(arrFour);
// let myString = "Elzero";
// let arrFive = [];
// for (let i = 0; i < myString.length; i++) {
//   arrFive.push(myString[i]);
// }
// console.log(arrFive); // ["E", "l", "z", "e", "r", "o"]
// // Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']

// // week 17 assignment 6
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// numbers = []
// strings= []
// chars.forEach(e=>typeof e == "number"? numbers.push(e):strings.push(e))
// all = [...numbers , ...strings]
// console.log((all.copyWithin(0,numbers.length,numbers.length+numbers.length)))
// // Needed Output
// // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

// // week 17 assignment 7
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// all =numsOne.concat(numsTwo)
// all1 = [...numsOne , ...numsTwo]
// all2 = Array.from(numsOne) + "," + Array.from(numsTwo)
// console.log(all)
// console.log(all1)
// console.log(all2.split(",").map(e=>+e))
// // Needed Output
// // [1, 2, 3, 4, 5, 6]

// // week 17 assignment 8
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log(eval(n1.join("+"))*n2.length)  حل اخر
// console.log((n1.concat(n2)).length * new Set(n1).size * Math.min(...n1))
// Needed Output
// 210

// // week 18 assignment 1
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// rx = /\d+:\w{2}\d:\d+:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ 
// console.log(ip.match(rx))

// // week 18 assignment 2
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// rx=/Os\d*O/g
// console.log(specialNames.match(rx))
// // Output
// // ['Os10O', 'OsO', 'Os100O']

// // week 18 assignment 3
// let phone = "+(995)-123 (4567)";
// rx=/\+\(\d{3}\)-\d{3}\s\(\d{4}/ 
// console.log(phone.match(rx))

// // week 18 assignment 4
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// // week 18 assignment 5
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";
// let re = /\d{2}(\/|\s*|-)?(\/|\s*|-)?(\/|\s*|-)?\d{2}(\/|\s*|-)?(\/|\s*|-)?(\/|\s*|-)?\d+/
// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"

// // week 18 assignment 6 and challenge
// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';
// let re = /(https?:\/\/)?\w+.\w+.\w+(:\d+\/\w+.\w+\?\w{2}=\d+&\w+=\w+)?/g;
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));

// // test
// class Name {
//   #a
//   constructor(id,age) {
//     this.i = id
//     this.#a=age
//   }
//   sayAge(){
//     return this.#a
//   }
// }
// class NewName extends Name {
//   constructor(id , age ) {
//     super(id,age)
//   }
// }
// username = new Name("Alaa Hany",26)
// newusername = new NewName("Alaa Hany",26)
// console.log(username.i)
// console.log(username.age)
// console.log(username.sayAge())
// console.log("#########")
// console.log(newusername.i)
// console.log(newusername.age)
// console.log(newusername.sayAge())

// // week 19 assignment 1
// class Cars {
//   constructor(name, model, price){
//     this.n = name;
//     this.m = model;
//     this.p = price;
//   }
//   run(){
//     return`Car Is Running Now`
//   }
//   stop(){
//     return`Car Is Stopped`
//   }
// } 
// let mar = new Cars ("mar", 2026 , 20_000)
// let che = new Cars ("che", 2025 , 30_000)
// let toy = new Cars ("toy", 2024 , 40_200)
// console.log(`"Car One Name Is ${mar.n} And Model Is ${mar.m} And Price Is ${mar.p}"`)
// console.log(mar.run())
// // Needed Output
// // "Car One Name Is MG And Model Is 2022 And Price Is 420000"
// // "Car Is Running Now"

// // week 19 assignment 2
// class Phone {
//   constructor(name, serial, price) {
//     this.name = name;
//     this.serial = serial;
//     this.price = price;
//   }
// }
// class Tablet extends Phone{
//   constructor(name, serial, price,size){
//     super (name, serial, price)
//     this.size = size||"UnKnown"
//   }
//   fullDetails(){
//     return`${this.name} serial is ${this.serial} and size is ${this.size}`
//   }
// }
// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);
// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9
// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5
// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown

// // week 19 assignment 3
// // Edit The Class
// class User {
//   #u
//   #c
//   constructor(username, card) {
//     this.#u = username;
//     this.#c = card.toString().replace(/(\d{4})(\d{4})(\d{4})(\d{4})/,"$1-$2-$3-$4");
// }
//   get showData() {
//     return `${this.#u} Osama Your Credit Card Number Is ${this.#c}`
// }
// }
// // Do Not Edit Anything Below
// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);
// console.log(userOne.showData);
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
// console.log(userTwo.showData);
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
// console.log(userThree.showData);
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined

// // week 19 assignment 4
// // Do Not Edit Below
// let myStr = "Elzero";
// String.prototype.addLove=function () {
//   return `I Love ${myStr} Web School`
// }
// console.log(myStr.addLove()); // I Love Elzero Web School

// // week 19 assignment 5
// const myObj = {
//   username: "Elzero",
//   id: 100,
//   score: 1000,
//   country: "Egypt",
// };
// Object.defineProperties(myObj,{
//   username:{
//     writable:false,
//     enumerable:true,
//     configurable:true
//   },
//   id:{
//     writable:true,
//     enumerable:false,
//     configurable:true
//   },
//   score:{
//     writable:false,
//     enumerable:false,
//     configurable:false
//   },
//   country:{
//     writable:false,
//     enumerable:false,
//     configurable:true
//   }
// }
// )
// delete myObj.country
// myObj.score = 500;
// for (let prop in myObj) {
//   console.log(`${prop} => ${myObj[prop]}`);
// }
// console.log(myObj);
// // Needed Output
// // "username => Elzero"
// // "score => 1000"
// // {username: 'Elzero', score: 1000, id: 100}

// // week 20 assignment 1
// let date = new Date("2000 1 21")
// let now = new Date()
// bearth = now - date
// console.log(date)
// console.log(now)
// console.log(bearth/1000)
// console.log(bearth/1000/60)
// console.log(bearth/1000/60/60)
// console.log((bearth/1000/60/60/24).toFixed())
// console.log((bearth/1000/60/60/24/356).toFixed())

// // week 20 assignment 2
// let date = new Date(1980,0,1,00,00,01)
// console.log(date)

// // week 20 assignment 3
// let date = new Date()
// date.setDate(0)
// console.log(date)
// console.log(date.getMonth())
// for (let i = 0; i < 12; i++) {
//   if (date.getMonth() == i) {
//     console.log(`Previous Month Is Jan And Last Day Is ${date.getDate()}`)
//   }
// }
// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

// // week 20 assignment 4
// console.log(new Date(2000, 0 ,1))
// console.log(new Date("2000/1/1"))
// console.log(new Date(946677600000))

// // week 20 assignment 5
// let start  = performance.now()
// for (let i = 0; i <= 999; i++) {
//   console.log(i)
// }
// let end = performance.now()
// let resulte = (end-start).toFixed()
// console.log(`"Loop Took ${resulte} Milliseconds."`)

// // week 20 assignment 6
// function* gen() {
//   let i = 0
//   while (true) {
//    yield i++
//   }
// }
// // Write Your Generator Function Here

// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}

// // week 20 assignment 7
// function* genNumbers() {
//   yield* [1, 2, 2, 2, 3, 4, 5];
// }
// function* genLetters() {
//   yield* ["A", "B", "B", "B", "C", "D"];
// }
// function* genAll(){
//   yield* new Set(genNumbers())
//   yield* new Set(genLetters())
// }
// let generator = genAll();
// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}

// // week 20 assignment 8
// From mod-one.js
// export default  function (a,b,c) {
//     return a+b+c
// }
// From mod-two.js
// let a = 10; 
// let b = 20; 
// let c = 30;
// export {a as numOne, b as numTwo , c as numThree}
// // main.js File
// import calc from "./mod-one.js"
// import  * as modOne from "./mod-two.js"
// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
// // mod-two.js File
// let a = 10; // Do Not Edit Names
// let b = 20; // Do Not Edit Names
// let c = 30; // Do Not Edit Names

// weak 21 assinment 1&2
// let newdata = new XMLHttpRequest()
// newdata.open("GET",'http://127.0.0.1:5500/articles.json')
// newdata.send()
// newdata.onload= function (){
//     if (newdata.readyState ==4 && newdata.status == 200) {     
//         console.log(newdata.responseText)
//         console.log("Data Loaded")
//     }
// }

// weak 21 assinment 3
// let newdata = new XMLHttpRequest()
// newdata.open("GET",'http://127.0.0.1:5500/articles.json')
// newdata.send()
// newdata.onload= function (){
//     let mainData=JSON.parse(newdata.responseText)
//     for (let i = 0; i < mainData.length; i++) {
//         mainData[i].secton="All"
//     }
//     console.log(mainData)
//     let updatedData=JSON.stringify(mainData)
//     console.log(updatedData)
// }

// weak 21 assinment 4 
// let newdata = new XMLHttpRequest()
// newdata.open("GET",'http://127.0.0.1:5500/articles.json')
// newdata.send()
// newdata.onload= function (){
//     let mainData=JSON.parse(newdata.responseText)
//     let dataDiv=document.createElement("div")
//     dataDiv.id="data"
//     document.body.appendChild(dataDiv)
//     for (let i = 0; i < mainData.length; i++) {
//        let mainContent=`
//         <div>
//         <h2>${mainData[i].name}</h2>
//         <p>${mainData[i].id}</p>
//         <p>${mainData[i].title}</p>
//         <p>${mainData[i].secton}</p>
//         </div>
//     ` 
//         dataDiv.innerHTML+=mainContent
//     }
// }

// // weak 22 assinment 1
// let newdata = new XMLHttpRequest()
// newdata.open("GET",'http://127.0.0.1:5500/articles.json')
// newdata.send()
// newdata.onload=function () {
//     let jsondata= JSON.parse(newdata.responseText)
//     jsondata.length = 5
//     console.log(jsondata)
//     for (let i = 0; i < jsondata.length; i++) {
//         let div=document.createElement("div")
//         let des=`
//         <h3>${jsondata[i].title}</h3>
//         <p>${jsondata[i].description}</p>
//         `
//         div.innerHTML+=des
//         document.body.appendChild(div)
//     }
//     let mypromise = new Promise(()=>{
//         (reso)=>{},
//         (rej)=>{}
//     })
// }

// // weak 22 assinment 
// let newdata = fetch("http://127.0.0.1:5500/articles.json").then(
//     (res)=>{
//         let mtData=  res.json()
//         return mtData
//     }
// ).then((result)=>{
//         result.length=5
//         for (let i = 0; i < result.length; i++) {
//         let div=document.createElement("div")
//         let des=`
//         <h3>${result[i].title}</h3>
//         <p>${result[i].description}</p>
//         `
//         div.innerHTML+=des
//         document.body.appendChild(div)
//     }
// })

// Thanks Osama Elzero