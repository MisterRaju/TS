// ==============================
// PART 1: Basic Setup & Example
// ==============================

// Install TypeScript

// npm install -g typescript
// Installs the TypeScript compiler globally.
// You can now use the tsc command in your terminal.
// tsc stands for TypeScript Compiler.

// Check Installation

// tsc --version
// Confirms installation and shows the installed version.
// Make sure it prints something like 5.x.x.

//  Initialize a Project

// mkdir ts-learning
// cd ts-learning
// npm init -y
// tsc --init

//  Create First TS File

// touch index.ts
// Inside index.ts, write:

// Declaring a string variable with explicit type annotation
let message: string = "Hello TypeScript!";
console.log("Message:", message);

// Compile & Run

// tsc index.ts      # Compiles index.ts to index.js
// node index.js     # Runs the compiled JS file
