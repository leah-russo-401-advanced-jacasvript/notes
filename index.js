'use strict';

const notes = require('./lib/notes.js');
const input = require('./lib/input.js');

const banana = new input(process.argv[2],process.argv[3])

 let results = banana.verifyInput(process.argv[2],process.argv[3])

 if(results!=='not a valid command'){
   const apple = new notes(process.argv[2],process.argv[3])
  apple.execute(process.argv[2],process.argv[3])
 } else {
   console.log('is not a valid command')
 }


