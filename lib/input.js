'use strict';

// function NoteFromCommandLine (action,payload) {
//   this.action = action;
//   this.payload = payload
// }

class NoteFromCommandLine{
  constructor (action,payload){
    this.action = this.verifyInput(action) ? action : null;
    this.payload = payload;
  }

  verifyInput(action){
    if(action=="-a" ||action=='--add') {
      //console.log(process.argv(3))
      return true;
    } else {return false}
  }
}


// NoteFromCommandLine.prototype.verifyInput = function(action,payload) {
//   if(action=="-a" ||action=='--add') {
//     //console.log(process.argv(3))
//     return new NoteFromCommandLine(action,payload);
//     console.log(newNote);
//   } else {return 'not a valid command'}
// }



NoteFromCommandLine.prototype.verifyInput();

module.exports = NoteFromCommandLine;