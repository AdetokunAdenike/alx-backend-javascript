import Car from './10-car.js'; // Adjust the path as necessary

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  // Getter for the range attribute
  get range() {
    return this[_range];
  }

  // Override the cloneCar method to return an instance of Car
  cloneCar() {
    return new Car(this.brand, this.motor, this.color); // Returns a Car instance
  }
}
