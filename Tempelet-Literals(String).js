/* Template Literals
- A way to have embedded expression in strings

      `this is a template literals`
      
      --->String Interpolation<---
      - To create strings by doing substitution of placeholders
  -->Syntax
  `string text${expression}string text`
  */

let sum = `the sum is ${1+2+3}`
console.log(sum)

let obj = {
  item : "pen",
  price : 10,
};
// console.log("the cost of",obj.item,"is",obj.price,"rupees")
let output = `the cost of ${obj.item} is ${obj.price} rupees`
console.log(output)

