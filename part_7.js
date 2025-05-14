// ===================================================
// PART 7: Classes, Inheritance, and Access Modifiers
// ===================================================
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ----------- Basic Class Example -----------
var Student = /** @class */ (function () {
    function Student(fullName) {
        this.fullName = fullName;
    }
    Student.prototype.introduce = function () {
        console.log("Hello, my name is ".concat(this.fullName));
    };
    return Student;
}());
var student = new Student("Aria");
student.introduce(); // Output: Hello, my name is Aria
// ----------- Inheritance Example -----------
var Machine = /** @class */ (function () {
    function Machine(model) {
        this.model = model;
    }
    Machine.prototype.operate = function (hours) {
        console.log("".concat(this.model, " operated for ").concat(hours, " hours."));
    };
    return Machine;
}());
var Excavator = /** @class */ (function (_super) {
    __extends(Excavator, _super);
    function Excavator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Excavator.prototype.dig = function () {
        console.log("Digging the ground! 🚜");
    };
    return Excavator;
}(Machine));
var excavator = new Excavator("CAT 320D");
excavator.dig(); // Digging the ground! 🚜
excavator.operate(5); // CAT 320D operated for 5 hours.
// ----------- Access Modifiers Example -----------
// Access Modifiers: public, private, protected
var Smartphone = /** @class */ (function () {
    function Smartphone(brand, releaseYear) {
        this.brand = brand;
        this.releaseYear = releaseYear;
        this.batteryLevel = 100;
    }
    Smartphone.prototype.usePhone = function (hours) {
        this.batteryLevel -= hours * 10;
        console.log("".concat(this.brand, " phone used for ").concat(hours, " hours. Battery level: ").concat(this.batteryLevel, "%"));
    };
    Smartphone.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    return Smartphone;
}());
var smartphone = new Smartphone("Samsung", 2023);
smartphone.usePhone(3); // Samsung phone used for 3 hours. Battery level: 70%
console.log(smartphone.brand); // Accessible because it's public
// console.log(smartphone.releaseYear); // ❌ Error: 'releaseYear' is private
// console.log(smartphone.batteryLevel); // ❌ Error: 'batteryLevel' is protected
// ----------- Readonly and Parameter Properties -----------
// Using readonly to make properties immutable
var Laptop = /** @class */ (function () {
    function Laptop(model, manufactureYear) {
        this.model = model;
        this.manufactureYear = manufactureYear;
    }
    Laptop.prototype.getLaptopInfo = function () {
        return "".concat(this.model, ", manufactured in ").concat(this.manufactureYear);
    };
    return Laptop;
}());
var myLaptop = new Laptop("MacBook Pro", 2022);
console.log(myLaptop.getLaptopInfo()); // MacBook Pro, manufactured in 2022
// myLaptop.manufactureYear = 2023; // ❌ Error: Cannot assign to 'manufactureYear' because it is a read-only property.
// ----------- Getters and Setters Example -----------
// Using getter and setter to manage properties
var Product = /** @class */ (function () {
    function Product(name, cost) {
        this.name = name;
        this._cost = cost;
    }
    Object.defineProperty(Product.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        set: function (newCost) {
            if (newCost < 0) {
                console.log("Cost cannot be negative");
            }
            else {
                this._cost = newCost;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var newProduct = new Product("Smartwatch", 250);
console.log(newProduct.cost); // 250
newProduct.cost = -100; // Cost cannot be negative
newProduct.cost = 300; // Valid cost update
console.log(newProduct.cost); // 300
