'use strict';

// function NoteFromCommandLine (action,payload) {
//   this.action = action;
//   this.payload = payload
// }


class NoteFromCommandLine{
  constructor (args){
    this.payload = args[3];
    this.category = args[4];
    this.action = this.verifyInput(args[2]) ? args[2] : null;
    
  }

  verifyInput(action){
    if(action=="-a" ||action=='--add') {
      //console.log(process.argv(3))
      return true;
    } else if(action == '--list' ){
      this.category = this.payload;
      return true;
    } else if( action== '--delete') {
      this.id = this.payload;
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