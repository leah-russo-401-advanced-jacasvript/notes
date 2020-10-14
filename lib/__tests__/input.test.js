'use strict';

const Input = require('../input.js');

describe('testing valid input from CLI', () => {
  test('something here', () => {
    const input = new Input('--add','stuff goes here');
    const input2 = new Input('--bad','stuff goes here');
    expect(input.action).toBeTruthy()
    expect(input).toBeTruthy()
    expect(input2.action).toBeFalsy()
  })
})

// describe('testing valid input from CLI', () => {
//   test('something here', () => {
//     expect().toBeTruthy(true)
//   })
// })