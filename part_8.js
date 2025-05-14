// ===================================================
// PART 8: Generics
// ===================================================
// ----------- 1. Generic Function -----------
// A generic function that returns the input value
function identity(value) {
    return value;
}
var num = identity(5); // number
var str = identity("Hello"); // string
console.log(num); // 5
console.log(str); // "Hello"
var numberBox = { value: 100 };
var stringBox = { value: "Hello, TypeScript!" };
console.log(numberBox.value); // 100
console.log(stringBox.value); // "Hello, TypeScript!"
// ----------- 3. Generic Class -----------
// A generic class to implement a Queue data structure
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    Queue.prototype.peek = function () {
        return this.items[0];
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
// ----------- 4. Generic Constraints -----------
// Generic function with constraint to accept only types with 'length' property
function getLength(value) {
    return value.length;
}
console.log(getLength("Hello")); // 5 (string has length)
console.log(getLength([1, 2, 3])); // 3 (array has length)
// console.log(getLength(5)); // Error: number doesn't have length
// ----------- 5. Default Generic Types -----------
// Generic function with a default type for the generic parameter
function wrap(value) {
    return value;
}
console.log(wrap(5)); // 5 (number)
console.log(wrap("Hello")); // "Hello" (string)
// ----------- 6. Using Multiple Generics -----------
// A function with multiple generic type parameters
function createPair(first, second) {
    return [first, second];
}
var pair = createPair("Hello", 42);
console.log(pair); // ["Hello", 42]
