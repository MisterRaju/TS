// ===================================================
// PART 7: Classes, Inheritance, and Access Modifiers
// ===================================================

// ----------- Basic Class Example -----------
class Student {
  fullName: string;

  constructor(fullName: string) {
    this.fullName = fullName;
  }

  introduce(): void {
    console.log(`Hello, my name is ${this.fullName}`);
  }
}

const student = new Student("Aria");
student.introduce();  // Output: Hello, my name is Aria

// ----------- Inheritance Example -----------
class Machine {
  protected model: string;

  constructor(model: string) {
    this.model = model;
  }

  operate(hours: number): void {
    console.log(`${this.model} operated for ${hours} hours.`);
  }
}

class Excavator extends Machine {
  dig(): void {
    console.log("Digging the ground! 🚜");
  }
}

const excavator = new Excavator("CAT 320D");
excavator.dig();   // Digging the ground! 🚜
excavator.operate(5); // CAT 320D operated for 5 hours.

// ----------- Access Modifiers Example -----------
// Access Modifiers: public, private, protected

class Smartphone {
  public brand: string;
  private releaseYear: number;
  protected batteryLevel: number;

  constructor(brand: string, releaseYear: number) {
    this.brand = brand;
    this.releaseYear = releaseYear;
    this.batteryLevel = 100;
  }

  usePhone(hours: number): void {
    this.batteryLevel -= hours * 10;
    console.log(`${this.brand} phone used for ${hours} hours. Battery level: ${this.batteryLevel}%`);
  }

  getReleaseYear(): number {
    return this.releaseYear;
  }
}

const smartphone = new Smartphone("Samsung", 2023);
smartphone.usePhone(3);  // Samsung phone used for 3 hours. Battery level: 70%

console.log(smartphone.brand);  // Accessible because it's public
// console.log(smartphone.releaseYear); // ❌ Error: 'releaseYear' is private
// console.log(smartphone.batteryLevel); // ❌ Error: 'batteryLevel' is protected

// ----------- Readonly and Parameter Properties -----------
// Using readonly to make properties immutable
class Laptop {
  constructor(public model: string, private readonly manufactureYear: number) {}

  getLaptopInfo(): string {
    return `${this.model}, manufactured in ${this.manufactureYear}`;
  }
}

const myLaptop = new Laptop("MacBook Pro", 2022);
console.log(myLaptop.getLaptopInfo()); // MacBook Pro, manufactured in 2022

// myLaptop.manufactureYear = 2023; // ❌ Error: Cannot assign to 'manufactureYear' because it is a read-only property.

// ----------- Getters and Setters Example -----------
// Using getter and setter to manage properties
class Product {
  private _cost: number;

  constructor(private name: string, cost: number) {
    this._cost = cost;
  }

  get cost(): number {
    return this._cost;
  }

  set cost(newCost: number) {
    if (newCost < 0) {
      console.log("Cost cannot be negative");
    } else {
      this._cost = newCost;
    }
  }
}

const newProduct = new Product("Smartwatch", 250);
console.log(newProduct.cost); // 250

newProduct.cost = -100;  // Cost cannot be negative
newProduct.cost = 300;   // Valid cost update
console.log(newProduct.cost); // 300
