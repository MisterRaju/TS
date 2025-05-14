// ===================================================
// PART 8: Generics
// ===================================================

// ----------- 1. Generic Function -----------
// A generic function that returns the input value
function identity<T>(value: T): T {
  return value;
}

let num = identity(5);  // number
let str = identity("Hello");  // string

console.log(num);  // 5
console.log(str);  // "Hello"

// ----------- 2. Generic Interface -----------
// A generic interface to wrap any type
interface Box<T> {
  value: T;
}

let numberBox: Box<number> = { value: 100 };
let stringBox: Box<string> = { value: "Hello, TypeScript!" };

console.log(numberBox.value);  // 100
console.log(stringBox.value);  // "Hello, TypeScript!"

// ----------- 3. Generic Class -----------
// A generic class to implement a Queue data structure
class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }
}

let queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);

console.log(queue.dequeue());  // 10
console.log(queue.peek());     // 20

// ----------- 4. Generic Constraints -----------
// Generic function with constraint to accept only types with 'length' property
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength("Hello"));  // 5 (string has length)
console.log(getLength([1, 2, 3]));  // 3 (array has length)
// console.log(getLength(5)); // Error: number doesn't have length

// ----------- 5. Default Generic Types -----------
// Generic function with a default type for the generic parameter
function wrap<T = string>(value: T): T {
  return value;
}

console.log(wrap(5));           // 5 (number)
console.log(wrap("Hello"));     // "Hello" (string)

// ----------- 6. Using Multiple Generics -----------
// A function with multiple generic type parameters
function createPair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

let pair = createPair("Hello", 42);
console.log(pair);  // ["Hello", 42]
