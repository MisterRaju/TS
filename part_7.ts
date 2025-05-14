// ===================================================
// Single Example: Vehicle and ElectricVehicle Classes
// ===================================================

class Vehicle {
  protected vehicleModel: string;
  private vehicleYear: number;

  constructor(vehicleModel: string, vehicleYear: number) {
    this.vehicleModel = vehicleModel;
    this.vehicleYear = vehicleYear;
  }

  public startEngine(): void {
    console.log(`${this.vehicleModel} engine is starting...`);
  }

  public getYearOfManufacture(): number {
    return this.vehicleYear;
  }
}

class ElectricVehicle extends Vehicle {
  private chargeLevel: number;

  constructor(vehicleModel: string, vehicleYear: number, chargeLevel: number) {
    super(vehicleModel, vehicleYear);
    this.chargeLevel = chargeLevel;
  }

  public recharge(): void {
    this.chargeLevel = 100;
    console.log(`${this.vehicleModel} is now fully charged!`);
  }

  public startEngine(): void {
    if (this.chargeLevel > 0) {
      console.log(`${this.vehicleModel} is starting silently... 🚗⚡`);
    } else {
      console.log(`Cannot start ${this.vehicleModel}, battery is empty.`);
    }
  }

  public getChargeLevel(): number {
    return this.chargeLevel;
  }
}

// Create a new ElectricVehicle instance
const myElectricVehicle = new ElectricVehicle("Nissan Leaf", 2020, 60);

// Use methods from both Vehicle and ElectricVehicle classes
myElectricVehicle.startEngine();  // Output: Nissan Leaf is starting silently... 🚗⚡
myElectricVehicle.recharge();     // Output: Nissan Leaf is now fully charged!
myElectricVehicle.startEngine();  // Output: Nissan Leaf is starting silently... 🚗⚡

console.log(`Year of manufacture: ${myElectricVehicle.getYearOfManufacture()}`); // Accessing method from Vehicle class
console.log(`Charge level: ${myElectricVehicle.getChargeLevel()}%`);  // Accessing method from ElectricVehicle class
