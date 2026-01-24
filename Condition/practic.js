/* ===================================================
   JAVASCRIPT PRACTICE PROBLEMS (PART 1: BANGLA)
   Topic: If-else, Nested conditions, Logical Operators
   ---------------------------------------------------
   নির্দেশনা: নিচের সমস্যাগুলো তোমার দেওয়া ছবির স্টাইলে 
   সাজানো হয়েছে। প্রতিটি প্রশ্নের নিচে কোড লেখো।
   =================================================== */

/**
 * PROBLEM 01: Free Drinks (ফ্রি ড্রিংকস)
 * * গল্প: তুমি বার্গার শপে গেছো। অফার চলছে: বিল ৫০০ টাকার বেশি হলে কোক ফ্রি!
 * শর্ত:
 * - বিলের পরিমাণ ৫০০ টাকার বেশি হলে "Free Coke" পাবে।
 * - নাহলে কোকের দাম ৩০ টাকা বিলের সাথে যোগ হবে।
 * * | Value of burgerPrice | Output (console.log)      |
 * | :------------------- | :------------------------ |
 * | 600                  | "Coke is Free!"           |
 * | 400                  | "Coke: 30tk. Total: 430"  |
 */
// তোমার কোড এখানে লেখো...

const price = 600;

// const result =
//   price >= 500 ? "Coke is Free✅" : "Coke: 30tk " + "Total: " + (price + 30);

// console.log(result)

// if (price >= 500) {
//   console.log("Coke is Free!");
// } else {
//   console.log("Coke: 30tk " + "Total " + (price + 30))
// }

/**
 * PROBLEM 02: Grade Calculator (রেজাল্ট শিট)
 * * গল্প: ছাত্রের প্রাপ্ত নম্বরের ওপর ভিত্তি করে গ্রেড নির্ণয়।
 * শর্ত:
 * - Score >= 90 হলে "A+"
 * - Score >= 80 হলে "A"
 * - Score >= 70 হলে "B"
 * - Score >= 60 হলে "C"
 * - বাকি সব ক্ষেত্রে "F"
 * * | Value of score       | Output (string)           |
 * | :------------------- | :------------------------ |
 * | 95                   | "A+"                      |
 * | 65                   | "C"                       |
 * | 45                   | "F"                       |
 */

// var score = 85;
// তোমার কোড এখানে লেখো...

// let score = 71;

// if (score >= 90) {
//   console.log("A+");
// } else if (score >= 80) {
//   console.log("A");
// } else if (score >= 70) {
//   console.log("B");
// } else if (score >= 60) {
//   console.log("C");
// } else {
//   console.log("F");
// }

// switch (true) {
//   case score >= 90:
//     console.log("A+");
//     break;
//   case score >= 80:
//     console.log("A");
//     break;
//   case score >= 70:
//     console.log("B");
//     break;
//   case score >= 60:
//     console.log("C");
//     break;
//   default:
//     console.log("F");
// }

/**
 * PROBLEM 03: Friend or Enemy (বন্ধুর রেটিং)
 * * গল্প: তোমার বন্ধুর স্কোরের ওপর ভিত্তি করে তার সাথে তোমার আচরণ কেমন হবে।
 * শর্ত:
 * - বন্ধুর স্কোর > ৮০ হলে: "Go for a lunch"
 * - বন্ধুর স্কোর < ৮০ এবং >= ৬০ হলে: "Good luck next time"
 * - বন্ধুর স্কোর < ৬০ এবং >= ৪০ হলে: "Message unseen"
 * - বন্ধুর স্কোর < ৪০ হলে: "Block your friend"
 * * | Value of friendScore | Output (string)           |
 * | :------------------- | :------------------------ |
 * | 85                   | "Go for a lunch"          |
 * | 50                   | "Message unseen"          |
 * | 30                   | "Block your friend"       |
 */

// let friendScore = 65;

// switch (true) {
//   case friendScore > 80:
//     console.log("Go for a Lunch");
//     break;
//   case friendScore >= 60:
//     console.log("Good luck next time.");
//     break;
//   case friendScore >= 40:
//     console.log("Message unseen");
//     break;
//   default:
//     console.log("Block your friend");
// }

