// ===================================================
// PART 5: Advanced Types - Union, Intersection, Literal, Type Guards
// ===================================================

// ----------- Union Types ( | ) -----------
let value: string | number;

value = "Hello"; // ✅
value = 123; // ✅
// value = true; // ❌ Error

console.log("Union Type Value:", value);

// ===============================================
// Intersection Types 
// ===============================================

type Person = {
  name: string;
};

type JobInfo = {
  company: string;
};

// Intersection combines both
type Employee = Person & JobInfo;

const emp: Employee = {
  name: "Raju",
  company: "OpenAI"
};

console.log("Intersection Type (Employee):", emp);



// ----------- Literal Types -----------
let role: "admin" | "user" | "guest";

role = "admin"; // ✅
role = "guest"; // ✅
// role = "manager"; // ❌ Error

console.log("Literal Type Role:", role);

// ----------- Type Guards with typeof -----------
function printValue(val: string | number): void {
  if (typeof val === "string") {
    console.log("It's a string:", val.toUpperCase());
  } else {
    console.log("It's a number:", val.toFixed(2));
  }
}

printValue("TypeScript");
printValue(3.14159);

// ----------- Type Guards with 'in' (object property check) -----------
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function speak(animal: Dog | Cat): void {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const myDog: Dog = {
  bark: () => console.log("Woof! 🐶"),
};

const myCat: Cat = {
  meow: () => console.log("Meow! 🐱"),
};

speak(myDog);
speak(myCat);
