export default class HolbertonClass {
  // Constructor to initialize size and location
  constructor(size, location) {
    // Validate that size is a number
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    // Validate that location is a string
    if (typeof location !== 'string') {
      throw new TypeError('location must be a string');
    }
    
    // Store attributes in underscore-prefixed variables
    this._size = size;
    this._location = location;
  }

  // Cast to a Number to return the size
  valueOf() {
    return this._size;
  }

  // Cast to a String to return the location
  toString() {
    return this._location;
  }
}
