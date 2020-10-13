'use strict';

const NoteFromCommandLine = require("./input");

function Note(id,note) {
  this.id = id;
  this.note = note;
}

Note.prototype.add = function(payload) {
//checks the action/payload object and passes the note through the bananas function
console.log(`adding note: ${payload}`)

}

Note.prototype.execute = function(action,payload) {
  //if valid note, add note
  //else dont
  if(process.argv[2]=="-a" || process.argv[2]=='--add'){
    this.add(payload);
  }
}

module.exports = Note;