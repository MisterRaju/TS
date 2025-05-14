// ===================================================
// PART 6: Type Narrowing, Type Assertions, and unknown
// ===================================================
// ----------- Type Narrowing with typeof -----------
function printLength(input) {
    if (typeof input === "string") {
        // Now TypeScript knows input is a string
        console.log(input.toUpperCase());
    }
    else {
        // input must be a number here
        console.log(input.toFixed(2));
    }
}
printLength("Raju");
printLength(99.456);
function moveAnimal(animal) {
    if ("fly" in animal) {
        animal.fly(); // TypeScript knows it's a Bird
    }
    else {
        animal.swim(); // TypeScript knows it's a Fish
    }
}
var bird = {
    fly: function () { return console.log("Flying... 🕊️"); },
};
var fish = {
    swim: function () { return console.log("Swimming... 🐟"); },
};
moveAnimal(bird);
moveAnimal(fish);
// ----------- Type Narrowing with instanceof -----------
function formatDate(input) {
    if (input instanceof Date) {
        console.log(input.toISOString()); // Safe as Date
    }
    else {
        console.log(new Date(input).toISOString()); // Convert string to Date
    }
}
formatDate(new Date());
formatDate("2025-01-01");
// ----------- Type Assertion -----------
var val = "TypeScript is powerful";
var length1 = val.length;
// OR: let length2: number = (<string>val).length
console.log("Length of val (asserted as string):", length1);
// ----------- unknown vs any -----------
var inputValue;
inputValue = "hello";
inputValue = 123;
if (typeof inputValue === "number") {
    console.log("Safe to use as number:", inputValue.toFixed(1));
}
// let unsafe: any = "This could break";
// console.log(unsafe.toFixed()); // ❌ Runtime Error if not a number
