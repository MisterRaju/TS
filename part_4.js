// ==========================================
// PART 4: Type Aliases, Interfaces, and Objects
// ==========================================
// ----------- Object with Inline Type Annotation -----------
var userInfo = {
    name: "Raju",
    age: 20
};
console.log("User Object:", userInfo);
var admin = {
    id: 1,
    name: "Admin",
    isAdmin: true
};
console.log("Admin User:", admin);
var item = {
    id: 101,
    title: "Laptop",
    price: 1500
};
console.log("Product Item:", item);
var userId1 = 123;
var userId2 = "abc-123";
console.log("User IDs:", userId1, userId2);
var myCar = {
    model: "Tesla",
    vin: "TSL12345"
};
myCar.model = "Tesla S"; // ✅ allowed
// myCar.vin = "NEWVIN456"; // ❌ Error: Cannot assign to 'vin' because it is a read-only property
console.log("My Car:", myCar);
