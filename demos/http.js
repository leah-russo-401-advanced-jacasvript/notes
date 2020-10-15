'use strict';

const requestModel = require('../model/model.js');

class HTTP {
  constructor(options = {}) { //passes an options object that has a default empty object if not specified 
    this.url = options.url;
    this.method = options.method;
    this.body = options.body;
  }

  fetch() {
    const newRequest = new requestModel(this);
    return newRequest.save();
  }
}

module.exports = HTTP