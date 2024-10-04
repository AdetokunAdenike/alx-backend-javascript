export default class Airport {
  // Constructor to initialize name and code
  constructor(name, code) {
    // Validate that name is a string
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    // Validate that code is a string
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }
    
    // Store attributes in underscore-prefixed variables
    this._name = name;
    this._code = code;
  }

  // Default string description of the class
  toString() {
    return this._code;
  }
}
