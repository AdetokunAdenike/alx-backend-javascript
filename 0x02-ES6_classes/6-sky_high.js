import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  // Constructor to initialize sqft and floors
  constructor(sqft, floors) {
    super(sqft); // Call the parent class constructor
    // Validate that floors is a number
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    // Store the floors value in a private attribute
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors.`;
  }
}