// if (friendScore > 80) {
//   console.log("Go for a Lunch.");
// } else if (friendScore >= 60) {
//   console.log("Good luck next time.");
// } else if (friendScore >= 40) {
//   console.log("Message unseen.");
// } else {
//   console.log("Block your friend.");
// }

/**
 * PROBLEM 04: Electricity Bill (বিদ্যুৎ বিল)
 * * গল্প: বিদ্যুৎ ব্যবহারের ইউনিটের ওপর ভিত্তি করে বিলের রেট পরিবর্তন হয়।
 * শর্ত:
 * - ইউনিট < ১০০ হলে: প্রতি ইউনিট ৫ টাকা।
 * - ইউনিট >= ১০০ এবং < ২০০ হলে: প্রতি ইউনিট ৬ টাকা।
 * - বাকি সব ক্ষেত্রে: প্রতি ইউনিট ৭ টাকা।
 * * | Value of unit        | Output (total bill)       |
 * | :------------------- | :------------------------ |
 * | 50                   | 250                       |
 * | 150                  | 900                       |
 */

// var unit = 120;
// তোমার কোড এখানে লেখো...
// let unit = 150;

// if (unit < 100) {
//   console.log(unit * 5);
// } else if (unit < 200) {
//   console.log(unit * 6);
// } else {
//   console.log(unit * 7);
// }

/**
 * PROBLEM 05: Biye Bari (বিয়ের পাত্র)
 * (Reference: multiple.js logic)
 * * গল্প: পাত্রের যোগ্যতা যাচাই করা হবে।
 * শর্ত:
 * - বেতন ২৫০০০ এর বেশি অথবা সরকারি চাকরি হতে হবে।
 * - দুইটির যেকোনো একটি থাকলেই "Patro Chai"।
 * - না হলে "Onno Patro Khuji"।
 * * | salary, isGovtJob    | Output (string)           |
 * | :------------------- | :------------------------ |
 * | 30000, false         | "Patro Chai"              |
 * | 20000, true          | "Patro Chai"              |
 * | 15000, false         | "Onno Patro Khuji"        |
 */

// var salary = 20000;
// var isGovtJob = true;
// তোমার কোড এখানে লেখো...
// let salary = 15000;
// let isGovtJob = true;

// if (salary >= 25000 || isGovtJob) {
//   console.log("Patro Chai");
// } else {
//    console.log("Onno Patro Khuji!")
// }

/**
 * PROBLEM 06: Picnic Budget (পিকনিক প্ল্যান)
 * (Reference: nested.js logic)
 * * গল্প: পকেটের টাকার ওপর ভিত্তি করে সিদ্ধান্ত নিতে হবে কোথায় যাবে।
 * শর্ত:
 * - টাকা >= ৫০০০ হলে: "Cox's Bazar"
 * - টাকা >= ২০০০ এবং < ৫০০০ হলে: "Sajek"
 * - বাকি সব ক্ষেত্রে: "Basay Bose Thako"
 * * | Value of money       | Output (string)           |
 * | :------------------- | :------------------------ |
 * | 6000                 | "Cox's Bazar"             |
 * | 3000                 | "Sajek"                   |
 */

// var money = 6000;
// তোমার কোড এখানে লেখো...

/**
 * PROBLEM 07: Shopping Discount (ঈদের কেনাকাটা)
 * (Reference: stepped.js logic)
 * * গল্প: মোট কেনাকাটার ওপর ডিসকাউন্ট দেওয়া হবে।
 * শর্ত:
 * - বিল >= ৫০০০ হলে ২০% ডিসকাউন্ট।
 * - বিল >= ৩০০০ হলে ১০% ডিসকাউন্ট।
 * - না হলে কোনো ডিসকাউন্ট নেই।
 * * | Value of bill        | Output (Final Amount)     |
 * | :------------------- | :------------------------ |
 * | 5000                 | 4000                      |
 * | 3000                 | 2700                      |
 */

// var bill = 5000;
// তোমার কোড এখানে লেখো...
// let bill = 3000;

