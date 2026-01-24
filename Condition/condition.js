//! Example 1:
let catchBus = true;

if (catchBus) {
    console.log("I will return home...");
} else {
    console.log("I will not return home...")
}

//? Ternary Operator
let result = catchBus ? "I will return Home..." : "I Will NOT return HOme...";
console.log(result)

//! Example 2:
let age = 19;

if (age >= 18) {
    console.log("You are Eligible to Vote")
} else {
    console.log("You are NOT Eligible to Vote")
}

//? Ternary Operator
let result2 = age >= 18 ? "You are eligiable to Vote" : "You are NOT eligible to Vote";
console.log(result2) 


//! Let's build a grading system:
let score = 700;

if (score >= 80) {
    console.log("I Got A+");
} else if (score >= 70) {
    console.log("A");
} else if (score >= 50) {
    console.log("B");
} else if (score >= 40) {
    console.log("D");
} else {
    console.log("Fail");
}


//! Important:
// let x = 0;

// if (x === 0) {
//     console.log(0);
// }
// if (x >= 0) {
//     console.log("Grater than 0");
// } 
// if (x <= 0) {
//     console.log("Less than 0");
// }


//! Switch Case:

//? Example 1:

let colors = "green";

switch (colors) {
    case "red":
        console.log("Stop🚫");
        break;
    case "yellow":
        console.log("Ready💨");
        break;
    case "green":
        console.log("GO! GO! GO!⛳")
        break;
    default:
        console.log("Trafic Light Brocken💔")
}

//? Example 2:
let position = 1;

switch (position) {
    case 1:
        console.log("Print 1");
        break;
    case 2:
        console.log("Print 2");
        break;
    case 3: 
        console.log("Print 3");
        break;
    case 4: 
        console.log("Print 4");
        break;
    default:
        console.log("This is another Position");
}

//? Example 3:
let days = 0;

switch (days) {
    case 1:
        console.log("Saturday");
        break;
    case 2:
        console.log("Sunday");
        break;
    case 3:
        console.log("Monday");
        break;
    case 4: 
        console.log("Tuesday");
        break;
    case 5:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    case 7:
        console.log("Friday");
        break;
    default:
        console.log("Invalid Number");
        break;
}

//? Example 4:
let salary = 20000;
let height = 7;
let isBCS = false;

if ((salary >= 20000 && height >= 6) || isBCS) {
    console.log("Eso Baba Kobul");
} else {
    console.log("Vaag tui molbul");
}

//? Example 5:
const price = 3000;

// if (price >= 5000) {
//     // 10% Discount
//     const discount = price * 10 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount);
// } else {
//     console.log(price);
// }

if (price >= 5000) {
    // 10% Discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
} else if (price >= 3000) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount)

} else {
    console.log(price);
}

