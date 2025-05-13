// ==========================================
// PART 4: Type Aliases, Interfaces, and Objects
// ==========================================

// ----------- Object with Inline Type Annotation -----------
let userInfo: { name: string; age: number } = {
  name: "Raju",
  age: 20
};
console.log("User Object:", userInfo);

// ----------- Type Alias for Object Structure -----------
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

let admin: User = {
  id: 1,
  name: "Admin",
  isAdmin: true
};
console.log("Admin User:", admin);

// ----------- Interface for Object Structure -----------
interface Product {
  id: number;
  title: string;
  price: number;
}

let item: Product = {
  id: 101,
  title: "Laptop",
  price: 1500
};
console.log("Product Item:", item);

// ----------- Type Alias for Union Type -----------
type ID = number | string;

let userId1: ID = 123;
let userId2: ID = "abc-123";
console.log("User IDs:", userId1, userId2);

// ----------- Optional and Readonly Properties in Interface -----------
interface Car {
  model: string;
  year?: number;          // Optional
  readonly vin: string;   // Readonly - cannot be reassigned
}

const myCar: Car = {
  model: "Tesla",
  vin: "TSL12345"
};

myCar.model = "Tesla S";  // ✅ allowed
// myCar.vin = "NEWVIN456"; // ❌ Error: Cannot assign to 'vin' because it is a read-only property

console.log("My Car:", myCar);