// if (bill >= 5000) {
//   // Disconut 20%
//   const discount = (bill * 20) / 100;
//   const returnMoney = bill - discount;
//   console.log(returnMoney)
// } else if (bill >= 3000) {
//    // Discount 10%
//    const discount = (bill * 10) / 100;
//    const payAmount = bill - discount;
//    console.log(payAmount)
// }

/**
 * PROBLEM 08: Entry Ticket (পার্কের টিকিট)
 * (Reference: restaurant.js logic)
 * * গল্প: বয়স ভেদে টিকিটের দাম আলাদা। মূল ভাড়া ৫০০ টাকা।
 * শর্ত:
 * - বয়স < ১০ হলে টিকিট ফ্রি।
 * - ছাত্র (isStudent) হলে ৫০% ছাড়।
 * - বয়স >= ৬০ হলে ১৫% ছাড়।
 * - অন্যথায় পুরো টাকা।
 * * | age, isStudent       | Output (Price)            |
 * | :------------------- | :------------------------ |
 * | 8, false             | 0                         |
 * | 22, true             | 250                       |
 * | 65, false            | 425                       |
 */

// var age = 22;
// var isStudent = true;
// তোমার কোড এখানে লেখো...
// const rent = 500;
// let isStudent = false;
// let age = 65;

// if (age >= 60) {
//   const discount = (rent * 15) / 100;
//   const payAmount = rent - discount;
//   console.log(payAmount);
// } else if (isStudent) {
//   const discount = (rent * 50) / 100;
//   const payAmount = rent - discount;
//   console.log(payAmount)
// } else if (age <= 10) {
//    console.log(0)
// } else {
//    console.log(rent)
// }

/**
 * PROBLEM 9: Weekday Checker (আজ কি বার?)
 * * গল্প: সপ্তাহের দিনের নাম প্রিন্ট করতে হবে।
 * শর্ত:
 * - day = 1 হলে "Saturday", 2 হলে "Sunday"... এভাবে 7 হলে "Friday"।
 * - ভুল নম্বর দিলে "Invalid Day"।
 */

// let date = new Date();
// let today = date.getDay();

// switch (today) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//    default:
//       console.log("Invalid Number")
//       break;
// }

// if (today === 0) {
//   console.log("Sunday");
// } else if (today === 1) {
//   console.log("Monday");
// } else if (today === 2) {
//   console.log("Tuesday");
// } else if (today === 3) {
//   console.log("Wednesday");
// } else if (today === 4) {
//   console.log("Thursday");
// } else if (today === 5) {
//   console.log("Friday");
// } else if (today === 6) {
//   console.log("Saturday");
// } else {
//   console.log("Number Is invalid");
// }

// var day = 2;
// তোমার কোড এখানে লেখো...

// ----------------------------------------------------
// নিচের গুলো কুইক প্র্যাকটিস (Short Practice)
// ----------------------------------------------------

// ১১. লগইন সিস্টেম
// শর্ত: username "admin" এবং password "12345" হলে "Login Successful", নাহলে "Invalid"।

// let userName = "admin";
// let password = 12345;

// if (userName === "admin" && password === 12345) {
//   console.log("Login Successful");
// } else {
//   console.log("Invaild");
// }

// ১২. জোড় না বিজোড় (Odd or Even)
// শর্ত: সংখ্যাটি ২ দিয়ে ভাগ করলে ভাগশেষ ০ হলে "Even", না হলে "Odd"।

// let number = 201;

// if (number % 2 === 0) {
//    console.log("EVEN");
// } else {
//    console.log("ODD")
// }

// ১৩. বড় সংখ্যা নির্ণয়
// শর্ত: তিনটি সংখ্যা (num1, num2, num3) এর মধ্যে সবচেয়ে বড়টি প্রিন্ট করো।

// let num1 = 5888800;
// let num2 = 30000;
// let num3 = 298897;

// if (num1 > num2 && num1 > num3) {
//    console.log(num1)
// } else if (num2 > num1 && num2 > num3) {
//    console.log(num2)
// } else {
//    console.log(num3)
// }

