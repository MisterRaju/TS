// ==============================
// PART 2: Basic Types in TypeScript
// ==============================

// ----------- Primitives -----------

let userId: number = 101; // number type
let userName: string = "Raju"; // string type
let isLoggedIn: boolean = true; // boolean type

console.log("User ID:", userId);
console.log("User Name:", userName);
console.log("Is Logged In:", isLoggedIn);

// ----------- Arrays -----------

let scores: number[] = [95, 88, 76]; // Array of numbers
let fruits: Array<string> = ["Apple", "Banana", "Cherry"]; // Array using generic syntax

console.log("Scores:", scores);
console.log("Fruits:", fruits);

// ----------- Tuples -----------

let user: [number, string] = [1, "Raju"]; // Tuple: fixed structure [number, string]
console.log("Tuple User:", user);

// ----------- Enums -----------

enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Left;
console.log("Move Direction (enum index):", move); // Outputs 2

// Enum with custom values
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE"
}

let loginStatus: Status = Status.Success;
console.log("Login Status (enum string):", loginStatus); // Outputs "SUCCESS"