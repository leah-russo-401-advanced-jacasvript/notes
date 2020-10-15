'use strict';

const HTTP = require('./http.js');

describe('Testing the http module', () => {
  it('should add a new request when fetch is executed', () => {
    const request = new HTTP ({ url: 'HTTP.google.com',method: 'GET'})
  })
})