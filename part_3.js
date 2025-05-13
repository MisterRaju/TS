// ================================
// PART 3: Functions & Type Annotations
// ================================


// ---------- Function with Parameter & Return Type ----------
function add(a, b) {
    return a + b;
}
console.log("Add(5, 3):", add(5, 3)); // Output: 8
// ---------- Function with Void Return Type ----------
function greet(name) {
    console.log("Hello, " + name);
}
greet("Raju"); // Output: Hello, Raju
// ---------- Optional Parameters ----------
function printInfo(name, age) {
    console.log("Name:", name);
    if (age !== undefined) {
        console.log("Age:", age);
    }
}
printInfo("Raju"); // Output: Name: Raju
printInfo("Raju", 20); // Output: Name: Raju, Age: 20
// ---------- Default Parameters ----------
function greetUser(name) {
    if (name === void 0) { name = "Guest"; }
    return "Hello, ".concat(name);
}
console.log(greetUser()); // Output: Hello, Guest
console.log(greetUser("Raju")); // Output: Hello, Raju

// ---------- Arrow Function with Type Annotations ----------
var multiply = function (a, b) {
    return a * b;
};
console.log("Multiply(4, 6):", multiply(4, 6)); // Output: 24

// ---------- Type Inference ----------

var score = 100; // Inferred as number
var username = "Raju"; // Inferred as string
// score = "wrong";    // ❌ Error: Type 'string' is not assignable to type 'number'
console.log("Score:", score);
console.log("Username:", username);
