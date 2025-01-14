const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const url = 'http://localhost:7865/';

  it('should return status code 200', (done) => {
    request(url, (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request(url, (error, response, body) => {
      if (error) return done(error);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865/cart/';

  it('should return 200 and correct message for valid id', (done) => {
    request(`${baseUrl}12`, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for invalid id', (done) => {
    request(`${baseUrl}hello`, (error, response) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments', () => {
  it('should return the correct payment methods', (done) => {
    request('http://localhost:7865/available_payments', { json: true }, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('Login', () => {
  it('should return a welcome message for a valid userName', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'Betty',
      },
    };

    request(options, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('should return 400 for missing userName', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {},
    };

    request(options, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Missing userName');
      done();
    });
  });
});
