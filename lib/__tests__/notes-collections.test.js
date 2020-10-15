'use strict';

require('@code-fellows/supergoose');
const testNote = require('../notes.js');

describe('testing notes collection', ()=> {
  it ('should add a new notes when run form the command line', () => {
    const note1 = new testNote({category: 'cf', action: '--add', payload: 'this is the test note'})
    return note1.execute(note1.action).then((result) => {
      expect(result.text).toEqual('this is the test note');
    })
  })
})

//add its! dont need new describe 


// describe('testing notes', () => {
//   it ('should list all notes in the database', () => {
//     //return note1.execute('--list').then.(())
//   })
// })

// describe('testing notes', () => {
//   it ('should delete the note with the given id', () => {
    
//   })
// })