// ১৪. ত্রিভুজের ধরণ
// শর্ত: তিন বাহু সমান হলে "সমবাহু", দুই বাহু সমান হলে "সমদ্বিবাহু", কোনোটাই না হলে "বিষমবাহু"।

// ১৫. স্যালারি বোনাস
// শর্ত: experience > ৫ বছর এবং performance "Excellent" হলে ২০% বোনাস, নাহলে ৫%।

// const amount = 5000;
// let experience = 5;
// let performance = "Excellent";

if (experience > 5 && performance === "Excellent") {
  // Discount 20%
  let discount = (amount * 20) / 100;
  let payAmount = amount + discount;
  console.log(payAmount)
} else {
   // Discount 5%
   let discount = (amount * 5) / 100;
   let payAmount = amount + discount;
   console.log(payAmount)
}

// ১৬. ড্রাইভিং লাইসেন্স
// শর্ত: বয়স ১৮ বা তার বেশি হলে "Drive Now", নাহলে "Too Young"।

// let age = 18;

// const result = age >= 18 ? "Drive Now!" : "Too Young!";
// console.log(result)

// ১৭. ভাওয়েল না কনসোনেন্ট
// শর্ত: অক্ষরটি a, e, i, o, u এর মধ্যে হলে "Vowel", নাহলে "Consonant"।

// let letter = "b";

// if (
//   letter === "a" ||
//   letter === "e" ||
//   letter === "i" ||
//   letter === "o" ||
//   letter === "u"
// ) {
//   console.log("Vowel");
// } else {
//    console.log("Consonant")
// }

// ১৮. পাস না ফেল (Ternary Operator)
// শর্ত: marks >= 33 ? "Pass" : "Fail" (এক লাইনে ternary দিয়ে লেখো)।

// let marks = 33;
// let result = marks >= 33 ? "Pass" : "Fail";
// console.log(result)

// ১৯. পজিটিভ না নেগেটিভ
// শর্ত: সংখ্যা > ০ হলে "Positive", < ০ হলে "Negative", == ০ হলে "Zero"।



// ২০. জটিল বিয়ের শর্ত (Complex Condition - multiple.js)
// শর্ত: (salary > 25000 এবং hasCar == true) অথবা (isBCS == true) হলে "Raji", নাহলে "Naraj"।

// ২১. ঋতু বৈচিত্র্য
// শর্ত: মাস ৩-৫ (Spring), ৬-৮ (Summer), ৯-১১ (Autumn), ১২-২ (Winter)।

// ২২. শপিং কার্ট চেক
// শর্ত: totalItems > 0 হলে "Proceed", নাহলে "Cart Empty"।

// ২৩. ট্রাফিক সিগন্যাল
// শর্ত: লাল="Stop", হলুদ="Wait", সবুজ="Go"।

// ২৪. লিপ ইয়ার
// শর্ত: (Year % 4 == 0) এবং (Year % 100 != 0) অথবা (Year % 400 == 0) হলে লিপ ইয়ার।

// ২৫. সাধারণ ক্যালকুলেটর
// শর্ত: দুটি সংখ্যা ও অপারেটর (+, -, *, /) নিয়ে ফলাফল দেখাও।

// ২৬. পরীক্ষার উপস্থিতি
// শর্ত: উপস্থিতি ৭৫% এর কম হলে "Not Eligible", বেশি হলে "Eligible"।

// ২৭. পরম মান (Absolute Value)
// শর্ত: সংখ্যা নেগেটিভ হলে তাকে -১ দিয়ে গুণ করে পজিটিভ বানাও।

// ২৮. রক্তদান কর্মসূচি
// শর্ত: বয়স ১৮+ এবং ওজন ৫০+ কেজি হলে "Can Donate", নাহলে "Cannot Donate"।

// ২৯. নেস্টেড টেনারি (Nested Ternary)
// শর্ত: num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero" (এক লাইনে)।

// ৩০. মেম্বারশিপ ডিসকাউন্ট
// শর্ত: isMember == true হলে ১০% ছাড়, না হলে পুরো পেমেন্ট।
