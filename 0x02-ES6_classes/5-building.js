export default class Building {
  // Constructor to initialize the sqft attribute
  constructor(sqft) {
    // Validate that sqft is a number
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    // Store the sqft value in a private attribute
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Method that must be overridden by extending classes
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
