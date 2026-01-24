//? Operator => Symbols + - * /
//? Operands => "X + Y" > Here x and y are operands
//? Expression => অপারেটর এবং অপারেন্ডের সমষ্টি, যা দিনশেষে একটি উত্তর (Result/Value) তৈরি করে।
// ----------------------------------------------------------------------------------------------

//! Operators:
// ------------>
//? 1. Arithmetic Opreators 
//? 2. Assignment Opreators
//? 3. Comparison Opreators
//? 4. Logical Opreators
// ---------------------------
//? 7. Conditional Opreators
// ----------------------------

//! 1. Arithmetic Operator:
// ----------------------
let x = 4;
let y = 2;

console.log(x + y) // Addition Operator
console.log(x - y) // Subtraction Operator
console.log(x * y) // Multiplication Operator
console.log(x / y) // Division Operator
console.log(x ** y) // Exponentiation Operator
console.log(x % y) // Modulus Operator / remainder operator

//? Unary Operator
// ------------------
// 1. Post-Increment (x++) / (x--): 
// 2. Pre-Increment (++x) / (--x):
//? Example:
// ----------
let count = 5;
// Post-Increment
console.log(count++) // count = count + 1
console.log(count) // Output: 6
// Pre-Increment
console.log(++count) // Output: ?


//?---------------------------------------------------

//! 2. Assignment Opreators:
let w = 10;
w += 5; // w = w + 5 => (15)
w -= 3; // w = w - 3 => (12)
w *= 2; // w = w * 2 => (24)
w /= 4; // w = w / 4 => (6)

//?----------------------------------------------------

//! 3. Comparison Opreators:
// Equal To == 
// Strict Equal ===
// Not Equal != 
// Strict Not Equal !==       //?   {এরা কি আলাদা?}
// Greater then > 
// Less then < 
// Greater or Equal >=
// Less or Equal <=


let obj1 = {age: 23};
let obj2 = {age: 23};
// console.log(obj1 === obj2); // False
//? এইটা আসলো কেনো ?
// Primitive (Number/String): ভ্যালু বা মান চেক করে। (5 === 5 ✅)
// Object/Array: মেমোরি রেফারেন্স বা ঠিকানা চেক করে। ({a:1} === {a:1} ❌)

let num3 = 4;
let num5 = '4';
console.log(num3 !== num5)
//:  !== (Strict Not Equal): এরা কি আলাদা? (কিছু একটা অমিল থাকলেই True)।



//! 4. Logical Opreators 
//?    &&  ||  ??  !


// ?  And && Operator
// "সবাই সত্য (True) হলে আমি সত্য। আর একজনও মিথ্যা (False) হলে আমি মিথ্যা।"
console.log(false && false); // false
console.log(true && false); // false
console.log(true && true); // true
console.log(false && false); // false


// বাম পাশ True হলে --> ডান পাশেরটা উত্তর। 
// বাম পাশ False হলে --> বাম পাশেরটাই উত্তর (ডানে আর তাকাবেই না)।
console.log("Shihab" && "Hasan"); // Hasan
console.log(false && "Shihab"); // false
console.log("" && "Mango"); //  "" (খালি স্ট্রিং)
// (কারণ: খালি স্ট্রিং "" হলো False। নিয়ম অনুযায়ী বাম পাশ False হলে ওটাই উত্তর।)
console.log(0 && 500); // 0
// (কারণ: 0 হলো False। তাই সে 500 এর দিকে তাকায়নি, 0 কেই প্রিন্ট করেছে।)


//? Or || Operator
// যেকোনো একজন সত্য (True) হলেই আমি সত্য। সবাই মিথ্যা (False) হলে তবেই আমি মিথ্যা।"
console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true

console.log("Ali" || "baba"); // Ali


//? Logical Not ! Operator
// "সত্যকে আমি মিথ্যা বানাই, আর মিথ্যাকে বানাই সত্য।"
// যেমন: true -> !true (false) -> !!true (true)।


//? Conditional Ternary Operator
// কন্ডিশন ? (সত্য হলে এটা) : (মিথ্যা হলে ওটা);

// For Example: 
let age = 18;
let massage;

if (age >= 18) {
    message = "You can vote";
} else {
    message = "You are too Young.."
}
console.log(message);

//? Ternary Operator

message = age >= 18 ? "You Can Vote" : "You Are too young..";
console.log(message); 