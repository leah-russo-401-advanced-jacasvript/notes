'use strict';

function NoteFromCommandLine (action,payload) {
  this.action = action;
  this.payload = payload
}

// let verifyInput = function() {
//   if(process.argv[2]==="-a" || process.argv[2]==='--add') {
//     //console.log(process.argv(3))
//     let newNote = new NoteFromCommandLine(process.argv[2],process.argv[3]);
//     console.log(newNote);
//   } else {console.log('not a valid command')}
// }

NoteFromCommandLine.prototype.verifyInput = function(action,payload) {
  if(action=="-a" ||action=='--add') {
    //console.log(process.argv(3))
    return new NoteFromCommandLine(action,payload);
    console.log(newNote);
  } else {return 'not a valid command'}
}



NoteFromCommandLine.prototype.verifyInput();

module.exports = NoteFromCommandLine;