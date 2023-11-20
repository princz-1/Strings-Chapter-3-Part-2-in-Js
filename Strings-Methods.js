/* String Methods in JavaScript
- These are built-in functions to manipulate a string

*/
// upperCase
let Name = "Prince"
Name = Name.toUpperCase();
console.log(Name);


// LowerCase Method
let str = "PRINCE"
str = str.toLowerCase();
console.log(str);


// trim Method
let str2 =  "  Prince  Panchal     " //Remove White spaces
console.log(str2.trim())


// slice Method
let str3 = "01234567"; //Return part of string
console.log(str3.slice(1,6)) // 12345

let str4 = "Prince"
console.log(str4.slice(0,4)) // Prin

let str5 = "Prince"
console.log(str5.slice(3)) // nce

// Concatenation Method
let str6 = "Prince"
let str7 = "Panchal"
let res = str6.concat(str7)
console.log(res)
console.log(str6 + str7)


// Replace Method
let str8 = "Hello"
console.log(str8.replace("lo","p")) //Help


// ReplaceAll Method
let str9 = "Hellololo"
console.log(str9.replaceAll("lo","p")) //Helppp


// Character At Method
let str10 = "Prince"
console.log(str10.charAt(0)) // P



