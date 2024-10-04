import Currency from './3-currency.js';  // Import the Currency class

export default class Pricing {
  // Constructor to initialize the attributes
  constructor(amount, currency) {
    // Validate the types of the attributes
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }

    // Assign the values to private attributes
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  // Method to return the full price in the format "amount currency_name (currency_code)"
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price with a given conversion rate
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
