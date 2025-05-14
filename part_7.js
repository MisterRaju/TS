// ===================================================
// Single Example: Vehicle and ElectricVehicle Classes
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
var Vehicle = /** @class */ (function () {
    function Vehicle(vehicleModel, vehicleYear) {
        this.vehicleModel = vehicleModel;
        this.vehicleYear = vehicleYear;
    }
    Vehicle.prototype.startEngine = function () {
        console.log("".concat(this.vehicleModel, " engine is starting..."));
    };
    Vehicle.prototype.getYearOfManufacture = function () {
        return this.vehicleYear;
    };
    return Vehicle;
}());
var ElectricVehicle = /** @class */ (function (_super) {
    __extends(ElectricVehicle, _super);
    function ElectricVehicle(vehicleModel, vehicleYear, chargeLevel) {
        var _this = _super.call(this, vehicleModel, vehicleYear) || this;
        _this.chargeLevel = chargeLevel;
        return _this;
    }
    ElectricVehicle.prototype.recharge = function () {
        this.chargeLevel = 100;
        console.log("".concat(this.vehicleModel, " is now fully charged!"));
    };
    ElectricVehicle.prototype.startEngine = function () {
        if (this.chargeLevel > 0) {
            console.log("".concat(this.vehicleModel, " is starting silently... \uD83D\uDE97\u26A1"));
        }
        else {
            console.log("Cannot start ".concat(this.vehicleModel, ", battery is empty."));
        }
    };
    ElectricVehicle.prototype.getChargeLevel = function () {
        return this.chargeLevel;
    };
    return ElectricVehicle;
}(Vehicle));
// Create a new ElectricVehicle instance
var myElectricVehicle = new ElectricVehicle("Nissan Leaf", 2020, 60);
// Use methods from both Vehicle and ElectricVehicle classes
myElectricVehicle.startEngine(); // Output: Nissan Leaf is starting silently... 🚗⚡
myElectricVehicle.recharge(); // Output: Nissan Leaf is now fully charged!
myElectricVehicle.startEngine(); // Output: Nissan Leaf is starting silently... 🚗⚡
console.log("Year of manufacture: ".concat(myElectricVehicle.getYearOfManufacture())); // Accessing method from Vehicle class
console.log("Charge level: ".concat(myElectricVehicle.getChargeLevel(), "%")); // Accessing method from ElectricVehicle class
