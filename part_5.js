// ===================================================
// PART 5: Advanced Types - Union, Intersection, Literal, Type Guards
// ===================================================
// ----------- Union Types ( | ) -----------
var value;
value = "Hello"; // ✅
value = 123; // ✅
// value = true; // ❌ Error
console.log("Union Type Value:", value);
var emp = {
    name: "Raju",
    company: "OpenAI"
};
console.log("Intersection Type (Employee):", emp);
// ----------- Literal Types -----------
var role;
role = "admin"; // ✅
role = "guest"; // ✅
// role = "manager"; // ❌ Error
console.log("Literal Type Role:", role);
// ----------- Type Guards with typeof -----------
function printValue(val) {
    if (typeof val === "string") {
        console.log("It's a string:", val.toUpperCase());
    }
    else {
        console.log("It's a number:", val.toFixed(2));
    }
}
printValue("TypeScript");
printValue(3.14159);
function speak(animal) {
    if ("bark" in animal) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
var myDog = {
    bark: function () { return console.log("Woof! 🐶"); },
};
var myCat = {
    meow: function () { return console.log("Meow! 🐱"); },
};
speak(myDog);
speak(myCat);
