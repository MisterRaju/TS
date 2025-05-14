// ===================================================
// PART 6: Type Narrowing, Type Assertions, and unknown
// ===================================================

// ----------- Type Narrowing with typeof -----------
function printLength(input: string | number) {
  if (typeof input === "string") {
    // Now TypeScript knows input is a string
    console.log(input.toUpperCase());
  } else {
    // input must be a number here
    console.log(input.toFixed(2));
  }
}

printLength("Raju");
printLength(99.456);

// ----------- Type Narrowing with 'in' -----------
type Bird = { fly: () => void };
type Fish = { swim: () => void };

function moveAnimal(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly(); // TypeScript knows it's a Bird
  } else {
    animal.swim(); // TypeScript knows it's a Fish
  }
}

const bird: Bird = {
  fly: () => console.log("Flying... 🕊️"),
};

const fish: Fish = {
  swim: () => console.log("Swimming... 🐟"),
};

moveAnimal(bird);
moveAnimal(fish);

// ----------- Type Narrowing with instanceof -----------
function formatDate(input: Date | string) {
  if (input instanceof Date) {
    console.log(input.toISOString()); // Safe as Date
  } else {
    console.log(new Date(input).toISOString()); // Convert string to Date
  }
}

formatDate(new Date());
formatDate("2025-01-01");

// ----------- Type Assertion -----------
let val: unknown = "TypeScript is powerful";

let length1: number = (val as string).length;
// OR: let length2: number = (<string>val).length

console.log("Length of val (asserted as string):", length1);

// ----------- unknown vs any -----------
let inputValue: unknown;

inputValue = "hello";
inputValue = 123;

if (typeof inputValue === "number") {
  console.log("Safe to use as number:", inputValue.toFixed(1));
}

// let unsafe: any = "This could break";
// console.log(unsafe.toFixed()); // ❌ Runtime Error if not a number
