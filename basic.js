// ==============================
// PART 2: Basic Types in TypeScript
// ==============================
// ----------- Primitives -----------
var userId = 101; // number type
var userName = "Raju"; // string type
var isLoggedIn = true; // boolean type
console.log("User ID:", userId);
console.log("User Name:", userName);
console.log("Is Logged In:", isLoggedIn);
// ----------- Arrays -----------
var scores = [95, 88, 76]; // Array of numbers
var fruits = ["Apple", "Banana", "Cherry"]; // Array using generic syntax
console.log("Scores:", scores);
console.log("Fruits:", fruits);
// ----------- Tuples -----------
var user = [1, "Raju"]; // Tuple: fixed structure [number, string]
console.log("Tuple User:", user);
// ----------- Enums -----------
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var move = Direction.Left;
console.log("Move Direction (enum index):", move); // Outputs 2
// Enum with custom values
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Failure"] = "FAILURE";
})(Status || (Status = {}));
var loginStatus = Status.Success;
console.log("Login Status (enum string):", loginStatus); // Outputs "SUCCESS"
